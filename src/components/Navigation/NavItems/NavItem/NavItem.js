import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.css';

export default (props) => { 
    let styleA = null;

    if (props.selected) {
        styleA = { 'color' : 'white'};
    }

  /* <Link to={props.link} />
            <a style={styleA} href="#"> <Link to={props.link}/> {props.name}</a> */
    return (
        <li className={styles.NavItem} key={props.name.toLowerCase()}>
            <NavLink to={props.link} activeClassName={styles.activeTab}>{props.name}</NavLink>
        </li>
    );
};