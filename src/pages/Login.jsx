import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Login.css'

export default function Login() {
  
  return (
    <div className='login-container'>
      <div className='login-form'>
        <form className='formLogin'>
        <h1 className='title'>Iniciar Sesión</h1>
          <div className='form-group'>
            <label htmlFor='email'>Correo Electrónico</label>
            <input type='email' className='form-control' id='email' placeholder='Ingrese su correo electrónico' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' className='form-control' id='password' placeholder='Ingrese su contraseña' />
          </div>
          <Link className='loginLink'>Olvidaste tu Contraseña</Link>
          <div className='form-group'>
            <Link to='/'>
              <button type='submit' className='btn-primary'>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
