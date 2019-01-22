import React from 'react';
import InfoCard from '../../../InfoCard/InfoCard';
import styles from './SkillDetails.css';
import { uniqueId } from 'lodash';

import IconCard from '../../SkillSelection/IconCard/IconCard';


export default (props) => {
    let sources = props.skill.videos.map((source) => {
        return <source key={uniqueId()} src={source.link} type={source.type} />
    });


    return (
        <div className={styles.container} >
            <IconCard icon={props.skill.icon} keybind="left" name={props.skill.name}/>
            <div className={styles.desc}>
                {props.skill.description}
            </div>
            <div className={styles.containerBody}>
                <div className={styles.stats}>
                    <InfoCard data={props.skill.stats}/>
                </div>
                <div className={styles.videoSection}>
                    <video className={styles.video} autoPlay loop>
                        {sources}
                    </video>
                </div>
            </div>
        </div>
    );



};



