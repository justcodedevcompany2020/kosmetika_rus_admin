import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import './style.css'
import { useEffect, useState } from 'react'
import { Plus } from '../../Svg'
import { AddCategory } from '../AddCategory'
import { AddBanner } from '../AddBanner'

import { useDispatch, useSelector } from 'react-redux'
import { GetCategory, GetCollectionAction, GetPorductWhitePadborki, GetSliderAction } from '../../Services/action/action'
export const Main = () => {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState([])
    const [openCategory, setOpenCategory] = useState(false)
    const [openAddBanner, setOpenAddBanner] = useState(false)
    const [banerType, setBanerType] = useState('first')
    const [categoryPage, setCategpryPage] = useState(1)

    const { getCategory } = useSelector((st) => st)
    const { getSlider } = useSelector((st) => st)
    const { getCollections } = useSelector((st) => st)
    const [padborki, setPadborki] = useState([])
    const { GetProductPadborki } = useSelector((st) => st)
    const SelectCategoy = (e) => {
        setPadborki(e)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetCategory(2))
        dispatch(GetSliderAction('first'))
        dispatch(GetCollectionAction())
        dispatch(GetPorductWhitePadborki())
    }, [])


    useEffect(() => {
        setData(getCollections.data.data)
    }, [getCollections])


    return <div className={(openCategory || openAddBanner) ? 'activePopup' : 'inactive'}>
        <div>
            {openCategory &&
                <AddCategory
                    open={openCategory}
                    setOpen={setOpenCategory}
                    setBrendsPage={(e) => setCategpryPage(e)}
                />
            }
            {openAddBanner &&
                <AddBanner
                    open={openAddBanner}
                    setOpen={setOpenAddBanner}
                    type={banerType}
                // platformid={selectedBanner}
                />
            }
        </div>
        <div className='header'>
            <p>Главная</p>
        </div>
        <div className='BanerBlock1'>
            <div className='BanerBlock'>
                <p className="baner">Баннеры</p>
                <div className='Banerrr'>
                    {getSlider?.data?.map((elm, i) => {
                        return <div key={i} className='imgWrapperBaner'>
                            <img className='imgBaner' src={`https://basrarusbackend.justcode.am/uploads/${elm.file}`} />
                            <FormControl style={{ width: "120px" }}>
                                <InputLabel id="demo-simple-select-label">Подборка</InputLabel>
                                <Select label="Категория" value={data?.name} onChange={(e) => SelectCategoy(e)}  >
                                    {data?.map((elm, i) => {
                                        return <MenuItem key={i} value={elm?.name}>{elm?.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                    })}
                </div>
            </div>
            <div onClick={() => setOpenAddBanner(true)}>

                <Plus />
            </div>
        </div>
        {GetProductPadborki?.data?.map((elm, i) => {
            return <div key={i} className='BanerBlock1'>
                <div className='BanerBlock'>
                    <p className="baner">{elm.name} </p>
                    <div className='PadborkiDiv'>
                        {elm.products.map((e, index) => {
                            // console. 
                            return <div className='imgWrapperBaner'>
                                <img className='imgBaner' src={`https://basrarusbackend.justcode.am/uploads/${e?.photos[0].photo}`} />
                                <p>{e.name}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        })

        }

        <div>
            <div className='BanerBlock1'>
                <div className='BanerBlock'>
                    <p className="baner">Категории </p>
                    <div className='CategoryDiv'>
                        {getCategory.data?.data?.map((elm, i) => {
                            return <div key={i} className='imgWrapperBaner'>
                                <img className='imgBaner' src={`https://basrarusbackend.justcode.am/uploads/${elm.photo}`} />
                                <p>{elm.name}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div onClick={() => setOpenCategory(true)}>
                    <Plus />
                </div>
            </div>
        </div>
    </div >
}