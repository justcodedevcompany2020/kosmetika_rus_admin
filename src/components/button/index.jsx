import { ClockLoader } from 'react-spinners'
import './style.css'
export const Button = ({ text, loading, active, green, onClick = () => { }, black }) => {
    return <div onClick={(e) => onClick(e)} id={active ? 'aciveButton' : ''} className={
        green ? 'greenButton' : black ? 'blackButton' : 'button'

    }>
        {loading ? <ClockLoader
            color={'green'}
            loading={loading}
            size={30}
            data-testid="loader"
        /> :
            <p id={active ? 'activeText' : ''} className={green ? 'greenText' : black ? 'black' : ''}>{text}</p>
        }
    </div>
}