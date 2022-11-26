import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../pages/Login.css'




export default function Login() {
  
  const [userData , setUserData] = useState({ username: '' }) ;
  const [passwordData , setPasswordData] = useState({ password: ''})
  //USER
  const handleInput = (e) => {
    console.log(e.target.value)

    const value = e.target.value
    const name = e.target.name

    setUserData({ ...userData, [name]: value})

  }

  // PASSWORD 
  const handleInputpassword = (e) => {
    console.log(e.target.value)

    const value = e.target.value
    const name = e.target.name

    setPasswordData({ ...passwordData, [name]: value})

  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Enviando formulario a walter..')



    //fetch API: La direccion de la API

    const url = 'https://637ffbc18efcfcedacfae785.mockapi.io/api/v1/users'

    // crear otra constante para las opciones que tienen que cumplir para hacer el post
    const options = {
      method: 'POST',
      body: JSON.stringify({ username : userData.username , password : passwordData.password }),
      headers: { 'Content-type': 'aplication/json'},

    }
   //El await va esperar la respuesta 
    const response = await fetch(url, options)
    //Esta respuesta la guardo en formato json
    const data = await response.json()


  }
  return (
    <div className='login-container'>
      <div className='login-form' >
        <form className='formLogin' onSubmit={handleSubmit}>
        <h2 className='title'>Login</h2>
          <div className='form-group'>
      
            {JSON.stringify(userData)}
     
            <label className='label-login'>
              <i class="fa-solid fa-user"></i>

              <input type='text' className='form-control' id='email' placeholder='Ingrese su Usuario'  onChange = {handleInput}/>
            </label>
          </div>
          <div className='form-group'  >
          {JSON.stringify(passwordData)}
            <label className='label-login'>
              <i class="fa-solid fa-lock"></i>

              <input type='password' className='form-control' id='password' placeholder='Ingrese su contraseña'  onChange = {handleInputpassword} />
            </label>
          </div>
          <Link to='/recuperar' className='login-link'>Olvidaste tu Contraseña</Link>
          <div className='form-group'>
         
              <button type='submit' className='btn-primary'>Login</button>
            
          </div>
          <div className='remember'>
            <label><input type="checkbox" />Recordar mi Cuenta</label>
          </div>
        </form>
      </div>
    </div>
  )
}
