import { useEffect, useState } from 'react'
import { BackIcon } from '../../Svg'
import { TableItem } from '../../components/TableItem'
import { UserProduct } from '../../components/userProduct'
import './style.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetSinglUser } from '../../Services/action/action'
export const UserScreen = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { GetSinglUserReducer } = useSelector((st) => st)
    const [data, setData] = useState()
    useEffect(() => {
        dispatch(GetSinglUser({ user_id: id }))
    }, [])


    useEffect(() => {
        setData(GetSinglUserReducer.data?.orders?.data)
    }, [GetSinglUserReducer])
    return <div className='UserScreen'>
        <div className='UserScreenHeader'>
            <div onClick={() => window.history.go(-1)} className='TitleHeader'>
                <BackIcon />
                <p className='BackClass'>Назад</p>
            </div>
            <p className='UserName'>{GetSinglUserReducer?.data?.data?.name} {GetSinglUserReducer?.data?.data?.phone} {GetSinglUserReducer?.data?.data?.email}</p>
        </div>
        {data?.map((elm, i) => {
            return <div key={i} style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <TableItem
                        noborder
                        title={[
                            'Номер заказа',
                            'Сумма заказа',
                            'Дата заказа',
                            'Статус',
                            'Способ доставки',
                            'Способ оплаты'
                        ]}
                        name={elm.id}
                        phone={elm.order_sum}
                        date_of_birth={elm.status}
                        volume={elm.deliver?.name}
                        order_count={elm.payment_id}
                        created_at1={elm.created_at}

                    />
                </div>
                <UserProduct data={elm.products} />
            </div>

        })}
    </div>
}