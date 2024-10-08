import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup, login, resetPass } from '../../config/firebase'



const Login = () => {
  const [currState, setCurrState] = useState("Sign up")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState == "Sign up") {
      signup(userName, email, password)
    } else {
      login(email, password)
    }
  }

  return (
    <div className="login">
      <img src={assets.logo_big} className='logo' alt="Logo" />
      <video autoPlay muted loop>
        <source src="/115035-703067756_small.mp4" type="video/mp4" />
      </video>
      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currState}</h2>
        {currState == "Sign up" ?
          <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='username' required className='form-input' />
          : null
        }
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' required className='form-input' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' required className='form-input' />
        <button type='submit'>{currState === "Sign up" ? "Create Account" : "Login now"}</button>
        <div className='login-term'>
          <input type="checkbox" />
          <p>I agree to the <span> terms of service</span></p>
        </div>
        <div className="login-forgot">
          {currState == "Sign up" ?
            <p className='login-toggle'>Already have an account? <span className='click-here' onClick={() => setCurrState("Login")}>Click here</span></p>
            :
            <p className='login-toggle'>Dont have an account? <span className='click-here' onClick={() => setCurrState("Sign up")}>Click here</span></p>
          }
          {
            currState === "Login"
              ? <p className='login-toggle'>Forgot Password ? <span className='click-here' onClick={() => resetPass(email)}>Reset here</span></p>
              : null
          }
        </div>
      </form>
    </div>
  )
}

export default Login
