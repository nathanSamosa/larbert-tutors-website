import React from 'react';

import '../styles/hero.css'

export const Hero = ({handleClick, homepageActive}) => {
    return (
        <div className="hero" data={ homepageActive ? "collapsed" : "expanded"}>
            <div className="hero-background"></div>
            <div className="hero-content reveal">
                <h2>I am looking for a...</h2>
                <div className="button-container">
                    <button className="hero-button-tutor" onClick={() => handleClick('TUTOR')}>Tutor</button>
                    <button className="hero-button-student" onClick={() => handleClick('STUDENT')}>Student</button>
                </div>  
            </div>
        </div>
    )
}