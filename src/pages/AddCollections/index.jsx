import { useEffect, useState } from 'react'
import { Pagination, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { DeletCollectionAction, GetCollectionAction, UpdateCollectionAction } from '../../Services/action/action'

export const AddCollections = ({ open, setOpen, setBrendsPage, }) => {
    const [categories, setCategories] = useState([])
    const { getCollections } = useSelector((st) => st)
    useEffect(() => {
        setCategories(getCollections?.data?.data)
        if (getCollections.status) {
            setNewCategory({
                id: 1,
                name: '',
            })
        }
    }, [getCollections])

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
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch("https://basrarusbackend.justcode.am/api/admin/create_podborki", requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCollectionAction())
                }
                else {
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
        })
    }

    const Update = (data, i) => {
        dispatch(UpdateCollectionAction(data))
    }

    const DeletCategory = (id) => {
        dispatch(DeletCollectionAction({ podborka_id: id }))
    }

    return (
        <div className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='pop secondaryPop'>
                <div className='popTitle'>
                    <h1>Группы</h1>
                </div>
                {!getCollections.loading ? <div className='popupContent'>
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
                    <div>

                    </div>
                    // <Loading />
                }
                {!getCollections.loading && <div className='Pagination'>
                    <Pagination
                        color="secondary"
                        onChange={(e, value) => setBrendsPage(value)}
                        count={Math.ceil(getCollections?.data?.data?.total / 10)}
                    />
                </div>}
                <div className='closePop'>
                    <Button component="label" variant="contained" color='grey' onClick={close}>يغلق</Button>
                </div>
            </div>
        </div >
    )
}