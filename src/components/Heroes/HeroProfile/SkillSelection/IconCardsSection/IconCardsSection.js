import React from 'react';
import IconCard from '../IconCard/IconCard';
import styles from './IconCardsSection.css';
import { uniqueId } from 'lodash';

export default (props) => {
    //props: title skills
    let iconCards = props.skills.map((skill) => {
        return <IconCard key={uniqueId()} name={skill.name} icon={skill.icon} keybind={skill.keybind} />
    });

    return (
        <div className={styles.section} > 
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.iconCards}>{iconCards}</div>
        </div>
    );
};