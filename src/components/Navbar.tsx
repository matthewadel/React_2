import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { useState } from 'react'

export const Navbar = () => {
    const [click, setClick] = useState(false)
    const closeNavBar = () => setClick(false)
    return (
        <div className="screen-container">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                <div className='hamburger' onClick={() => setClick(!click)}>
                    {click ? <FaTimes size={30} className='icon' /> : <FaBars size={30} className='icon' />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a onClick={closeNavBar} href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a onClick={closeNavBar} href="#about">About</a>
                    </li>
                    <li className='nav-item'>
                        <a onClick={closeNavBar} href="#testimonials">Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a onClick={closeNavBar} href="#demo">Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}