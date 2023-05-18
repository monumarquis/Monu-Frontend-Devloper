import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import NavMobile from './NavMobile';
const Nav = () => {
    const [isActive, setActive] = useState(false)
    const toggleNav = () => setActive((prev) => (!prev))
    return (
        <nav className='p-4 pb-8 flex flex-row justify-evenly align-middle ' >
            <div className="logo flex flex-row justify-evenly align-middle ">
                <img src={logo} alt="" />
            </div>
            <ul className='nav-links hidden lg:flex' >
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
            <div className="actions-btn flex justify-evenly align-middle ">
                <a href='#' className='thm-btn' >Contact</a>
                <RxHamburgerMenu onClick={toggleNav} className='text-4xl block lg:hidden ml-4 sm:ml-10 lg:ml-4 self-center' />
            </div>
            <NavMobile isActive={isActive} toggleNav={toggleNav} />
        </nav>
    )
}

export default Nav