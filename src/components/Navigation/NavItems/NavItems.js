import React from 'react';
import NavItem from './NavItem/NavItem.js';
import styles from './NavItems.css';

export default (props) => {
    const navItems = props.tabs.map((tab) => {
        let selected = false;
        if (props.selected.toLowerCase() === tab.toLowerCase()) {
            selected = true;
        }
        return <NavItem key={tab.toLowerCase()} link='#' name={tab} selected={selected} />
    });

    return (
        <ul className={styles.NavItems}>
            {navItems}
        </ul>
    );
};