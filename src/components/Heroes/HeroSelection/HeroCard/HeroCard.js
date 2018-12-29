import React from 'react';
import styles from './HeroCard.css';
import Image from '../../../Image/Image';



const heroCard = (props) => {
    const bio = props.bio;
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
            </div>
        </div>

    );
}

export default heroCard;