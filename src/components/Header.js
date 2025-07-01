const logo = new URL('../img/eato_logo.png',import.meta.url).href
export const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}