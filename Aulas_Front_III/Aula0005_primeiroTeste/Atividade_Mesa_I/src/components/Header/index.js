import logo from "./logo.png"
import "./style.css"


const Header = ()=>{
    return(
        <header>
            <div><img src= {logo} alt="logo"/></div>
            
            <div className="nav-op">
                <a>Quem Somos</a>
                <a>Fale Conosco</a>
                <a>Login</a>
            </div>
        </header>
    )

}

export default Header;