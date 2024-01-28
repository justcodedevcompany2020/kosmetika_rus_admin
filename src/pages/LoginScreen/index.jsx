import { useDispatch, useSelector } from "react-redux"
import { Input } from "../../components/Input"
import { Button } from "../../components/button"
import './style.css'
import { useEffect, useState } from "react"
import { LoginAction } from "../../Services/action/action"

export const LoginScreen = () => {
    const { Auth_reducer } = useSelector((st) => st)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const Login = () => {
        dispatch(LoginAction({ email: login, password: password }))
    }

    useEffect(() => {
        if (Auth_reducer.status) {
            localStorage.setItem('token', Auth_reducer.token)
            window.location = '/orderlist'

        }
        else if (Auth_reducer.error) {
            setError('login or password is invalid')
        }
    }, [Auth_reducer])

    return <div className="LoginScreen">
        <p className="LoginText">Login</p>
        <div className="loginScreenInputWrapper">
            <Input value={login} onChange={(e) => setLogin(e)} placeholder={'Login'} />
            <Input value={password} onChange={(e) => setPassword(e)} placeholder={'password'} type={'password'} />
        </div>
        <p className='errorLogin'>{error}</p>
        <Button onClick={() => Login()} text={'Login'} />
    </div>
}