import { Link } from "react-router-dom"
import "./login.css"

function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter Your email..."/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your password..."/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link to="/register" className="link">Register</Link></button>
    </div>
  )
}

export default Login