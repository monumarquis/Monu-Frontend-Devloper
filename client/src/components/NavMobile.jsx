import React from 'react'
import logo from '../assets/logo-2.png'
import { RxCross2 } from 'react-icons/rx'

const NavMobile = ({ isActive, toggleNav }) => {
    return (
        <nav className={`fixed top-0 left-0 mobile-nav ${isActive ? "active" : ""}`} >
            <div className={`inner-mobile-nav py-10 px-6  ${isActive ? "active" : ""}`}>
                <div className="logo flex justify-between align-middle mb-10">
                    <img src={logo} alt="" />
                    <RxCross2 className='text-3xl font-semibold text-white cursor-pointer' onClick={toggleNav} />
                </div>
                <ul className='mobile-nav-links  ' >
                <li>
                    <a href="#" className='link' >Home</a>
                </li>
                <li>
                    <a href="#" className='link' >About</a>
                </li>
                <li>
                    <a href="#" className='link' >Contact</a>
                </li>
                <li>
                    <a href="#" className='link' >testimonial</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default NavMobile