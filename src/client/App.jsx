import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { Homepage } from './components/Homepage';

import './App.css';
import './styles/reveal.css'

export const App = () => {

    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal, .reveal-left');
        for (var i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
          } else {
            reveals[i].classList.remove('active');
          }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", revealElements);
        window.addEventListener('resize', revealElements);
        revealElements();
    })

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Homepage />} />
            </Routes>
        </div>
    );
}
