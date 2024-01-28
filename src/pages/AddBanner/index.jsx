import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { CreatBannerAction, DeletSlideAction } from '../../Services/action/action'
import { Loading } from '../../components/Loading'

export const AddBanner = ({ open, setOpen, type, platformid }) => {
    const [categories, setCategories] = useState([])
    const { getSlider } = useSelector((st) => st)
    const [fileType, setFileType] = useState('')
    useEffect(() => {
        if (type == 'first') {
            setCategories(getSlider?.data)
        }
        else {
            setCategories(getSlider?.lastSlider)
        }
        if (getSlider.status) {
            setNewCategory({
                name: '',
                image: '',
            })
        }
    }, [getSlider])

    const [newCategory, setNewCategory] = useState({
        image: '',
    })

    const [img, setImg] = useState()

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })
    const dispatch = useDispatch()

    function handleNewImage(event) {

        const fileType = event.target.files[0].type;
        if (fileType.startsWith('image/')) {
            setFileType("image")
        } else if (fileType.startsWith('video/')) {
            setFileType("video")
        }
        setImg(event.target.files[0])
        let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
        setNewCategory({ ...newCategory, image: ImagesArray[0] })
    }
    function handleNewImageChange(category, event) {
        const newCategories = [...categories]
        const change = newCategories.find(e => e.id === category.id)
        let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
        change.photo = event.target.files[0]
        change.image = ImagesArray[0]
        setCategories(newCategories)

    }

    function handleNewCategory() {
        dispatch(CreatBannerAction({ type, img, platformid }))
    }

    function close() {
        setOpen(false)
        setNewCategory({
            image: '',
        })
    }

    const DeletCategory = (id) => {
        dispatch(DeletSlideAction({ banner_id: id }, type, platformid))
    }

    return (
        <div className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='pop secondaryPop'>
                <div className='popTitle'>
                    <h1>Загрузка баннера</h1>
                </div>
                {!getSlider.loading ? <div className='popupContent'>
                    {categories?.length > 0 && categories?.map((e, i) => {
                        let file = 'image'
                        if (e.type === 'mp4') {
                            file = 'vidio'
                        }
                        return <div className='eachPopupDetail' key={i}>
                            <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                <b>изображение:</b>Нажмите, чтобы загрузить
                                <VisuallyHiddenInput type="file" onChange={(event) => handleNewImageChange(e, event)} />
                                {file == 'image' ? <div className='eachCategoryPhoto'>
                                    {e.file && !e.image ?
                                        <img alt='' src={`https://basrarusbackend.justcode.am/uploads/${e.file}`} /> :
                                        <img alt='' src={e.image} />
                                    }
                                </div> :
                                    <div className='eachCategoryPhoto'>
                                        {e.file && !e.image ?
                                            <video width="300" height="200" controls>
                                                <source src={`https://basrarusbackend.justcode.am/uploads/${e.file}`} type="video/mp4" />
                                            </video>
                                            :
                                            <video width="300" height="200" controls>
                                                <source src={e.image} type="video/mp4" />
                                            </video>
                                        }
                                    </div>
                                }
                            </Button>
                            <div className='eachPopupDetailButtons'>
                                <Button variant="contained" color='error' onClick={() => DeletCategory(e.id)}>Удалить</Button>
                            </div>
                            <div className='borderBtm' />
                        </div>
                    })}

                    <div className='eachPopupDetail'>
                        {newCategory?.image
                            ? <>
                                <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                    <b>изображение:</b>нажмите, чтобы скачать
                                    <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                                    {fileType == 'image' ? <div className='eachCategoryPhoto'>
                                        <img alt='' src={newCategory.image} />
                                    </div> :
                                        <video width="300" height="200" controls>
                                            <source src={newCategory.image} type="video/mp4" />
                                        </video>
                                    }
                                </Button>
                            </>
                            : <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                <b>изображение:</b>нажмите, чтобы скачать
                                <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                            </Button>
                        }
                        {newCategory?.image?.length > 0 && <Button component="label" variant="contained" className='createButon' onClick={handleNewCategory}>Добавить</Button>}
                    </div>
                </div> :
                    <Loading />
                }
                <div className='closePop'>
                    <Button component="label" variant="contained" color='grey' onClick={close}>Закрыть</Button>
                </div>
            </div>
        </div>
    )
}