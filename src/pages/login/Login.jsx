import React from 'react'
import './Login.css'
import assets from '../../assets/assets'


const Login = () => {
  return (
    <div className="login">
      <img src={assets.logo_big} className='logo' alt="Logo" />
      <video autoPlay muted loop>
        <source src="/115035-703067756_small.mp4" type="video/mp4" />
      </video>
      <form className='login-form'>
        <h2>Sign up</h2>
        <input type="text" placeholder='username' required className='form-input'/>
        <input type="email" placeholder='Email' required className='form-input'/>
        <input type="password" placeholder='Password' required className='form-input'/>
        <button type='submit'>Sign up</button>
        <div className='login-term'>
      <input type="checkbox" />
      <p>I agree to the <a href="">terms of service</a></p>
        </div>
        <div className="login-forgot">
          <p className='login-toggle'>Already have an account? <a href=""><span>Click here</span></a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
