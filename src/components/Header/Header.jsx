import "./Header.scss"
import rocketImg from "../../assets/rocket.png"
function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="img">
        <img src={rocketImg}/>
        </div>
        <h1>to<span>do</span></h1>
      </div>
    </header >
  )
}

export default Header