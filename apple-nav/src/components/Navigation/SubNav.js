import React from 'react';
// import { NavLink } from 'react=router-dom';

const SubNav = ({items, display}) => {
    return (
        <nav className={["sub-nav", display].filter(x=>x).join(" ")}>
            SubNav Items
        </nav>
    )
}

export default SubNav;