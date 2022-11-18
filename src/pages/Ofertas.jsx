// Page-Ofertas
import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Ofertas.css'

export default function Ofertas() {
    return (
    <div>
        <div className='ofertas-title'>
            <h2>OFERTAS EXCLUSIVAS</h2>
        </div>
    <div className='container' id='container-ofertas'>
        {/* Ofertas */}
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            {/* Oferta-1 */}
            <div className="col">
                <div className="card">
                    <Link to='/'>
                        <img src="./src/assets/img-multimedia/ofertas/oferta-1.png" className="card-img-top" alt="Oferta-1"/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Oferta Pack Nissan</h5>    
                    </div>
                </div>
            </div>
            {/* Oferta-2 */}
            <div classNames="col">
                <div className="card">
                    <Link to='/'>
                        <img src="./src/assets/img-multimedia/ofertas/oferta-2.png" className="card-img-top" alt="Oferta-2"/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Oferta pack Toyota</h5>
                    </div>
                </div>
            </div>
            {/* Oferta-3 */}
            <div className="col">
                <div className="card">
                    <Link to='/'>
                        <img src="./src/assets/img-multimedia/ofertas/ofertas-3.png" className="card-img-top" alt="Oferta-3"/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Combo de lubricaión Diesel 15W40</h5>
                    </div>
                </div>
            </div>
            {/* Oferta-4 */}
            <div className="col">
                <div className="card">
                    <Link to='/'>
                        <img src="./src/assets/img-multimedia/ofertas/ofertas-4.png" className="card-img-top" alt="Oferta-4"/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Combro de lubricación 20W50</h5>
                    </div>
                </div>
            </div>
        </div>
        {/* Envio-img */}
        <div className="envios-img">
            <figure>
                <img src="./src/assets/img-multimedia/ofertas/envios.png" className="card-img-top" alt="Envios"/>
            </figure>
        </div>
        
    </div>
    </div>
  )
}
