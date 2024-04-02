import Question from "./Question"
import './Navbar.css'
export default function Navbar() {
    return (
        <div className="container">
            
            <div className="logodiv">
            <img className="Logo" src="logo.png" alt="" />
            </div>
            <ul className="sidebar">
                   <li onClick={closeSidebar}><img src="close.svg" alt="" /></li>
                    <li><a className="NavLinks" href="/" onClick={closeSidebar}>Home</a></li>
                    <li><a className="NavLinks" href="#Services" onClick={closeSidebar}>Services</a></li>
                    <li><a className="NavLinks" href="#About" onClick={closeSidebar}>About</a></li>
                    <li><a className="NavLinks" href="#About" onClick={closeSidebar}>Contact</a></li>
                    <li><a className="NavLinks" href="#Footer" onClick={closeSidebar}>NewsLetter</a></li>
                </ul>
            <div className="pages">   
                <ul>
                    <li className="hideOnMobile"><a className="NavLinks" href="/">Home</a></li>
                    <li className="hideOnMobile"><a className="NavLinks" href="/#Services">Services</a></li>
                    <li className="hideOnMobile"><a className="NavLinks" href="/#About">About</a></li>
                    <li className="hideOnMobile"><a className="NavLinks" href="/#About">Contact</a></li>
                    <li className="hideOnMobile"><a className="NavLinks" href="/#Footer">NewsLetter</a></li>
                </ul>
            </div>
            <img className="menuImage" onClick={showSidebar} src="menu.svg" alt="" />
            <div className="questiondiv"><Question/></div>
        </div>
    )
}

function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}

