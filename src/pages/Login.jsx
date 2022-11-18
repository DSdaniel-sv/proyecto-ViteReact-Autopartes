import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Login.css'

export default function Login() {
  
  return (
    <div className='login-container'>
      <div className='login-form'>
        <form className='formLogin'>
        <h1 className='title'>Login</h1>
          <div className='form-group'>
            <label className='label-login'>
              <i class="fa-solid fa-user"></i>
              <input type='text' className='form-control' id='email' placeholder='Ingrese su Usuario' />
            </label>
          </div>
          <div className='form-group'>
            <label className='label-login'>
              <i class="fa-solid fa-lock"></i>
              <input type='password' className='form-control' id='password' placeholder='Ingrese su contraseña' />
            </label>
          </div>
          <Link className='login-link'>Olvidaste tu Contraseña</Link>
          <div className='form-group'>
            <Link to='/'>
              <button type='submit' className='btn-primary'>Login</button>
            </Link>
          </div>
          <div className='remember'>
            <label><input type="checkbox" />Recordar mi Cuenta</label>
          </div>
        </form>
      </div>
    </div>
  )
}
