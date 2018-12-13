import React from 'react';
import styles from './NavItem.css';

export default (props) => { 
    let styleA = null;

    if (props.selected) {
        styleA = { 'color' : 'white'};
    }


    return (
        <li className={styles.NavItem} key={props.name.toLowerCase()}>
            <a style={styleA} href={props.link}>{props.name}</a>
        </li>
    );
};