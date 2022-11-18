import React from 'react'
import { Link} from 'react-router-dom'
import '../pages/Contacto.css'

export default function Contacto() {
  return (
    <div className='form-width'>
        <form id="form-container">
                <div className="row">
                    {/* <!-- form input --> */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        {/* <!-- logo --> */}
                        <div class="logotipe d-flex justify-content-center">
                            <Link href="#" class="d-flex align-items-center">
                                <img src="./src/assets/img-multimedia/logo/logo.png" class="img-fluid" alt='logo.png'/>
                                <h3 class="ubuntu">AUTOPARTES</h3>
                            </Link>
                        </div>
                        <h4 class="text-center text-uppercase anton">Contacto</h4>
                        <hr/>
                        {/* <!-- inputs --> */}
                        <div class="inputs-form form-group">
                            <label for="username" class="ubuntu">Nombre y apellido:</label>
                            <input type="text" name="username" id="username" class="form-control mb-4" required/>
                            <label for="email_form" class="ubuntu">Correo Electrónico:</label>
                            <input type="email" name="email_form" id="email_form" class="form-control mb-4" required placeholder="ejemplo@email.com"/>
                            <label for="username" class="Comentario">Comentario:</label>
                            <textarea name="" id="coment" cols="40" rows="10" placeholder="Ingrese su comentario"></textarea>
                            <button type="submit" class="btn mt-1 ubuntu" id="send-form">Enviar</button>
                        </div>
                    </div>
                    {/* <!-- form img --> */}
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <figure class="w-100 img-form" id="box__img-message">
                            <img src="./src/assets/img-multimedia/contacto/image-1.svg"/>
                        </figure>
                    </div>
                </div>
            </form>
    </div>
  )
}
