import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useOnlineStatus } from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const logo = new URL('../img/eato_logo.png',import.meta.url).href
export const Header = () => {
    const [btnName,setBtnName]=useState('Login')
    const onlineStatus = useOnlineStatus();
    const data=useContext(UserContext);
    console.log(data);
    return (
        <div className="flex justify-between shadow-md sm:bg-amber-200 bg-green-200">
            <div>
                <img src={logo} className="w-32"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-3 font-bold text-2xl">Online Status: {onlineStatus? "🟢":"🔴"} </li>
                    <Link to="/"><li className="px-3 font-bold text-2xl">Home</li></Link>
                    <Link to="/about"><li className="px-3 font-bold text-2xl">About</li></Link>
                    <Link to="/contact"><li className="px-3 font-bold text-2xl">Contact</li></Link>
                    <Link to="/grocery"><li className="px-3 font-bold text-2xl">Grocery</li></Link>
                    <li className="px-3 font-bold text-2xl">Cart</li>
                    <button className="font-bold text-2xl p-3 rounded-md bg-gray-300 hover:bg-gray-400" onClick={() => {setBtnName(btnName=='Login'?'Logout':'Login')}}>{btnName}</button>
                    <li>{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}