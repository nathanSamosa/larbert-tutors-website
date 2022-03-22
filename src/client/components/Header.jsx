import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../utils/config';

import '../styles/header.css'

export const Header = () => {
    const navigate = useNavigate();
    const [showLinks, setShowLinks] = useState(false)

    const handleClick = page => {
        setShowLinks(!showLinks)
        navigate(ROUTES[page].PATH)
        window.location.reload();
    }

    const handleMenuToggle = () => {
        setShowLinks(!showLinks)
    }

    return (
        <header className="App-header">
            <div className="header-container">
                <h1>Larbert Tutors</h1>
                <button className="hamburger-button" onClick={() => handleMenuToggle()}>Nav</button>
            </div>
            
            <nav>
                <div data={showLinks ? "expanded" : "collapsed"} className="button-container">
                    <button onClick={() => handleClick('HOMEPAGE')}>{ROUTES.HOMEPAGE.CLIENT}</button>
                    <button onClick={() => handleClick('CONTACT')}>{ROUTES.CONTACT.CLIENT}</button>
                </div>
            </nav>
        </header>
    )
}