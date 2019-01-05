import React from 'react';
import NavItems from './NavItems/NavItems.js';

const navbar = (props) => {
    return (
        <div>
            <NavItems tabs={props.tabs} />
        </div>
    );
}

export default navbar;