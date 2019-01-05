import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.css';

export default (props) => { 
    return (
        <li className={styles.NavItem} key={props.name.toLowerCase()} style={props.liStyle}>
            <NavLink to={props.link} activeClassName={styles.activeTab}>{props.name}</NavLink>
        </li>
    );
};