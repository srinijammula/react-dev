import { useState } from "react"
import { Link } from "react-router-dom"

const logo = new URL('../img/eato_logo.png',import.meta.url).href
export const Header = () => {
    const [btnName,setBtnName]=useState('Login')
    return (
        <div className="header">
            <div>
                <img src={logo} className="logo-eato"/>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                    <button className="login" onClick={() => {setBtnName(btnName=='Login'?'Logout':'Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}