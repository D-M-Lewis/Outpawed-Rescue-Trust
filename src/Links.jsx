import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import Shopfront from './pages/shop/Shopfront'
import Product from './pages/shop/Product'
import Adopt from './pages/Adopt'
import Foster from './pages/Foster'
import LoadingScreen from './components/LoadingScreen'
import Sponsorship from './pages/Sponsorship'
import Ourcats from './pages/Ourcats'
import Volunteer from './pages/Volunteer'
import Catching from './pages/Catching'
import Information from './pages/Information'
// Import Components


const Links = () => {
    return (
        <Routes>
            {/* PAGES */}
            <Route exact path="/" element={<Home />} />
            <Route path="/Adopt" element={<Adopt />} />
            <Route path="/Foster" element={<Foster />} />
            <Route path="/Sponsorship" element={<Sponsorship />} />
            <Route path="/Ourcats" element={<Ourcats />} />
            <Route path="/Volunteer" element={<Volunteer />} />
            <Route path="/Catching" element={<Catching />} />
            <Route path="/Information" element={<Information />} />
            {/* shop pages */}
            <Route path="/shop" element={<Shopfront />} />
            <Route path="/product/:id" element={<Product />} />

        </Routes>
    )
}

export default Links