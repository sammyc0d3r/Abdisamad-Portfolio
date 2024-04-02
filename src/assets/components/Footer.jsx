import './Footer.css'
import Signup from './Signup'

export default function Footer() {
    const newLocal = 'Footer-Container'
    return (
        <div className={newLocal} id='Footer'>
            <div className='Footer-headers'>
                <p>NEWSLETTER</p>
                <h2>STAY UP TO DATE, SUBSCRIBE  <br/>
                TO THE FREE NEWSLETTER</h2>
                <Signup/>
            </div>
        </div>
    )
}