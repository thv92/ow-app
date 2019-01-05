import React from 'react';
import HeroSelection from './HeroSelection/HeroSelection';
import HeroProfile from './HeroProfile/HeroProfile';
import MockData from '../../sampleData/sample';
import { Switch, Route } from 'react-router-dom';
import styles from './Heroes.css';


class Heroes extends React.Component {
    
    constructor(props) {
        super(props);
        this.onCardClicked = this.onCardClicked.bind(this);
    }

    componentWillMount() {
        this.setState((state, props) => {
            return {
                cards: this.getCardData(MockData),
                routes: this.getRoutes(MockData)
            };
        });
    }

    onCardClicked(heroName) {
        console.log(`HERO CLICKED: ${heroName}`)
    }

    getCardData(data) {
        return data.map((heroInfo) => {
            return {
                bio: {
                    alias: heroInfo.bio.alias,
                    name: heroInfo.bio.name,
                    age: heroInfo.bio.age,
                    nationality: heroInfo.bio.nationality,
                    role: heroInfo.bio.role,
                },
                icon: {
                    link: heroInfo.bio.icon,
                    height: "65px",
                    width: "65px",
                    circle: true
                },
                link: `${this.props.match.url}/${heroInfo.bio.alias}`
            }
        });
    }

    getRoutes(data) {
        return data.map((heroInfo) => {
            return (
                <Route key={heroInfo.bio.alias} path={`${this.props.match.url}/${heroInfo.bio.alias}`} render={(props) => <HeroProfile {...props} heroData={heroInfo}/>} />
            );
        });
    }

    
    render() {
        console.log(this.state.routes);
        // <div className={styles.heroProfile}>
        //     <HeroProfile bio={bio} match={this.props.match}/>
        // </div>
        return (
            <main>
                <div className="heroSelection">
                    <div className="bar" >Search Bar Placement</div>
                    <HeroSelection cards={this.state.cards} cardClicked={this.onCardClicked}/>
                </div>
                <div>
                    <Switch>
                        {this.state.routes}
                    </Switch>
                </div>
            </main>
        );
    }

}


export default Heroes;