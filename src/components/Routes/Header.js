import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <h1>Routing Test</h1>
            <ul className='main-navbar'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/sub'>Sub Page</Link>
                </li>
                <li>
                    <Link to='/error'>Error</Link>
                </li>
            </ul>
        </>
    );
};

export default Header;
