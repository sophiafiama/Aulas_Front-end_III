import "./style.css"


const Footer = ({logo})=>{
    return(
        <footer>
                       
            <div className="msocial">
                <a>Icone</a>
                <a>Icone</a>
                <a>Icone</a>
            </div>

            <div><img src= {logo} alt="logo"/></div>
        </footer>
    )

}

export default Footer;