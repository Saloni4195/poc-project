// SideNavBar.jsx

import React from 'react';
import './SideNavBar.css';
import { NavLink } from "react-router-dom";

export default function SideNavBar() {
    return (
        <div className="side-nav">
            <NavLink to="/" className="nav-link" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/Addition" className="nav-link" activeClassName="active">
                Addition
            </NavLink>
            <NavLink to="/Continuation" className="nav-link" activeClassName="active">
                Continuation
            </NavLink>
            <NavLink to="/Termination" className="nav-link" activeClassName="active">
                Termination
            </NavLink>
        </div>
    );
}
