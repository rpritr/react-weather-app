import React from 'react';
import './Menu.css';
const Menu = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">Github</li>
                <li className="nav__list-item">About</li>
            </ul>
        </nav>
    )
}

export default Menu;