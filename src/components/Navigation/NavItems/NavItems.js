import React from 'react';
import NavItem from './NavItem/NavItem.js';
import styles from './NavItems.css';

export default (props) => {
    const navItems = props.tabs.map((tab) => {
        return <NavItem key={tab.name.toLowerCase()} link={tab.link} name={tab.name} />
    });

    return (
        <ul className={styles.NavItems} style={props.ulStyle}>
            {navItems}
        </ul>
    );
};