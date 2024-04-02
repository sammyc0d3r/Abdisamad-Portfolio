import './Button1.css'
export default function Button1(props) {
    return (
        <div className='containerbutton1'>
            <button className='button1tag'>{props.text}</button>
        </div>
    )
}