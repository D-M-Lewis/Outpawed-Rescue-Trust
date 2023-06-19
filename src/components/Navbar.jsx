import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'
import logo from '../../public/outpawed-logo.webp'
import MobileMenu from './MobileMenu'
import DonationModal from './DonationModal'

const Navbar = () => {
    const [menuIsOpen, openMenu] = useState(false);

    // toggle openMenu state - on / off
    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen);
        document.body.classList.toggle('no-scroll');
    }

    if (menuIsOpen) {

    }
    return (
        <>
            <div id='topnav' className='flex justify-between h-24 bg-blue'>
                {/* Desktop Menu, which only appears on large screens */}
                <div className="logo flex self-center ml-1 md:ml-4">
                    <Link to="/"><img className="w-16 h-16" src={logo} alt="dog paw logo" /></Link>
                </div>
                <div className='company-name flex'>
                    <h2 className='text-2xl text-center px-2 lg:text-5xl self-center font-bold text-purple'>Outpawed Rescue Trust</h2>
                </div>
                <div id="menu-container" className='flex'>
                    <button id="mySidenav" onClick={toggleMobileMenu} className='flex self-center mr-1 lg:mr-4 h-12 w-24 justify-center'>
                        <h4 className='self-center text-purple text-2xl'>MENU</h4>
                        <List id="hamburger-icon" className='self-center text-purple text-2xl' />
                    </button>

                </div>

            </div>

            {/* if menuIsOpen is true, show moile menu */}
            {/* gives the mobile menu close  */}
            {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
            {/* If menuIsOpen, show the close button */}

        </>
    )
}

export default Navbar