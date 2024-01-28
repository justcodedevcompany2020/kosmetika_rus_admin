import { useEffect, useState } from 'react'
import { TableItem } from '../../components/TableItem'
import { Button } from '../../components/button'
import './style.css'
import { Pagination } from '../../components/Pagination'
import { PopUp } from '../../components/PopUp'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllUsersAction } from '../../Services/action/action'
import { Loading } from '../../components/Loading'
export const UserList = () => {
    const [data, setData] = useState([])
    const [openPopUp, setOpenPopUp] = useState(false)
    const dispatch = useDispatch()
    const [activeButton, setActiveButton] = useState(0)
    const { GetUserReducer } = useSelector((st) => st)

    useEffect(() => {
        if (openPopUp) {
            document.body.style.overflow = 'hidden'
        }
    }, [openPopUp])


    useEffect(() => {
        setData(GetUserReducer?.data.data)
    }, [GetUserReducer])

    useEffect(() => {
        dispatch(GetAllUsersAction(activeButton))
    }, [activeButton])

    return <div>
        {openPopUp && <PopUp setOpen={() => setOpenPopUp(false)} />}
        <div className='header'>
            <p>Список пользователей</p>
            <div className='buttonWrapper'>
                <Button onClick={() => setOpenPopUp(true)} text={'PUSH-уведомления'} />
                <Button green text={'Скачать таблицу'} />
            </div>
        </div>
        {GetUserReducer.loading ?
            <Loading /> :
            <div className='TableWrapper'>
                {
                    data?.map((elm, i) => {
                        return <TableItem
                            title={[
                                'Имя',
                                'Телефон',
                                'Почта',
                                'Дата рождения',
                                'Дата регистрации',
                                'Заказы'
                            ]}
                            onClick={() => window.location = `/UserScreen/${elm.id}`}
                            data={elm}
                            name={elm?.name}
                            phone={elm?.phone}
                            email={
                                elm?.email ?
                                    elm?.email : '1'
                            }
                            date_of_birth={elm?.date_of_birth}
                            order_count={elm?.order_count}
                            created_at={elm?.created_at}
                            key={i} />
                    })
                }
            </div>
        }
        {GetUserReducer?.data?.last_page > 1 && <Pagination changeActiveButton={(e) => setActiveButton(e)} length={GetUserReducer?.data?.last_page} activeButton={activeButton} />}
    </div>
}