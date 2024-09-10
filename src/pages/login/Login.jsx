import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'


const Login = () => {
  const [currState,setCurrState] =useState("Sign up")
  return (
    <div className="login">
      <img src={assets.logo_big} className='logo' alt="Logo" />
      <video autoPlay muted loop>
        <source src="/115035-703067756_small.mp4" type="video/mp4" />
      </video>
      <form className='login-form'>
        <h2>{currState}</h2>
        { currState=="Sign up"?
        <input type="text" placeholder='username' required className='form-input'/>
        :null
        }
        <input type="email" placeholder='Email' required className='form-input'/>
        <input type="password" placeholder='Password' required className='form-input'/>
        <button type='submit'>{currState === "Sign up"?"Create Account":"Login now"}</button>
        <div className='login-term'>
      <input type="checkbox" />
      <p>I agree to the <a href="">terms of service</a></p>
        </div>
        <div className="login-forgot">
          { currState=="Sign up"?
          <p className='login-toggle'>Already have an account? <span className='click-here' onClick={()=>setCurrState("Login")}>Click here</span></p>
          :
          <p className='login-toggle'>Dont have an account? <span className='click-here' onClick={()=>setCurrState("Sign up")}>Click here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login
