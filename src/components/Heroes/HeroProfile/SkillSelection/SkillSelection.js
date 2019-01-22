import React from 'react';
import IconCardsSection from './IconCardsSection/IconCardsSection';

import styles from './SkillSelection.css';


class SkillSelection extends React.Component {

    constructor(props) {
        super(props);
        let { weapon, abilities, ultimates, passives } = this.organizeSkills();
        this.state = {
            weapon,
            abilities,
            ultimates,
            passives
        };
    }

    organizeSkills() {
        let m = {};
        const abiPat = /(?<!(passive|ultimate)\s)ability/gi;
        const ultPat = /ultimate/gi;
        const passPat = /passive/gi;
        const passKey = 'passives';
        const ultKey = 'ultimates';
        const abiKey = 'abilities';
        const wepKey = 'weapon';

        this.props.skills.forEach((skill) => {
            let skillType = skill.type;
            if (skillType.match(passPat)) {
                !m[passKey] ? 
                m[passKey] = [skill] : m[passKey].push(skill);
            } else if (skillType.match(ultPat)) {
                !m[ultKey] ? 
                m[ultKey] = [skill] : m[ultKey].push(skill);
            } else if (skillType.match(abiPat)) {
                !m[abiKey] ? 
                m[abiKey] = [skill] : m[abiKey].push(skill);
            } else {
                !m[wepKey] ? 
                m[wepKey] = [skill] : m[wepKey].push(skill);
            }
        });
        return m;
    }

    getWeaponKeyBinding(type) {
        console.log(type);
        if (type.match(/secondary|scope/gi)) {
            return 'right';
        } else {
            return 'left';
        }
    }

    getIconCardData(skills, wep = false) {
        if (skills) {
            return skills.map((skill) => {
                let result = {
                    name: skill.name,
                    icon: skill.icon
                }
                if (wep) {
                    result['keybind'] = this.getWeaponKeyBinding(skill.type);
                    return result;
                }
                return result;
            });
        }
        return null;
    }

    render() {
        //props: skills
        //Method to organize skill list into Passive, Weapon, Ability, Ultimate
        let abilities = this.getIconCardData(this.state.abilities);
        let passives = this.getIconCardData(this.state.passives);
        let ults = this.getIconCardData(this.state.ultimates);
        let wep = this.getIconCardData(this.state.weapon, true);
        return (
            <div className={styles.container}>
                { this.state.passives ? <IconCardsSection title="Passive" skills={passives} /> : null }
                { this.state.weapon ? <IconCardsSection title="Weapon" skills={wep} /> : null }
                { this.state.abilities ? <IconCardsSection title="Ability" skills={abilities} /> : null }
                { this.state.ultimates ? <IconCardsSection title="Ultimate" skills={ults} /> : null }
            </div>
        );


    }

}



export default SkillSelection;