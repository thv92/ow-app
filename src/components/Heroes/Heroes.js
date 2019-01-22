import React from 'react';
import HeroSelection from './HeroSelection/HeroSelection';
import HeroProfile from './HeroProfile/HeroProfile';
import MockData from '../../sampleData/sample';
import { Switch, Route, NavLink } from 'react-router-dom';
import styles from './Heroes.css';


class Heroes extends React.Component {
    
    constructor(props) {
        super(props);
        this.onCardClicked = this.onCardClicked.bind(this);
        this.state = {
            cards: this.getCardData(MockData),
            routes: this.createRoutes(MockData),
            showSelection: true
        };
    }

    onCardClicked(heroName) {
        console.log(`HERO CLICKED: ${heroName}`)
        this.setState((state, props) => {
            return {
                showSelection: !state.showSelection
            };
        });
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
                link: `${this.props.match.url}/${heroInfo.bio.alias}`.toLowerCase()
            }
        });
    }

    createRoutes(data) {
        return data.map((heroInfo) => {
            return (
                <Route key={heroInfo.bio.alias} path={`${this.props.match.url}/${heroInfo.bio.alias}`.toLowerCase()} render={(props) => <HeroProfile {...props} heroData={heroInfo}/>} />
            );
        });
    }
    
    render() {
        console.log(this.state.routes);
        const width = this.state.showSelection ? { width: '60em'} : { width: '90%'};

        return (
            <main style={width}>
                {this.state.showSelection ? 
                    (
                    <div className="heroSelection">
                        <div className="bar" >Search Bar Placement</div>
                        <HeroSelection cards={this.state.cards} cardClicked={this.onCardClicked}/>
                    </div>
                    ) : null}
                {!this.state.showSelection ?
                (
                <div>
                    <div className={styles.navBack}>
                    <NavLink className={styles.navLink} to={this.props.match.url} onClick={this.onCardClicked}>Hero Selection</NavLink>
                    </div>

                    <div>
                        <Switch>
                            {this.state.routes}
                        </Switch>
                    </div>
                 </div>
                ) : null}
            </main>
        );
    }

}

export default Heroes;