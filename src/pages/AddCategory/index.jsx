import './style.css'
import { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { DeletCategoryAction, GetCategory, UpdateCategoryAction } from '../../Services/action/action'
// import { Loading } from '../../Components/Loading'

export const AddCategory = ({ open, setOpen }) => {
    const [categories, setCategories] = useState([])
    const { getCategory } = useSelector((st) => st)

    useEffect(() => {
        dispatch(GetCategory(2))
    }, [])

    useEffect(() => {
        setCategories(getCategory?.data?.data)
        if (getCategory.status) {
            setNewCategory({
                id: 1,
                name: '',
                image: '',
            })
        }
    }, [getCategory])

    const [newCategory, setNewCategory] = useState({
        id: 1,
        name: '',
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

    function handleCategoryChange(category, event) {
        const newCategories = [...categories]
        const change = newCategories.find(e => e.id === category.id)
        change.name = event
        setCategories(newCategories)
    }

    function handleNewImage(event) {
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
        let token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        formdata.append("name", newCategory.name);
        formdata.append("photo", img, "file");
        formdata.append("platform_id", 2);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch("https://basrarusbackend.justcode.am/api/admin/create_category?name=eee&photo", requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCategory(2))
                }

            })
            .catch(error => {
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
        dispatch(UpdateCategoryAction(data, 2))
    }

    const DeletCategory = (id) => {
        dispatch(DeletCategoryAction({ category_id: id, platformId: 2 }))
    }

    return (
        <div className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='pop secondaryPop'>
                <div className='popTitle'>
                    <h1>категории</h1>
                </div>
                {!getCategory.loading ? <div className='popupContent'>
                    {categories?.length > 0 && categories?.map((e, i) => {
                        return <div className='eachPopupDetail' key={i}>
                            <TextField label="имя" variant="filled" value={e?.name} onChange={(event) => handleCategoryChange(e, event.target.value)} />
                            <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                <b>изображение:</b>Нажмите, чтобы загрузить
                                <VisuallyHiddenInput type="file" onChange={(event) => handleNewImageChange(e, event)} />
                                <div className='eachCategoryPhoto'>
                                    {e.photo && !e.image ?
                                        <img alt='' src={`https://basrarusbackend.justcode.am/uploads/${e.photo}`} /> :
                                        <img alt='' src={e.image} />
                                    }
                                </div>
                            </Button>
                            <div className='eachPopupDetailButtons'>
                                <Button onClick={() => Update(e, i)} variant="contained" color='grey'>Сохранить</Button>
                                <Button variant="contained" color='error' onClick={() => DeletCategory(e.id)}>Удалить</Button>
                            </div>
                            <div className='borderBtm' />
                        </div>
                    })}

                    <div className='eachPopupDetail'>
                        <TextField label="имя" variant="filled" value={newCategory?.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />
                        {newCategory?.image
                            ? <>
                                <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                    <b>изображение:</b>нажмите, чтобы загрузить
                                    <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                                    <div className='eachCategoryPhoto'>
                                        <img alt='' src={newCategory.image} />
                                    </div>
                                </Button>
                            </>
                            : <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                <b>изображение:</b>нажмите, чтобы загрузить
                                <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                            </Button>
                        }
                        {newCategory?.image?.length > 0 && newCategory?.name?.length > 0 && <Button component="label" variant="contained" className='createButon' onClick={handleNewCategory}>Добавить</Button>}
                    </div>
                </div> :
                    // <Loading />
                    <div></div>
                }

                <div className='closePop'>
                    <Button component="label" variant="contained" color='grey' onClick={close}>Закрыть</Button>
                </div>
            </div>
        </div>
    )
}