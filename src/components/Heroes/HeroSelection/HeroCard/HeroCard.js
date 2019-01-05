import React from 'react';
import styles from './HeroCard.css';
import Image from '../../../Image/Image';
import damage from '../../../../assets/roles/damageIcon.png';
import support from '../../../../assets/roles/supportIcon.png';
import tank from '../../../../assets/roles/tankIcon.png';



const heroCard = (props) => {
    const bio = props.bio;
    let icon = null;
    let color = null;

    if (bio.role) {
        const role = bio.role.toLowerCase();
        switch(role) {
            case 'support':
                icon = support;
                color = "#B9F6CA";
                break;
            case 'damage':
                icon = damage;
                color = "#FF8A80";
                break;
            case 'tank':
                icon = tank;
                color = "#FFD180";
                break;
        }
    }

    const backgroundColor = {
        backgroundColor: color
    };

    const iconStyle = {
        height: props.icon.height,
        width: props.icon.width
    };

    return (
        <div className={styles.outerCard} style={backgroundColor} onClick={() => props.cardClicked(bio.alias)}>
            <div className={styles.innerCard}>
                <div className={styles.avatarSection}>
                    <div className={styles.avatar}><Image src={props.icon.link} style={iconStyle} circle={props.icon.circle}/></div>
                    <div className={styles.alias}>{bio.alias}</div>
                </div>
                <div className={styles.bioSection}>
                    <span className={styles.title}>Name</span>: <span className={styles.value}>{bio.name}</span><br/>
                    <span className={styles.title}>Age</span>: <span className={styles.value}>{bio.age}</span><br/>
                    <span className={styles.title}>Nationality</span>: <span className={styles.value}>{bio.nationality}</span><br/>
                </div>
                <img className={styles.icon} src={icon} />
            </div>
        </div>
    );
}

export default heroCard;