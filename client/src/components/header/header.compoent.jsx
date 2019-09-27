import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../form/form.component';

import './header.styles.scss';

const Header = (props) => {
    const [opneNav, setOpenNav] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [showName, setShowName] = useState('');

    if(opneNav) {
        document.querySelector('.hamburger').classList.add('nav-open');
        document.querySelector('.global-nav').classList.add('nav-open');
    } else if(document.querySelector('.hamburger')) {
        document.querySelector('.hamburger').classList.remove('nav-open');
        document.querySelector('.global-nav').classList.remove('nav-open');
    }
    
    const openPopup = () => {
        if(popUp) {
            return <Form onCancel={() => setPopUp(false)} showName={showName} />;
        } 
    }

    const notSignComponent = () => {
        return (
            <>
                <li className='nav-item nav-link' onClick={() => (setShowName('signIn'), setPopUp(true)) }>
                    Sign In
                </li>
                <li className='nav-item nav-link' onClick={() => (setShowName('signUp'), setPopUp(true)) }>
                    Sign Up
                </li>
            </>
        )
    }

    const SignComponent = () => {
        return (
            <>
                <li className='nav-item nav-link' onClick={() => (setShowName('post'), setPopUp(true)) } >Post</li>
            </>
        )
    }
    
    return (
        <>
        <header className='header row'>
            <Link className='col-4' to='/'>FIND</Link>
            <nav role='navigation' className='navbar navbar-expand-sm justify-content-end container global-nav col-8'>
                <ul id='menu' className='navbar-nav global-nav__list'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    
                    {
                        props.currentUser ?  SignComponent() : notSignComponent()
                    }
                </ul>
            </nav>
            <div className='hamburger' onClick={() => setOpenNav(!opneNav)} >
                <span className='hamburger__line hamburger__line--1'></span>
                <span className='hamburger__line hamburger__line--2'></span>
                <span className='hamburger__line hamburger__line--3'></span>
            </div>
            <div className='black-bg'></div>
        </header>
        {openPopup()}
        </>
)};

export default Header;