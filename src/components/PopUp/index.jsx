import { Button } from '../button'
import './style.css'
export const PopUp = ({ setOpen }) => {
    return <div className='PopUp'>
        <div className='PopUpDiv'>
            <textarea></textarea>
            <div className='PopUpButton'>
                <Button text={'Отправить'} green />
                <Button onClick={() => setOpen()} text={'Отменить'} black />
            </div>
        </div>
    </div>
}