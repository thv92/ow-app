import React from 'react';
import HeroCard from './HeroCard/HeroCard';
import styles from './HeroSelection.css';

const bio = {
    alias: "Mercy",
    name: "Angela Ziegler",
    age: "37",
    location: "Zürich, Switzerland (formerly)",
    nationality: "Swiss",
    occupation: "Field Medic",
    role: "support"
};

const img = {
    src: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/0/03/Icon-Mercy.png/150px-Icon-Mercy.png",
    height: "65",
    width: "65",
    circle: true
};

export default () => {
    return (
        <div className={styles.heroListContainer}>
            <ul className={styles.heroList}>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>
                <li className={styles.heroItem}><HeroCard bio={bio} img={img}/></li>

            </ul>
        </div>
    );
};