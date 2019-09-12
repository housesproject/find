import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    const [opneNav, setOpenNav] = useState(false);
    if(opneNav) {
        document.querySelector('.hamburger').classList.add('nav-open');
        document.querySelector('.global-nav').classList.add('nav-open');
    } else if(document.querySelector('.hamburger')) {
        document.querySelector('.hamburger').classList.remove('nav-open');
        document.querySelector('.global-nav').classList.remove('nav-open');
    }
    const handleClick = () => {
        if(opneNav) {
            setOpenNav(false);
        } else {
            setOpenNav(true);
        }
    }
    return (
        <header className='header row'>
            <Link className='col-4' to='/'>FIND</Link>
            <nav role='navigation' className='navbar navbar-expand-sm justify-content-end container global-nav col-8'>
                <ul id='menu' className='navbar-nav global-nav__list'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        Post
                    </li>
                    <li className='nav-item nav-link'>
                        Sign In
                    </li>
                    <li className='nav-item nav-link'>
                        Sign Up
                    </li>
                </ul>
            </nav>
            <div className='hamburger' onClick={handleClick} >
                <span className='hamburger__line hamburger__line--1'></span>
                <span className='hamburger__line hamburger__line--2'></span>
                <span className='hamburger__line hamburger__line--3'></span>
            </div>
            <div className='black-bg'></div>
    </header>
)};

export default Header;