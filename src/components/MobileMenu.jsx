import React from 'react'
import { Link } from "react-router-dom";
import { X } from 'react-bootstrap-icons';

const MobileMenu = ({ closeMethod }) => {
    return (
        <><div id='mobile-menu' className="overflow-hidden absolute w-80 h-screen z-10 top-0 right-0">
            <div className="w-80 flex h-screen absolute bg-white top-0 right-0">
                <button id="close-nav-menu" className='absolute top-8 right-5 text-3xl' onClick={closeMethod}>
                    <X />
                </button>
                <ul className='pt-20'>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/" onClick={closeMethod}>Home</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/Foster" onClick={closeMethod}>Fostering</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/Ourcats" onClick={closeMethod}>Our Cats</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/Sponsorship" onClick={closeMethod}>Sponsorship</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/Volunteer" onClick={closeMethod}>Volunteer</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/Information" onClick={closeMethod}>Information</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/Adopt" onClick={closeMethod}>Adoption</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/Catching" onClick={closeMethod}>Catching Cats</Link>
                    </li>
                    <li className='text-purple py-3 px-4 text-lg'>
                        <Link to="/shop" onClick={closeMethod}><span className='menu-donate'>shop</span></Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}


export default MobileMenu