import { useEffect, useState } from 'react'
import { TableItem } from '../../components/TableItem'
import { Button } from '../../components/button'
import './style.css'
import { Pagination } from '../../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrder } from '../../Services/action/action'
import { Input } from '../../components/Input'
import 'react-date-range/dist/theme/default.css'
import 'react-date-range/dist/styles.css'

import { DateRangePicker } from 'react-date-range'

export const OrderList = () => {
    const [data, setData] = useState([])
    const [active, setActive] = useState(0)
    const dispatch = useDispatch()
    const { GetAllOrdersReducer } = useSelector((st) => st)
    const [searchNumber, setSearchNumber] = useState()
    const [selectedDate, setSelectedDate] = useState([{ startDate: '', endDate: '', key: 'selection', },])

    const [openCalendar, setOpenCalendar] = useState(false)
    document.body.addEventListener('click', function () {
        setOpenCalendar(false)
    });
    useEffect(() => {
        let date = new Date(selectedDate[0].endDate)
        let startDate = new Date(selectedDate[0].startDate)
        let statDate = ''
        let endDate = ''
        if (selectedDate[0].endDate) {
            endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
        if (selectedDate[0].startDate) {
            statDate = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
        }
        console.log(endDate, startDate)
        dispatch(GetAllOrder({ search: searchNumber, start_date: statDate, end_date: endDate }, active))
    }, [active, searchNumber, selectedDate])

    useEffect(() => {
        setData(GetAllOrdersReducer?.data?.data)
    }, [GetAllOrdersReducer])
    return <div>
        <div className='header'>
            <p>Список заказов</p>
            <div className='buttonWrapper'>
                <Input value={searchNumber} onChange={(e) => setSearchNumber(e)} width='200px' placeholder={'Поиск по номеру'} />
                <div className='CalendarWrapper'>
                    <Button onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        setOpenCalendar(true)
                    }} text={'Фильтр по дате'} />
                    {openCalendar && <div
                        onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                        }}
                        className='DataPickerDiv'>
                        <DateRangePicker
                            color={'#e53dff'}
                            dateDisplayFormat={'mm, dd, yyyy'}
                            ranges={selectedDate}
                            onChange={(ranges) => {
                                setSelectedDate([ranges.selection])
                            }}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                        />
                    </div>}
                </div>
                <Button green text={'Скачать таблицу'} />
            </div>
        </div>

        <div className='TableWrapper'>
            {
                data?.map((elm, i) => {
                    if (i == 0) {
                        console.log(elm, 'elm')
                    }
                    return <TableItem
                        onClick={() => window.location = `/SinglProduct/${elm.id}`}
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
                        date_of_birth={elm.order_status.name_ru}
                        volume={elm.
                            deliver.name
                        }
                        order_count={elm.payment_type.name}
                        created_at1={elm.created_at}
                        key={i} />
                })
            }
        </div>
        {GetAllOrdersReducer?.data?.last_page > 1 && <Pagination changeActiveButton={(e) => setActive(e)} length={GetAllOrdersReducer?.data?.last_page} activeButton={active} />}

    </div>
}