import { useEffect, useState } from 'react'
import { Pagination } from '../../components/Pagination'
import { ReviewBlock } from '../../components/ReviewBlock'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetComments } from '../../Services/action/action'
import { Button } from '../../components/button'

export const ReviewsPage = () => {

    const dispatch = useDispatch()
    const { GetCommentsReducer } = useSelector((st) => st)
    const [status, setStatus] = useState(0)
    const [active, setActive] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(GetComments({ status: status }))
    }, [status])

    useEffect(() => {
        setData(GetCommentsReducer?.data?.data)
    }, [GetCommentsReducer])

    return <div>
        <div className='header'>
            <p>Отзывы</p>
            <div className='ReviewsPageButtonWrapper'>
                <Button green={status == 1} onClick={() => setStatus(1)} text={'Не опубликованные'} />
                <Button green={status == 0} onClick={() => setStatus(0)} text={'Опубликованные'} />
            </div>
        </div>
        <div className='ReviewWrapper'>
            {data?.map((elm, i) => {
                return <ReviewBlock
                    commId={elm.id}
                    statusid={status}
                    status={elm.status}
                    star={elm.star}
                    d={elm.created_at}
                    type={status}
                    name={elm?.user?.name}
                    product={elm.product}
                    message={elm.message}
                />
            })}
        </div>

        {/* {GetCommentsReducer?.data?.last_page > 1 && <Pagination changeActiveButton={(e) => setActive(e)} length={GetCommentsReducer?.data?.last_page} activeButton={active} />} */}


    </div>
}