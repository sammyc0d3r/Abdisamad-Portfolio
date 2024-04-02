import './Signup.css'
import Button from './Button1'

export default function Signup() {
    return (
        <div className='Signup-Container'>
            <input type="text" placeholder="Enter your E-mail"/>
            <Button text={"Sign-Up"}/>

        </div>
    )
}