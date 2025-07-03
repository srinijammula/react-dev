import { useState } from "react"

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {setBtnName(btnName=='Login'?'Logout':'Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}