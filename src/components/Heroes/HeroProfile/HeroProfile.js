import React from 'react';
import Image from '../../Image/Image';
import Overview from './Overview/Overview';
import SkillSelection from './SkillSelection/SkillSelection';
import styles from './HeroProfile.css';




class HeroProfile extends React.Component {
    constructor(props) {
        super(props);
        this.onNavClick = this.onNavClick.bind(this);
        this.createTabs = this.createTabs.bind(this);
        this.propicStyle = {
            height: "95%",
            width: "95%",
            margin: "auto auto"
        };

        this.tabs = ['Overview', 'Skills', 'Story'];
        this.state = {
            tabs: this.createTabs(this.tabs),
            activeTab: 1
        }

    }

    onNavClick(index) {
        if (index != this.state.activeTab) {
            this.setState((state, props) => {
                return {
                    tabs: this.createTabs(this.tabs, index),
                    activeTab: index
                }
            });
        }
    }
    createTabs(tabs, active = 1) {
        return tabs.map((tab, index) => {
            let style = null;
            if (index == active) {
                style = [styles.navItem, styles.activeTab].join(' ');
            } else {
                style = styles.navItem;
            }
            return (
               <li key={tab} className={style} onClick={() => this.onNavClick(index)}>{tab}</li>
            );
        });
    }

    render() {
        const bio = this.props.heroData.bio;
        let navContent = null;

        switch(this.state.activeTab) {
            case 0:
                navContent = <Overview />;
                break;
            case 1:
                // navContent = <SkillDetails skill={this.props.heroData.skills[0]}/>;
                navContent = <SkillSelection skills={this.props.heroData.skills} />;
                break;
        }

        return (
            <div className={styles.container}>
                <div className={styles.left} ref={this.leftBar}>
                    <div className={styles.alias}>{bio.alias}</div>
                    <div className={styles.propic}>
                        <Image src={bio.profile} style={this.propicStyle} />
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
                    <ul className={styles.nav}>
                        {this.state.tabs}
                    </ul>
                    <div className={styles.navContent}>
                        {navContent}
                    </div>
                </div>
            </div>
        );
    }

}


export default HeroProfile;