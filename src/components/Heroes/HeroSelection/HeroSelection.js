import React from 'react';
import HeroCard from './HeroCard/HeroCard';
import styles from './HeroSelection.css';
import { Link } from 'react-router-dom';

export default (props) => {
    const cards = props.cards.map((card) => {
        return (
            <li key={card.bio.name.toLowerCase()} className={styles.heroItem}><Link to={card.link}><HeroCard bio={card.bio} icon={card.icon} cardClicked={props.cardClicked} /></Link></li>
        );
    })

    return (
        <div className={styles.heroListContainer}>
            <ul className={styles.heroList}>
                {cards}
            </ul>
        </div>
    );
};