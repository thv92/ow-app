import React from 'react';
import NavItems from './NavItems/NavItems.js';

const navbar = (props) => {
    return (
        <div>
            <NavItems tabs={props.tabs} selected={ props.selected || 'heroes' } />
        </div>
    );
}

export default navbar;