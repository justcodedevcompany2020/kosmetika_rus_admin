import { useEffect, useState } from 'react'
import { BackIcon } from '../../Svg'
import { TableItem } from '../../components/TableItem'
import { UserProduct } from '../../components/userProduct'
import './style.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeOrderStatus, GetSinglPorduct } from '../../Services/action/action'
export const SinglProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { GetSinglProductPage } = useSelector((st) => st)
    const [data, setData] = useState()
    useEffect(() => {
        dispatch(GetSinglPorduct({ order_id: id }))
    }, [])

    console.log(GetSinglProductPage.data.deliver?.name)

    const [openChangeStatus, setOpenChangeStatus] = useState(false)
    const [selectedValue, setSelectedValue] = useState({ name: '', id: '' })

    const ChangeStatus = (data) => {
        dispatch(ChangeOrderStatus({ status: data.id, order_id: id }))
        setSelectedValue(data)
    }

    useEffect(() => {
        setData(GetSinglProductPage.data?.products)
        if (GetSinglProductPage.data?.order_status) {
            setSelectedValue({ name: GetSinglProductPage.data?.order_status.name_ru, id: GetSinglProductPage.data?.order_status.id })
        }
    }, [GetSinglProductPage])

    return <div onClick={() => setOpenChangeStatus(false)}>
        <div className='SinglProductHeader'>
            <div onClick={() => window.history.go(-1)} className='TitleHeader'>
                <BackIcon />
                <p className='BackClass'>Назад</p>
            </div>
            <div>
                <button onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setOpenChangeStatus(true)
                }} className='SinglProductButton'>Статус: {selectedValue.name}
                    <div>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.916503 0C0.735226 3.62396e-05 0.55803 0.0503278 0.407315 0.144517C0.256601 0.238707 0.139135 0.372565 0.0697689 0.52917C0.000402451 0.685774 -0.0177517 0.858093 0.0176039 1.02434C0.0529585 1.19059 0.140233 1.34331 0.268396 1.46319L4.85189 5.74903C5.0238 5.90973 5.25692 6 5.5 6C5.74308 6 5.9762 5.90973 6.14811 5.74903L10.7316 1.46319C10.8598 1.34331 10.947 1.19059 10.9824 1.02434C11.0178 0.858093 10.9996 0.685774 10.9302 0.52917C10.8609 0.372565 10.7434 0.238707 10.5927 0.144517C10.442 0.0503278 10.2648 3.62396e-05 10.0835 0H0.916503Z" fill="white" />
                        </svg>
                    </div>
                </button>
                {openChangeStatus && <div className='SelectButton'>
                    <div onClick={() => ChangeStatus({ name: 'Новый', id: 1 })}>Новый</div>
                    <div onClick={() => ChangeStatus({ name: 'Подтвержден', id: 2 })}>Подтвержден</div>
                    <div onClick={() => ChangeStatus({ name: 'Отменен', id: 3 })}>Отменен</div>
                    <div onClick={() => ChangeStatus({ name: 'Доставлен', id: 4 })}>Доставлен</div>
                </div>}
            </div>
        </div>
        <p className='UserName'>{GetSinglProductPage?.data?.name} {GetSinglProductPage?.data?.phone} {GetSinglProductPage?.data?.email}</p>
        <p className='UserName'>{GetSinglProductPage?.data.city?.name} {GetSinglProductPage?.data?.home_office}  </p>
        {data?.map((elm, i) => {
            return <div key={i} style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <TableItem
                        noborder
                        title={[
                            'Номер заказа',
                            'Сумма заказа',
                            'Дата заказа',
                            'Данные об оплате',
                            'Способ доставки',
                            'Способ оплаты'
                        ]}
                        name={elm.id}
                        phone={elm.product.price}
                        date_of_birth={GetSinglProductPage?.data.order_status?.name_ru}
                        volume={GetSinglProductPage?.data.deliver?.name}
                        order_count={GetSinglProductPage?.data.payment_type?.name}
                        created_at1={elm.created_at}
                    />
                </div>
                <UserProduct data={elm} />
            </div>

        })}
    </div>
}