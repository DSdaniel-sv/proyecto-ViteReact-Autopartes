import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Inicio from '../pages/Inicio';
import Footer from '../components/Footer'

export default function Router() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
