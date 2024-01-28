import './style.css'
import Select from '@mui/material/Select'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Button, Checkbox, ListItemText, OutlinedInput } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { GetBrandAction, GetCategory, GetCollectionAction, GetForAge, GetGendersAction, GetPlatforms, GetSinglProductAction, GetTypePeau, UpdateProduct } from '../../Services/action/action'
import Swal from 'sweetalert2'
import { Plus } from '../../Svg'
import { useParams } from 'react-router-dom'
export const UpdateProducts = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({
        name: '',
        price: '',
        discount: '',
        count: '',
        volume: '',
        code: '',
        skinType: '',
        gender: '',
        forWho: '',
        platform: '',
        description: '',
        characteristics: '',
        composition: '',
        category: '',
        subcategory: '',
        brand: '',
    })
    const [error, setError] = useState({
        name: '',
        price: '',
        discount: '',
        count: '',
        volume: '',
        code: '',
        skinType: '',
        gender: '',
        forWho: '',
        platform: '',
        description: '',
        characteristics: '',
        composition: '',
        category: '',
        subcategory: '',
        brand: '',
        photos: ''
    })
    const [selectedSelection, setSelectedSelection] = useState([])
    const [files, setFiles] = useState([])
    const [photos, setPhotos] = useState([])
    const dispatch = useDispatch()
    const [brendsPage, setBrendsPage] = useState(1)
    const [collectionsPage, setCollectionsPage] = useState(1)
    const [categoryPage, setCategpryPage] = useState(1)
    const [photo, setPhoto] = useState([])
    const { getCategory } = useSelector((st) => st)
    const { getCollections } = useSelector((st) => st)
    const { getForAge } = useSelector((st) => st)
    const { getSinglProduct } = useSelector((st) => st)
    const [deletedPhotos, setDeletedPhotos] = useState([])
    const { updateProduct } = useSelector((st) => st)
    const { getPeau } = useSelector((st) => st)

    console.warn = function () { };
    console.error = function () { };

    const SelectType = (e) => {
        setDetails({ ...details, skinType: e.target.value })
    }
    useEffect(() => {
        dispatch(GetTypePeau())
    }, [])

    const CreateProduct = () => {
        let item = []
        selectedSelection.map((elm, i) => {
            getCollections?.data?.data.map((e, i) => {
                if (e.name == elm) {
                    item.push(e.id)
                }
            })
        })
        let send = true
        let temp = { ...error }
        let deletetP = []
        getSinglProduct.data?.podborki.map((elm, i) => {
            deletetP.push(elm.id)
        })

        if (details.name == '') {
            temp.name = 'anuny partadir e '
            send = false
        }
        else {
            temp.name = ''
            send = true
        }
        if (details.price == '') {
            temp.price = 'giny partadir e '
            send = false

        }
        else {
            temp.price = ''
            send = true
        }
        if (details.count === '') {
            temp.count = 'giny partadir e '
            send = false

        }
        else {
            temp.count = ''
            send = true
        }
        if (details.volume === '') {
            temp.volume = 'giny partadir e '
            send = false

        }
        else {
            temp.volume = ''
            send = true
        }
        if (details.code === '') {
            temp.code = 'giny partadir e '
            send = false
        }
        else {
            temp.code = ''
            send = true
        }



        if (details.forWho === '') {
            temp.forWho = 'giny partadir e '
            send = false
        }
        else {
            temp.forWho = ''
            send = true
        }

        if (details.description === '') {
            temp.description = 'giny partadir e '
            send = false

        }
        else {
            temp.description = ''
            send = true
        }
        if (details.characteristics === '') {
            temp.characteristics = 'giny partadir e '
            send = false
        }
        else {
            temp.characteristics = ''
            send = true
        }
        if (details.composition === '') {
            temp.composition = 'giny partadir e '
            send = false
        }
        else {
            temp.composition = ''
            send = true
        }
        if (details.discount === '') {
            temp.discount = 'giny partadir e '
            send = false
        }
        else {
            temp.discount = ''
            send = true
        }
        if (!item?.length) {
            temp.podborki = '2'
            send = false
        }
        else {
            temp.podborki = ''
            send = true
        }
        if (!photo.length && !details.photos.length) {
            temp.photos = 'aa'
            send = false
        }
        else {
            temp.photos = ''
            send = true
        }

        setError(temp)
        Object.values(temp).map((elm, i) => {
            if (elm != '') {
                send = false
            }
        })
        if (send) {
            dispatch(UpdateProduct({
                name: details.name,
                price: details.price,
                discount: details.discount,
                product_count: details.count,
                volume: details.volume,
                vendor_code: details.code,
                // skin_type: details.skinType,
                parent_category_id: details.category.id,
                category_id: details.category.id,
                // brands_id: details.brand,
                // gender_id: details.gender,
                for_age_id: details.forWho,
                // platform_id: details.platform,
                description: details.description,
                characteristics: details.characteristics,
                compound: details.composition,
                podborki: item,
                photos: photo,
                deleted_podborki: deletetP,
                deleted_photo: deletedPhotos,
                product_id: id,
                peau_id: details?.skinType?.id
            }))
        }
    }


    console.log(details.skinType
        , 'details.skinType')

    const delateProduct = (data) => {
        let token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow'
        };
        fetch(`https://basrarusbackend.justcode.am/api/admin/delete_product`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    window.location = '/Product'
                }
                else {
                }
            })
            .catch((error) => {
            });
    }

    const SelectCategoy = (e) => {
        let index = getCategory?.data?.data.findIndex((el) => el.id == e.target.value)
        setDetails({ ...details, category: e.target.value })
    }
    useEffect(() => {
        dispatch(GetCategory(2))
    }, [categoryPage])


    useEffect(() => {
        dispatch(GetBrandAction(brendsPage, details.platform))
    }, [brendsPage])

    useEffect(() => {
        dispatch(GetCollectionAction(collectionsPage))
    }, [collectionsPage])


    useEffect(() => {
        dispatch(GetGendersAction())
        dispatch(GetForAge())
        dispatch(GetPlatforms())
        dispatch(GetSinglProductAction({ product_id: id }))
        dispatch(GetCategory(2))
    }, [])

    const handleSelectionChange = (event) => {
        const { target: { value } } = event


        setSelectedSelection(
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    function handleFileChange(event) {
        const uniqueFile = files?.find(e => e.name === event.target.files[0]?.name)
        let item = [...photo]
        item.push(event.target.files[0])
        setPhoto(item)
        if (!uniqueFile) {
            let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
            setPhotos([...photos, ...ImagesArray])
            const filesArray = Object.values(event.target.files)
            setFiles([...files, ...filesArray])
        }
    }

    function deleteFile(event) {
        setPhotos(photos.filter((item, index) => index !== event))
        setFiles(files.filter((item, index) => index !== event))
        setPhoto(photo.filter((item, index) => index !== event))
    }

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

    useEffect(() => {
        if (error.photos != '') {
            Swal.fire(
                'фотография обязательна!',
                '',
                'error'
            )
        }
        else if (error.name) {
            Swal.fire(
                'Имя обязательна!',
                '',
                'error'
            )
        }
        else if (error.code) {
            Swal.fire(
                'Артикул обязательна!',
                '',
                'error'
            )
        }
        else if (error.volume) {
            Swal.fire(
                'Объем обязательна!',
                '',
                'error'
            )
        }
        else if (error.price) {
            Swal.fire(
                'Цена без скидки обязательна!',
                '',
                'error'
            )
        }
        else if (error.discount) {
            Swal.fire(
                'Цена со скидкой обязательна!',
                '',
                'error'
            )
        }
        else if (error.count) {
            Swal.fire(
                'Количество обязательна!',
                '',
                'error'
            )
        }
        else if (error.category) {
            Swal.fire(
                'Категория обязательна!',
                '',
                'error'
            )
        }
        else if (error.composition) {
            Swal.fire(
                'Состав обязательна!',
                '',
                'error'
            )
        }
        else if (error.forWho) {
            Swal.fire(
                'Возрастная группа обязательна!',
                '',
                'error'
            )
        }
        else if (error.description) {
            Swal.fire(
                'описание обязательна!',
                '',
                'error'
            )
        }
        else if (error.characteristics) {
            Swal.fire(
                'Применение обязательна!',
                '',
                'error'
            )
        }
    }, [error])
    useEffect(() => {
        if (updateProduct.status) {
            window.location = '/product'
        }
        else if (updateProduct.error != '') {
            Swal.fire(
                'Код поставщика уже занят',
                '',
                'error'
            )
        }
    }, [updateProduct])


    const DeletPhoto = (e, i) => {
        let temp = { ...details }
        let item = [...deletedPhotos]
        item.push(e.id)
        temp.photos.splice(i, 1)
        setDetails(temp)
        setDeletedPhotos(item)
    }


    useEffect(() => {
        let index = getCategory?.data?.data?.findIndex((el) => el.id == getSinglProduct.data?.parent_category_id)
        if (getCategory.data?.data?.length > 0) {
            setDetails({ ...details, category: getCategory?.data?.data[index] })
        }
    }, [getCategory, getSinglProduct])

    useEffect(() => {
        let index = getPeau?.data?.findIndex((el) => el.id == getSinglProduct.data?.peau_id)
        if (getPeau.data?.length > 0) {
            console.log(getPeau.data[index], '11')
            setDetails({ ...details, skinType: getPeau.data[index] })
        }

    }, [getPeau, getSinglProduct])


    useEffect(() => {
        if (getSinglProduct.data) {
            let data = getSinglProduct.data
            // setDetails({ ...details, category: e.target.value })
            let item = []
            setPhotos(data.photos)
            setDetails({
                name: data.name,
                price: data.price,
                discount: data.discount,
                count: data.product_count,
                volume: data.volume,
                code: data.vendor_code,
                skinType: getPeau?.data?.find((elm) => elm.id == data.peau_id),
                gender: data.gender_id,
                forWho: data.for_age_id,
                platform: data.platform_id,
                description: data.description,
                characteristics: data.characteristics,
                composition: data.compound,
                category: getCategory?.data?.data?.find((elm) => elm.id == data.parent_category_id),
                subcategory: data.category_id,
                brand: data.brands_id,
                sub: getCategory?.data?.data?.find((elm) => elm.id == data.parent_category_id),
                photos: data.photos
            })
            data?.podborki?.map((e, i) => {
                item.push(e.name)
            })
            setSelectedSelection(item)
        }
    }, [getSinglProduct])


    return <div>
        <div className='header'>
            <p>Создание/редактирование товара</p>
        </div>
        <div className='AddProductBlock1'>
            <div className='firstBlock'>
                <div className='LableDiv'>
                    <label>Наименование</label>
                    <input
                        className='Productinput'
                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                        placeholder='Наименование'
                        value={details?.name}
                        style={{ width: '450px' }}
                    />
                </div>
                <div className='LableDiv'>
                    <label>Артикул</label>
                    <input
                        className='Productinput'
                        onChange={(e) => setDetails({ ...details, code: e.target.value })}
                        value={details?.code}
                        placeholder='Артикул'
                    />
                </div>
                <div className='LableDiv'>
                    <label>Объем</label>
                    <input
                        value={details?.volume}
                        onChange={(e) => setDetails({ ...details, volume: e.target.value })}
                        className='Productinput'
                        placeholder='Объем'
                    />
                </div>
            </div>
            <div className='firstBlock'>
                <div className='LableDiv'>
                    <label>Цена без скидки</label>
                    <input
                        className='Productinput'
                        type='number'
                        placeholder='Цена без скидки'
                        value={details?.price}
                        onChange={(e) => setDetails({ ...details, price: e.target.value })}
                    />
                </div>
                <div className='LableDiv'>
                    <label>Цена со скидкой</label>
                    <input
                        className='Productinput'
                        placeholder='Цена со скидкой'
                        type='number'
                        value={details?.discount}
                        onChange={(e) => setDetails({ ...details, discount: e.target.value })}
                    />
                </div>
                <div className='LableDiv'>
                    <label>Количество</label>
                    <input
                        className='Productinput'
                        placeholder='Количество'
                        value={details?.count}
                        onChange={(e) => setDetails({ ...details, count: e.target.value })}
                    />
                </div>
            </div>
            <div className='firstBlock'>
                <div className='LableDiv'>
                    <label></label>
                    <FormControl style={{ width: "320px" }}>
                        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                        <Select label="Категория" value={details.category} onChange={(e) => SelectCategoy(e)}  >
                            {getCategory?.data?.data?.map((elm, i) => {
                                return <MenuItem key={i} value={elm}>{elm.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div >
                    <div className='LableDiv'>
                        <label></label>
                        <FormControl variant="filled" className='FormControl' sx={{ width: '320px', borderRadius: 100 }}>
                            <InputLabel>Группы</InputLabel>
                            <Select
                                multiple
                                value={selectedSelection}
                                onChange={handleSelectionChange}
                                input={<OutlinedInput label="Группы" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            // ITEM_HEIGHT = 48
                                            // ITEM_PADDING_TOP = 8
                                            maxHeight: 48 * 4.5 + 8,
                                            width: 250,
                                        },
                                    }
                                }
                                }
                            >
                                {getCollections.data.data?.map((name) => {
                                    return <MenuItem key={name} value={name.name}>
                                        <Checkbox checked={selectedSelection.indexOf(name.name) > -1} />
                                        <ListItemText primary={name.name} />
                                    </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='LableDiv'>
                    <label></label>
                    <FormControl style={{ width: "320px" }}>
                        <InputLabel id="demo-simple-select-label">Тип кожа</InputLabel>
                        <Select label="Категория" value={details.skinType} onChange={(e) => SelectType(e)}  >
                            {getPeau?.data?.map((elm, i) => {
                                return <MenuItem key={i} value={elm}>{elm.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='firstBlock'>
                <div className='LableDiv'>
                    <label></label>
                    <FormControl style={{ width: "320px" }}>
                        <InputLabel id="demo-simple-select-label">Возрастная группа</InputLabel>
                        <Select label="Возрастная группа" value={details?.forWho} onChange={(e) => setDetails({ ...details, forWho: e.target.value })}   >
                            {getForAge?.data?.data?.map((elm, i) => {
                                return <MenuItem value={elm.id}>{elm.name}</MenuItem>
                            })
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='firstBlock'>
                <div className='LableDiv'>
                    <label>описание</label>
                    <textarea
                        className='ProductTextArea'
                        placeholder='описание'
                        value={details?.description}
                        // style={{ height: '200px' }}
                        onChange={(e) => setDetails({ ...details, description: e.target.value })}
                    />
                </div>
            </div>
            <div className='firstBlock'>
                <div className='LableDiv'>
                    <label>Применение</label>
                    <textarea
                        className='ProductTextArea'
                        placeholder='Применение'
                        value={details?.characteristics}
                        onChange={(e) => setDetails({ ...details, characteristics: e.target.value })}
                    />
                </div>
            </div>
            <div className='firstBlock'>
                <div className='LableDiv'>
                    <label>Состав</label>
                    <textarea
                        className='ProductTextArea'
                        placeholder='Состав'
                        value={details?.composition}
                        onChange={(e) => setDetails({ ...details, composition: e.target.value })}
                    />
                </div>
            </div>
            <div className='firstBlock'>
                {photos?.length > 0 && photos.map((e, i) => {
                    return <div className='eachProductPhoto' key={i}>
                        {e?.photo ?
                            <div className='AddImg'>
                                <p onClick={() => {
                                    DeletPhoto(e, i)
                                    // deleteFile(i)
                                }}>x</p>
                                <img alt='' src={`https://basrarusbackend.justcode.am/uploads/${e.photo}`} />
                            </div>
                            : <div className='AddImg'>
                                <p
                                    onClick={() => {
                                        DeletPhoto(e, i)
                                        // deleteFile(i)
                                    }}>x</p>
                                <img alt='' src={e} />
                            </div>
                        }
                        <div className='deletePhoto' onClick={() => deleteFile(i)}>
                        </div>
                    </div>
                })}
            </div>
            <div className='firstBlock'>
                <Button component="label">
                    <Plus />
                    <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                </Button>
            </div>
            <div className='firstBlock'>
                <button onClick={() => delateProduct({ product_id: id })} className='DelateProductButton'>Удалить</button>
                <button onClick={() => CreateProduct()} className='creatProductButton'>СОХРАНИТЬ</button>
            </div>
        </div>
    </div >
}