import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../components/Header.css'

export default function Header() {
  return (
    <div className='header__box'>
      <div className="header__superior">
        <picture className="box__img">
          <img className="logo_img" src="../src/img/logo/logo.png" alt="logo.png" />
        </picture>
        <form action="search" className="box__search">
          <input type="search" placeholder="¿Que desea buscar?" />
        </form>
        <div className="box__icons">
          <ul className="menu__icons">
            <li><img src="../src/img/icons/cuenta.png" alt="" /><a href="">Sign in</a></li>
            <li><img src="../src/img/icons/login-.png" alt="" /><a href="">Login</a></li>
            <li><a href=""><img src="../src/img/icons/lista-de-deseos.png" alt="" /></a></li>
            <li><a href=""><img src="../src/img/icons/carrito-de-compras.png" alt="" /></a></li>
          </ul>
        </div>
      </div>

      {/* header inferior */}
      <div className="header__inferior-menu">
        <div className="container__menu">
          <ul className="menu">
            <li><a href="../../../TRABAJO_FINAL_GRUPAL/proyecto-Front-End-Final/index.html">Inicio</a></li>
            <li><a href="">Ofertas</a></li>
            <li><a href="../contact/contacto.html">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* Nav 2 */}
      <div className="container-ofertas">
        <div className="container-title">
          <h1>Aprovecha nuestras ofertas por tiempo limitado</h1>
        </div>
        <div className="ofertas-figure">
          <div>
            <figure>
              <a href=""><img src="./ofertas/src/1ofer.png" alt="" />
                <span>Motores</span>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a href=""><img src="./ofertas/src/repuestos.png" alt="" />
                <span>Repuestos</span>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a href=""><img src="./ofertas/src/accesorios.jpg" alt="" />
                <span>accesorios</span>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a href=""><img src="./ofertas/src/lubricantes.jpg" alt="" />
                <span>Lubricantes</span>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a href=""><img src="./ofertas/src/vehiculos.jpg" alt="" />
                <span>Vehiculos</span>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}