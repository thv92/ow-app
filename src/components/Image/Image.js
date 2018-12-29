import React from 'react';
import styles from './Image.css';

const image = (props) => {
    let clip = null;
    if (props.circle) {
        clip = styles.clipCircle;
    }
    return (
        <img className={clip} src={props.src} 
             width={props.width + "px"} height={props.height + "px"}/>
    );
}


export default image;