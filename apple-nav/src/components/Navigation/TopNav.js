import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNav = ({links}) => {
    return (
        <nav className="top-nav">
            {links.map((link, index) => (
                <NavLink key={index} activeStyle={{color: 'grey'}} to={`/${link.toLowerCase()}/`}>
                    {link}
                </NavLink>
            ))}
        </nav>
    )
}

export default TopNav;