import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Heroes from '../Heroes/Heroes';
import Maps from '../Maps/Maps';
import Modes from '../Modes/Modes';
import NavItems from '../Navigation/NavItems/NavItems';
import styles from './AppBar.css';




const tabs = [{name: 'Heroes', link: '/heroes'}, {name: 'Maps', link: '/maps'}, {name: 'Modes', link: '/modes'}];

const appbar = (props) => {
    return (
        <React.Fragment>
            <header>
                <div className={styles.NavBarDiv}>
                    <div></div>
                    <NavItems tabs={ tabs }/>
                </div>
                <Switch>
                    <Route path="/heroes" component={Heroes} />
                    <Route path="/maps" component={Maps} />
                    <Route path="/Modes" component={Modes} />
                </Switch>
            </header>
        </React.Fragment>
    );
};




export default appbar;