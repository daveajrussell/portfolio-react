import React from 'react';
import {
    NavLink
} from 'react-router-dom'

const Nav = () => (
    <nav>
        <div className="row">
            <div className="col-12">
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" to="/acknowledgements">Acknowledgements</NavLink>
                <NavLink exact activeClassName="active" to="/projects">Projects</NavLink>
            </div>
        </div>
    </nav>
);

export default Nav;