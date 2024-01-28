import { useEffect, useState } from 'react'
import { LogOutSVG, Logo } from '../../Svg'
import { Button } from '../button'
import './style.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogOutAction } from '../../Services/action/action'

export const Layout = () => {
    const [activeButton, setActiveButton] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        const currentURL = window.location.href;
        const parts = currentURL.split('/');
        const curentPage = parts[parts.length - 1];
        if (curentPage == 'orderlist') {
            setActiveButton(0)
        }
        else if (curentPage == 'userlist' || curentPage == 'UserScreen') {
            setActiveButton(1)
        }
        else if (curentPage == 'Product' || curentPage == 'AddProducts') {
            setActiveButton(2)

        }
        else if (curentPage == 'ReviewsPage') {
            setActiveButton(4)
        }
        else if (curentPage == 'Main') {
            setActiveButton(3)
        }
    }, [])

    const LogOut = () => {
        dispatch(LogOutAction())
        localStorage.removeItem('token')
        window.location = '/'
    }

    return (<div className='outLet'>
        <div className='layout'>
            <Logo />
            <p className='titleAdminPanel'>Админ-панель PLAZAN APP</p>
            <div className='Logout' onClick={() => LogOut()}>
                <LogOutSVG />
                {/* <Button onClick={() => LogOut()} text={'Выйти'} /> */}
            </div>
            <div className='buttonDiv'>
                <Button onClick={() => window.location = '/orderlist'} active={activeButton == 0} text={'Заказы'} />
                <Button onClick={() => window.location = '/userlist'} active={activeButton == 1} text={'Пользователи'} />
                <Button onClick={() => window.location = '/Product'} active={activeButton == 2} text={'Товары'} />
                <Button onClick={() => window.location = '/Main'} active={activeButton == 3} text={'Главная и Каталог'} />
                <Button onClick={() => window.location = '/ReviewsPage'} active={activeButton == 4} text={'Отзывы'} />

            </div>
        </div>
        <div >
            <Outlet />
        </div>
    </div>
    )
}