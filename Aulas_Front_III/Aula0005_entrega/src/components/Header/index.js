import logo from "../../img/logo_atual.jpg"
import "./style.css"


const Header = ()=>{
    return(
        <header>
            <div><img src= {logo} alt="logo"/></div>
            
            <div className="nav-op">
                <a>Quem Somos</a>
                <a>Login</a>
            </div>
        </header>
    )

}

export default Header;