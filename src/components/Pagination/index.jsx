import { useEffect, useState } from 'react'
import './style.css'
export const Pagination = ({ changeActiveButton, length, activeButton }) => {
    const [active, setActive] = useState(activeButton)
    let [arr, setArr] = useState([])
    useEffect(() => {
        setArr(Array(length).fill('0'))
    }, [length])
    return <div className='pagination'>
        {arr.map((elm, i) => {
            return <div onClick={() => {
                changeActiveButton(i)
                setActive(i)
            }} id={i == active && 'activePagination'} key={i} className='paginationButton'>{i + 1}</div>
        })}
    </div>
}