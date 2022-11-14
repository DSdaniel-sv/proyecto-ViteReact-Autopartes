import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../components/Footer.css'

export default function Footer() {
    return (
        <div className='pie-pagina"'>
            <div className='grupo-1'>
                <div class="box">
                    <figure>
                        <Link to=''>
                            <img class="img-logo-footer" src="./src/assets/img-multimedia/logo/logo.png" alt="LOGO DE AUTOSHOP"/>
                        </Link>
                    </figure>
                </div>
                <div class="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>+51 940 890 890</p>
                    <br/>
                    <br/>
                    <p>Av. Buenos Aires N°394</p>
                </div>
                <div class="box">
                    <h2>SIGUENOS</h2>
                    <div class="red-social">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-youtube"></a>
                    </div>
                </div>
            </div>
            <div class="grupo-2">
                <small>&copy; 2022 <b>AUTOSHOP</b> - Todos los Derechos Reservados.</small>
            </div>
        </div>
    )
}
