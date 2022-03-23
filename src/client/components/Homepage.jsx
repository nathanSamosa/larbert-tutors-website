import React, { useState, useEffect } from 'react';

import { Hero } from './Hero';
import { HomepageContent } from './HomepageContent';

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
                <div className="homepage-content">
                    {homepageContent && <HomepageContent content={homepageContent} />}
                </div>
            </div>
        </div>
    )
}