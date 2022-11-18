import React from 'react';
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Header from '../components/Header';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Footer from '../components/Footer'
import Ofertas from '../pages/Ofertas';
import Galery from '../pages/Galery';
import Login from '../pages/Login';
import SingIn from '../pages/SingIn';


export default function Router() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="Contacto" element={<Contacto/>}/>
            <Route path='ofertas' element={<Ofertas/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<SingIn/>}/>
        </Routes>
        <Galery/>
        <Footer/>
    </BrowserRouter>
  )
}
