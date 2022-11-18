import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../components/Header.css'

export default function Header() {
  return (
    <div className='header__box'>
      <div className="header__superior">
        <picture className="box__img">
          <Link to='/'><img className="logo_img" src="./src/assets/img-multimedia/logo/logo.png" alt="logo.png" /></Link>
        </picture>
        <form action="search" className="box__search">
          <input type="search" placeholder="¿Que desea buscar?" />
        </form>
        <div className="box__icons">
          <ul className="menu__icons">
            <li><Link to='' className='imgIcons'><img src="./src/assets/img-multimedia/icons/cuenta.png" alt=""/>Sign in</Link></li>
            <li><Link to='' className='imgIcons'><img src="./src/assets/img-multimedia/icons/login-.png" alt=""/>Login</Link></li>
            <li><Link to='' className='imgIcons'><img src="./src/assets/img-multimedia/icons/lista-de-deseos.png" alt="" /></Link></li>
            <li><Link to='' className='imgIcons'><img src="./src/assets/img-multimedia/icons/carrito-de-compras.png" alt="" /></Link></li>
          </ul>
        </div>
      </div>

      {/* header inferior */}
      <div className="header__inferior-menu">
        <div className="container__menu">
          <ul className="menu">
            <li><Link to='/' className='navTitle'>Inicio</Link></li>
            <li><Link to='ofertas' className='navTitle'>Ofertas</Link></li>
            <li><Link to='Contacto' className='navTitle'>Contacto</Link></li>
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
              <Link to='/'>
                <img src="./src/assets/img-multimedia/header/motores.png" alt="" />
                <span>Motores</span>
              </Link>
            </figure>
          </div>
          <div>
            <figure>
              <Link to='/'>
                <img src="./src/assets/img-multimedia/header/repuestos.png" alt="" />
                <span>Repuestos</span>
              </Link>
            </figure>
          </div>
          <div>
            <figure>
              <Link to='/'>
                <img src="./src/assets/img-multimedia/header/accesorios.png" alt="" />
                <span>accesorios</span>
              </Link>
            </figure>
          </div>
          <div>
            <figure>
              <Link to='/'>
                <img src="./src/assets/img-multimedia/header/lubricantes.png" alt="" />
                <span>Lubricantes</span>
              </Link>
            </figure>
          </div>
          <div>
            <figure>
              <Link to='/'>
                <img src="./src/assets/img-multimedia/header/vehiculos.png" alt="" />
                <span>Vehiculos</span>
              </Link>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}