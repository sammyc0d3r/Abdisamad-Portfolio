import './Hero.css'
import Heroimage from './Heroimage'
import Button1 from './Button1'
export default function Hero() {
    return (
        <div className="container1">

            <div className='Headersdiv'>
                <p>NICE TO MEET YOU</p>     
                <h1>Hi, I'm Abdisamad <br/>UI & UX DESIGNER</h1>
                <p>hey, are you looking for a designer to build Brand and grow <br/>
                your bussiness? Let's shake hands with me</p>
                <Button1 text={"Download My CV"}/>
            </div>

            <div className='Imagediv'>
            <Heroimage/>
            </div>
        </div>
    )
}