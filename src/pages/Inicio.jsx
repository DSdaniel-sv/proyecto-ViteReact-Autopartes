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

            {/* galery */}
            <div className="container-2">
                <div className="sect sect__motores">
                    <div className="box__title">
                        <h2>MOTORES</h2>
                    </div>
                    <div className="box__card">
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sect sect__repuestos">
                    <div className="box__title">
                        <h2>REPUESTOS</h2>
                    </div>
                    <div className="box__card">
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sect sect__accesorios">
                    <div className="box__title">
                        <h2>ACCESORIOS</h2>
                    </div>
                    <div className="box__card">
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src="44bb9450175c6bb59d5979a0d76d56fa-removebg-preview.png" alt="banner"/>
                            </div>
                            <div className="contentBx">
                                <h2>2018 Acura RDX </h2>
                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div className="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="descripcion/index.html">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
