import React from 'react'
import  '/src/pages/DescriptionGalery.css'

export default function DescriptionGalery ()  {

    return (

        <>

        <div id="container_description">

    <div id ="card" class="card mb-3" >
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="img-fluid" src="./src/assets/img-multimedia/galery-img/auto.png"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h1 class="card-title">Carrito de prueba</h1>
          
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button className="button_description_product">Añadir al carrito</button>
          <br/>
          <br/>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          
        </div>
      </div>
    </div>
</div>
        </div>
       </>
    )
}