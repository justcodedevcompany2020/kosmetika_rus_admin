import { ClockLoader } from 'react-spinners'
import './style.css'
export const Loading = () => {
    return <div className='loading'>
        <ClockLoader
            color={'green'}
            // loading={GetUserReducer.loading}
            size={30}
            data-testid="loader"
        />
    </div>
}