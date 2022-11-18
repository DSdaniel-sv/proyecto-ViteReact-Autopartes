import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Footer from '../components/Footer'
import Ofertas from '..'
import Galery from '../pages/Galery';

export default function Router() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="Contacto" element={<Contacto/>}/>
            <Route path='ofertas' element={<Ofertas/>}/>
        </Routes>
        <Galery/>
        <Footer/>
    </BrowserRouter>
  )
}
