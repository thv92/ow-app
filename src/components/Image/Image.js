import React from 'react';
import styles from './Image.css';

const image = (props) => {
    let shape = null;
    if (props.circle) {
        shape = styles.cropCircle;
    }
    return (
        <img className={shape} src={props.src} 
            style={props.style}/>
    );
}


export default image;