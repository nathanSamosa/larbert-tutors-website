import React, { useState, useEffect } from 'react';

import { Hero } from './Hero';
import { Tutor } from './Tutor';

import '../styles/homepage.css'

export const Homepage = () => {
    const [homepageActive, setHomepageActive] = useState(false);
    const [homepageContent, sethomepageContent] = useState();

    const handleClick = choice => {
        sethomepageContent(choice)
        setHomepageActive(true)
    }

    useEffect(() => {
        if (!homepageContent) setHomepageActive(false);
    }, [homepageContent])

    return (
        <div className="homepage" data={homepageActive ? "overflow" : null}>
            <div className="homepage-container">
                <Hero handleClick={e => handleClick(e)} homepageActive={homepageActive}/>
                <Tutor />
            </div>
        </div>
    )
}