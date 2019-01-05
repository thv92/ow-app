import React from 'react';
import Image from '../../Image/Image';
import NavItems from '../../Navigation/NavItems/NavItems';
import { Switch, Route } from 'react-router-dom';

import styles from './HeroProfile.css';



const tabs = [
    {
        name: 'Overview',
        link: '/overview'
    },
    {
        name: 'Skills',
        link: '/skills'

    },
    {
        name: 'Story',
        link: 'story'

    }
]

class HeroProfile extends React.Component {
    constructor(props) {
        super(props);
        this.propicStyle = {
            height: "95%",
            width: "95%",
            margin: "auto auto"
        };

    }
    

    render() {
        console.log(this.props);
        const bio = this.props.heroData.bio;
        return (
            <div className={styles.container}>
                <div className={styles.left} ref={this.leftBar}>
                    <div className={styles.alias}>{bio.alias}</div>
                    <div className={styles.propic}>
                        <Image src={bio.profile.link} style={this.propicStyle} />
                    </div>
                    <div className={styles.bio}>
                        <span className={styles.title}>Name</span> <span className={styles.value}>{bio.name}</span><br/>
                        <span className={styles.title}>Age</span> <span className={styles.value}>{bio.age}</span><br/>
                        <span className={styles.title}>Location</span> <span className={styles.value}>{bio.location}</span><br/>
                        <span className={styles.title}>Occupation</span> <span className={styles.value}>{bio.occupation}</span><br/>
                        <span className={styles.title}>Role</span> <span className={styles.value}>{bio.role}</span><br/>
                    </div>
                </div>
                <div className={styles.right}>

                    <div className={styles.navArea}><NavItems tabs={tabs}/></div>
                    <div className={styles.resultArea}>
                        <Switch>
                        
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }


}


export default HeroProfile;