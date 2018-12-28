import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar.js';
import AppBar from './components/AppBar/AppBar.js';
import styles from './reset.css';

export default function(props) {
    return (
        <div>
            <BrowserRouter>
                <AppBar />
            </BrowserRouter>
        </div>
    );
};