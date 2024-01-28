import './style.css'
import Select from '@mui/material/Select'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Button, Checkbox, ListItemText, OutlinedInput, TextField } from '@mui/material'
import { AddCategory } from '../AddCategory'
import { AddBrends } from '../AddBrends'
import { useDispatch, useSelector } from 'react-redux'
import { CreatProductAction, GetBrandAction, GetCategory, GetCollectionAction, GetForAge, GetGendersAction, GetPlatforms } from '../../Services/action/action'
import { AddCollections } from '../AddCollections'
import { AddSubCategory } from '../AddSubCategory'
import Swal from 'sweetalert2'
import { CloseIcon } from '../../Svg'
import { Loading } from '../../components/Loading'

export const AddProduct = ({ open, setOpen }) => {
    const [details, setDetails] = useState({
        name: '',
        price: '',
        discount: '',
        count: '',
        volume: '',
        code: '',
        // skinType: '',
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
        // skinType: '',
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
    const [openCreateCategory, setOpenCategory] = useState(false)
    const [openCreateBrend, setOpenBrend] = useState(false)
    const dispatch = useDispatch()
    const [brendsPage, setBrendsPage] = useState(1)
    const [collectionsPage, setCollectionsPage] = useState(1)
    const [openCollection, setOpenCollection] = useState(false)
    const [openSubCategory, setOpenSubCategory] = useState(false)
    const [categoryPage, setCategpryPage] = useState(1)
    const [photo, setPhoto] = useState([])
    const { getCategory } = useSelector((st) => st)
    const { getBrand } = useSelector((st) => st)
    const { getCollections } = useSelector((st) => st)
    const { getGender } = useSelector((st) => st)
    const { getForAge } = useSelector((st) => st)
    const { getPlatfors } = useSelector((st) => st)
    const { createProduct } = useSelector((st) => st)

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
        if (details.details === '') {
            temp.details = 'giny partadir e '
            send = false

        }
        else {
            temp.details = ''
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

        if (!details.category.id) {
            temp.category = 'giny partadir e '
            send = false
        }
        else {
            temp.category = ''
            send = true
        }
        if (details.subcategory === '') {
            temp.subcategory = 'giny partadir e '
            send = false

        }
        else {
            temp.subcategory = ''
            send = true
        }
        if (!details.brand.id) {
            temp.brand = 'giny partadir e '
            send = false
        }
        else {
            temp.brand = ''
            send = true
        }
        if (details.gender === '') {
            temp.gender = 'giny partadir e '
            send = false
        }
        else {
            temp.gender = ''
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
        if (details.platform === '') {
            temp.platform = 'giny partadir e '
            send = false
        }
        else {
            temp.platform = ''
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
        if (!details.item?.length) {
            temp.podborki = 'giny partadir e '
            send = false
        }
        else {
            temp.podborki = ''
            send = true
        }
        if (!photo.length) {
            temp.photos = 'giny partadir e '
            send = false
        }
        else {
            temp.photos = ''
            send = true
        }

        setError(temp)
        if (send) {
            dispatch(CreatProductAction({
                name: details.name,
                price: details.price,
                discount: details.discount,
                product_count: details.count,
                volume: details.volume,
                vendor_code: details.code,
                // skin_type: details.skinType,
                parent_category_id: details.category.id,
                category_id: details.subcategory,
                brands_id: details.brand.id,
                gender_id: details.gender,
                for_age_id: details.forWho,
                platform_id: details.platform,
                description: details.description,
                characteristics: details.characteristics,
                compound: details.composition,
                podborki: item,
                photos: photo
            }))
        }
    }

    const SelectCategoy = (e) => {
        setDetails({ ...details, category: e.target.value })
    }

    useEffect(() => {
        dispatch(GetCategory(categoryPage))
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
        dispatch(GetCategory(details.platform))
        // document.querySelector('.outlet').style.position = 'fixed'
    }, [details.platform])

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

    function close() {
        document.querySelector('.outlet').style.position = 'relative'
        setOpen(false)
    }
    useEffect(() => {
        if (error.photos != '') {
            Swal.fire(
                'фотография обязательна!',
                '',
                'error'
            )
        }
    }, [error])
    useEffect(() => {
        if (createProduct.status) {
            window.location = '/Product'
        }
        else if (createProduct.error != '') {
            Swal.fire(
                'Код поставщика уже занят',
                '',
                'error'
            )
        }
    }, [createProduct])
    return (
        <div className={open ? 'activePopup' : 'inactive'}>

            {openCreateCategory &&
                <AddCategory
                    open={openCreateCategory}
                    setOpen={setOpenCategory}
                    setBrendsPage={(e) => setCategpryPage(e)}
                    platformId={details.platform}
                />
            }
            {openCreateBrend &&
                <AddBrends
                    open={openCreateBrend}
                    setOpen={setOpenBrend}
                    setBrendsPage={(e) => setBrendsPage(e)}
                    page={brendsPage}
                    platformId={details.platform}
                />
            }
            {openCollection &&
                <AddCollections
                    open={openCollection}
                    setOpen={setOpenCollection}
                    setBrendsPage={(e) => setCollectionsPage(e)}
                />
            }
            {openSubCategory &&
                <AddSubCategory
                    open={openSubCategory}
                    setOpen={setOpenSubCategory}
                    selected={details?.category}
                    setBrendsPage={(e) => setCollectionsPage(e)}
                    platformId={details.platform}
                />
            }
            <div className='pop'>


                <div className='popupHeader'>
                    <div className='closeIcon' onClick={close}>
                        <CloseIcon />
                    </div>
                    <h1>Добавляет/редактирует товар</h1>
                </div>
                {createProduct.loading ?
                    <Loading /> :
                    <div className='popupBody'>
                        <TextField error={error.name != ''} label="имя" variant="filled" sx={{ width: '31%' }} value={details?.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />
                        <TextField error={error.price != ''} label="цена" type='number' variant="filled" sx={{ width: '31%' }} value={details?.price} onChange={(e) => setDetails({ ...details, price: e.target.value })} />
                        <TextField error={error.discount != ''} label="Процентная скидка" type='number' variant="filled" sx={{ width: '31%' }} value={details?.discount} onChange={(e) => setDetails({ ...details, discount: e.target.value })} />

                        <TextField error={error.count != ''} type='number' label="В наличии (количество)" variant="filled" sx={{ width: '31%' }} value={details?.count} onChange={(e) => setDetails({ ...details, count: e.target.value })} />
                        <TextField error={error.volume != ''} label="количество" variant="filled" sx={{ width: '31%' }} value={details?.volume} onChange={(e) => setDetails({ ...details, volume: e.target.value })} />
                        <TextField error={error.code != ''} label="Код продавца" variant="filled" sx={{ width: '31%' }} value={details?.code} onChange={(e) => setDetails({ ...details, code: e.target.value })} />

                        {/* <TextField error={error.skinType != ''} label="نوع الجلد" variant="filled" sx={{ width: '31%' }} value={details?.skinType} onChange={(e) => setDetails({ ...details, skinType: e.target.value })} /> */}
                        <FormControl error={error.gender != ''} variant="filled" sx={{ width: '31%' }}>
                            <InputLabel>пол</InputLabel>
                            <Select label="пол" value={details?.gender} onChange={(e) => setDetails({ ...details, gender: e.target.value })}  >
                                {getGender?.data?.data?.map((elm, i) => {
                                    return <MenuItem key={i} value={elm.id}>{elm.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl error={error.forWho != ''} variant="filled" sx={{ width: '31%' }}>
                            <InputLabel>لمن</InputLabel>
                            <Select label="для кого" value={details?.forWho} onChange={(e) => setDetails({ ...details, forWho: e.target.value })}   >
                                {getForAge?.data?.data?.map((elm, i) => {
                                    return <MenuItem value={elm.id}>{elm.name}</MenuItem>
                                })

                                }
                            </Select>
                        </FormControl>

                        <FormControl error={error.platform != ''} variant="filled" sx={{ width: '31%' }}>
                            <InputLabel>Платформа</InputLabel>
                            <Select label="Платформа" value={details?.platform} onChange={(e) => setDetails({ ...details, platform: e.target.value })}>
                                {getPlatfors?.data?.data?.map((elm, i) => {
                                    return <MenuItem value={elm.id}>{elm.name}</MenuItem>

                                })}
                            </Select>
                        </FormControl>
                        <div style={{ width: '62%' }} />

                        <TextField error={error.description != ''} label="описание" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.description} onChange={(e) => setDetails({ ...details, description: e.target.value })} />
                        <TextField error={error.characteristics != ''} label="характеристики" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.characteristics} onChange={(e) => setDetails({ ...details, characteristics: e.target.value })} />
                        <TextField error={error.composition != ''} label="сложный" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.composition} onChange={(e) => setDetails({ ...details, composition: e.target.value })} />

                        {details.platform && <div className='catsAndSubcats'>
                            <FormControl error={error.category != ''} variant="filled" sx={{ width: '71%' }}>
                                <InputLabel>категория</InputLabel>
                                <Select label="категория" value={details.category} onChange={(e) => SelectCategoy(e)}  >
                                    {getCategory?.data?.data?.map((elm, i) => {
                                        return <MenuItem key={i} value={elm}>{elm.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <Button variant="contained" color='grey' onClick={() => setOpenCategory(true)}>категории</Button>
                        </div>}
                        {details.category && <div className='catsAndSubcats'>
                            <FormControl variant="filled" sx={{ width: '71%' }}  >
                                <InputLabel>Подклассификация</InputLabel>
                                <Select error={error.subcategory != ''} label="Подклассификация" value={details?.subcategory} onChange={(e) => setDetails({ ...details, subcategory: e.target.value })}   >
                                    {details?.category?.category?.map((elm, i) => {
                                        return <MenuItem key={i} value={elm.id}>{elm.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <Button onClick={() => setOpenSubCategory(true)} variant="contained" color='grey'>Подкатегории</Button>
                        </div>}
                        {details.platform && <div className='catsAndSubcats'>
                            <FormControl error={error.brand != ''} variant="filled" sx={{ width: '81%' }} >
                                <InputLabel>Бренд</InputLabel>
                                <Select label="Бренд" value={details?.brand} onChange={(e) => setDetails({ ...details, brand: e.target.value })}  >
                                    {getBrand?.data?.data?.data.map((elm, i) => {
                                        return <MenuItem key={i} value={elm}>{elm?.name}</MenuItem>
                                    })
                                    }
                                </Select>
                            </FormControl>
                            <Button onClick={() => setOpenBrend(true)} variant="contained" color='grey'>Бренд</Button>
                        </div>}

                        <div className='catsAndSubcats'>
                            <FormControl variant="filled" sx={{ width: '81%' }}>
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
                            <Button onClick={() => setOpenCollection(true)} variant="contained" color='grey'>Группы</Button>
                        </div>
                        <div style={{ width: '62%' }} />

                        {photos.length > 0 && photos.map((e, i) => (
                            <div className='eachProductPhoto' key={i}>
                                <div className='AddImg'>
                                    <p onClick={() => {
                                        // DeletPhoto(e, i)
                                        // deleteFile(i)
                                    }}>x</p>
                                    <img alt='' src={`https://basrarusbackend.justcode.am/uploads/${e.photo}`} />
                                </div>
                            </div>
                        ))}
                        <Button component="label" className='createButon'>
                            картина
                            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                        </Button>
                        <Button onClick={() => CreateProduct()} variant='contained' className='createButon'>Создает</Button>
                    </div>
                }
            </div>
        </div>
    )

}