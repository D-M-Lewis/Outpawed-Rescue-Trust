import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { X } from 'react-bootstrap-icons';

const MobileMenu = ({ closeMethod }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleDonationsClick = () => {
        openModal();
    };

    return (
        <>
            <div id='mobile-menu' className="overflow-hidden absolute w-80 h-screen z-10 top-0 right-0">
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
                        <li className='text-purple py-3 px-4 text-lg'>
                            <button
                                className="bg-purple text-white font-bold px-6 py-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none m-1"
                                type="button"
                                onClick={handleDonationsClick}
                            >
                                DONATIONS
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {showModal ? (
                <div className="h-screen w-screen relative">
                    <div className="flex h-screen w-screen bg-purple/[.5] backdrop-blur-sm justify-center items-center z-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex flex-col justify-center p-5 border-b border-solid border-gray-300 rounded-t"><button id="close-nav-menu" className='absolute top-8 right-5 text-3xl' onClick={closeModal}>
                                    <X />
                                </button>
                                    <h3 className="text-3xl font-bold my-4 text-purple text-center">Donations</h3>
                                    <p className='w-60 text-purple text-center'>All Donations are greatly appreciated and go towards helping those cats who have been left behind or ignored to find a great new home.</p>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-purple text-white shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        <div>
                                            <input className='text-center shadow-inner text-purple' type="number" placeholder='Please Enter amount' />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-purple bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-12 py-4 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 border-2 rounded-md"
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default MobileMenu;
