import React from 'react';
import HeroSelection from './HeroSelection/HeroSelection';
import styles from './Heroes.css';

const Heroes = () => {
    return (
        <main>
            <div className="container">
                <div className="bar" >Search Bar Placement</div>
                <HeroSelection />
            </div>
        </main>
    );
}

export default Heroes;