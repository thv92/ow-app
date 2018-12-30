import React from 'react';
import styles from './Image.css';

const image = (props) => {
    let shape = null;
    if (props.circle) {
        shape = styles.cropCircle;
    }
    return (
        <img className={shape} src={props.src} 
             width={props.width + "px"} height={props.height + "px"}/>
    );
}


export default image;