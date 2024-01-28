import { Stars, WhiteStare, WhiteStars } from '../../Svg'
import './style.css'
import { Button } from '../button'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeStarStatus } from '../../Services/action/action'

export const ReviewBlock = ({ message, product, name, d, star, status, commId, statusid, type }) => {
    const [date, setDate] = useState()
    const [stare, setStare] = useState(['', '', '', '', ''])
    const dispatch = useDispatch()
    useEffect(() => {
        let dd = new Date(d)
        const day = dd.getDate();
        const month = dd.getMonth() + 1;
        const year = dd.getFullYear();
        setDate(`${day}.${month}.${year}`)
    }, [d])

    const changeStatus = (id) => {
        dispatch(ChangeStarStatus({ status: id, id: statusid, comment_id: commId, }))
    }
    return <div className='ReviewBlockDiv'>
        <div className="ReviewBlock">
            <div className='ReviewName'>
                <p>{name}</p>
                <p>{date}</p>
            </div>
            <div className='Stars'>
                {stare.map((elm, i) => {
                    if (i + 1 <= star) {
                        return <Stars />
                    }
                    else {
                        return <WhiteStare />
                    }
                })}
            </div>
            <div className='Review'>
                {message}
            </div>
            <div className='textReviewDiv'>
                <p className='textReview'>Товар: {product?.name}</p>
                <p className='textReview'>Артикул: {product?.vendor_code}</p>
            </div>
        </div >
        <div className='ReviewbuttonWrapper'>
            <Button onClick={() => changeStatus(status == '0' ? 1 : 0)} text={status == '1' ? 'Опубликовать' : 'Удалить'} />
            <Button onClick={() => changeStatus(0)} black text={'Отклонить'} />
        </div>
    </div>
}