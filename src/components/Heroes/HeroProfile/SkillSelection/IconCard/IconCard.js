import React from 'react';
import LeftClick from '../../../../../assets/images/icons/LeftClick.svg';
import RightClick from '../../../../../assets/images/icons/RightClick.svg';
import Image from '../../../../Image/Image';
import styles from './IconCard.css';

export default (props) => {
    //props: name icon keybind
    let keybindIcon = null;
    let mouseStyle = {
        width: "1.5em",
        height: "1.5em",
        marginRight: ".4em"
    };
    if (props.keybind) {
        switch(props.keybind) {
            case 'left':
                keybindIcon = <LeftClick style={mouseStyle} />;
                break;
            case 'right':
                keybindIcon = <RightClick style={mouseStyle} />;
                break;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={props.icon} style={{width: "100%", height: "auto"}} />
            </div>
            <div className={styles.textContainer}>
                {keybindIcon}
                <h4 className={styles.name}>{props.name}</h4>
            </div>
        </div>
    );
};