import './style.css'
export const Input = ({ placeholder, type = 'text', value, onChange = () => { }, width = '300px' }) => {
    return <input
        placeholder={placeholder}
        type={type}
        style={{ width: width }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='Input'
    />
}