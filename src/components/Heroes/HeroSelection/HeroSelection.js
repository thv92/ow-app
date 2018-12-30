import React from 'react';
import HeroCard from './HeroCard/HeroCard';


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
        <div>
            <div>Hero Selection</div>
            <div>
                <h1>Hero Card</h1>
                <ul>

                <HeroCard bio={bio} img={img}/>
                <HeroCard bio={bio} img={img}/>
                <HeroCard bio={bio} img={img}/>
                <HeroCard bio={bio} img={img}/>
                <HeroCard bio={bio} img={img}/>
                <HeroCard bio={bio} img={img}/>
                <HeroCard bio={bio} img={img}/>
                <HeroCard bio={bio} img={img}/>
                </ul>
            </div>
        </div>
    );
};