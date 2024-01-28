import { useEffect, useState } from 'react'
import { Pagination, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { DelectBrandAction, GetBrandAction, UpdateBrendCategory } from '../../Services/action/action'
// import { SuccessDelectCategory } from '../../Services/action/SuccessAction'
import { ErrorCreatCategory } from '../../Services/action/errorAction'
import { SuccessDelectCategory } from '../../Services/action/successAction'

export const AddBrends = ({ open, setOpen, setBrendsPage, platformId, page }) => {
    const [categories, setCategories] = useState([])
    const { getBrand } = useSelector((st) => st)
    useEffect(() => {
        setCategories(getBrand?.data?.data?.data)
        if (getBrand.status) {
            setNewCategory({
                id: 1,
                name: '',
            })
        }
    }, [getBrand])

    const [newCategory, setNewCategory] = useState({
        id: 1,
        name: '',
    })

    const dispatch = useDispatch()

    function handleCategoryChange(category, event) {
        const newCategories = [...categories]
        const change = newCategories.find(e => e.id === category.id)
        change.name = event
        setCategories(newCategories)
    }


    function handleNewCategory() {
        let token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        formdata.append("name", newCategory.name);
        formdata.append('platform_id', platformId)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch("https://basrarusbackend.justcode.am/api/admin/create_brand", requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetBrandAction(1, platformId))
                    dispatch(SuccessDelectCategory(r))
                }
                else {
                    dispatch(ErrorCreatCategory())
                }
            })
            .catch(error => {
                dispatch(ErrorCreatCategory())
            });
    }

    function close() {
        setOpen(false)
        setNewCategory({
            id: 1,
            name: '',
            image: '',
        })
    }

    const Update = (data, i) => {
        dispatch(UpdateBrendCategory(data, platformId))
    }

    const DeletCategory = (id) => {
        dispatch(DelectBrandAction({ brand_id: id, platform_id: platformId, page: page ? page : 1 }))
    }

    return (
        <div className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='pop secondaryPop'>
                <div className='popTitle'>
                    <h1>Бренд</h1>
                </div>
                {!getBrand.loading ? <div className='popupContent'>
                    {categories?.length > 0 && categories?.map((e, i) => {
                        return <div className='eachPopupDetail' key={i}>
                            <TextField label="имя" variant="filled" value={e?.name} onChange={(event) => handleCategoryChange(e, event.target.value)} />

                            <div className='eachPopupDetailButtons'>
                                <Button onClick={() => Update(e, i)} variant="contained" color='grey'>Сохранить</Button>
                                <Button variant="contained" color='error' onClick={() => DeletCategory(e.id)}>Удалить</Button>
                            </div>
                            <div className='borderBtm' />
                        </div>
                    })}

                    <div className='eachPopupDetail'>
                        <TextField label="имя" variant="filled" value={newCategory?.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />

                        {newCategory?.name?.length > 0 && <Button component="label" variant="contained" className='createButon' onClick={handleNewCategory}>يضيف</Button>}
                    </div>
                </div> :
                    // <Loading />
                    <div></div>
                }
                {!getBrand.loading && <div className='Pagination'>
                    <Pagination
                        color="secondary"
                        onChange={(e, value) => setBrendsPage(value)}
                        count={Math.ceil(getBrand?.data?.data?.total / 10)}
                    />
                </div>}
                <div className='closePop'>
                    <Button component="label" variant="contained" color='grey' onClick={close}>يغلق</Button>
                </div>
            </div>
        </div >
    )
}