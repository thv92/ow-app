import React from 'react';
import NavBar from '../Navigation/NavBar.js';
import styles from './AppBar.css';


const tabs = ['Heroes', 'Maps', 'Modes'];

const appbar = (props) => {
    return (
        <header>
            <div className={styles.NavBarDiv}>
                <div></div>
                <NavBar tabs={tabs}/>
            </div>
        </header>
    );
};




export default appbar;