import React from 'react';
import styles from './HeroCard.css';
import Image from '../../../Image/Image';
import support from '../../../../assets/supportIcon.png';


const heroCard = (props) => {
    const bio = props.bio;
    let icon = null;
    if (bio.role) {
        const role = bio.role.toLowerCase();
        switch(role) {
            case 'support':
                icon = support;
                break;
            case 'damage':
                icon = damage;
                break;
            case 'tank':
                icon = tank;
                break;
        }
    }



    return (
        <div className={styles.outerCard}>
            <div className={styles.innerCard}>
                <div className={styles.avatarSection}>
                    <div className={styles.avatar}><Image {...props.img}/></div>
                    <div className={styles.alias}>{bio.alias}</div>
                </div>
                <div className={styles.bioSection}>
                    <span className={styles.title}>Name</span>: <span className={styles.value}>{bio.name}</span><br/>
                    <span className={styles.title}>Age</span>: <span className={styles.value}>{bio.age}</span><br/>
                    <span className={styles.title}>Location</span>: <span className={styles.value}>{bio.location}</span><br/>
                    <span className={styles.title}>Nationality</span>: <span className={styles.value}>{bio.nationality}</span><br/>
                    <span className={styles.title}>Occupation</span>: <span className={styles.value}>{bio.occupation}</span>
                </div>
                <img className={styles.icon} src={icon} />
            </div>
        </div>

    );
}

export default heroCard;