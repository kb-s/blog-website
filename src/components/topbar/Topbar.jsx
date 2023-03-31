import { Link } from "react-router-dom";
import "./topbar.css"

function Topbar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link to="/" className="link">HOME</Link>
                </li>
                <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className="topImg" src="https://images.pexels.com/photos/5725444/pexels-photo-5725444.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            ) : (
              <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
                </li>
              <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
              </li>
              </ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar