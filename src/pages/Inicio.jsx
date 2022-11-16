import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../pages/Inicio.css';

export default function Inicio() {
    return (
        <div className='container-publicidad'>
            <div id="sect_video" className="sect_video">
                <video className="video_1" src="./src/assets/img-multimedia/multimedia/intro3.mp4" autoplay="true" muted="true" loop="true"
                    poster=""></video>
            </div>
            <div className="container1_carousel">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./src/assets/img-multimedia/carrusel-1/oferta1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./src/assets/img-multimedia/carrusel-1/oferta2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./src/assets/img-multimedia/carrusel-1/oferta3.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
