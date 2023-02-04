import logo from "../images/trollFace.png"

export default function Header(){
    return(
        <header className="head">
            <img src={logo} alt="logo"/>
            <h2>Meme Generator</h2>
        </header>
    )
}