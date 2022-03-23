import React from 'react';

import { TEXT } from '../utils/config'

import '../styles/homepage-content.css';

export const HomepageContent = ({content}) => {

    return (
        <div className="homepage-body">
            <div className="homepage-content-title">
                <h1>I am looking for a {TEXT.HOMEPAGE[content].TITLE}.</h1>
                <p>{TEXT.HOMEPAGE[content].HERO}</p>
            </div>
            <div className="homepage-content-body">
                <h2>Test</h2>
            </div>
        </div>
    )
}