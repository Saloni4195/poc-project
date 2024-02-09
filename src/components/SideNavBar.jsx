// SideNavBar.jsx

import React from 'react';
import './SideNavBar.css';
import { NavLink } from "react-router-dom";

export default function SideNavBar() {
    return (
        <div className="side-nav">
            <NavLink to="/" className="nav-link" activeclassname="active">
                Home
            </NavLink>
            <NavLink to="/add-details" className="nav-link" activeclassname="active">
                Add Details
            </NavLink>
            <NavLink to="/edit-details" className="nav-link" activeclassname="active">
                Update Details
            </NavLink>
            <NavLink to="/add-query" className="nav-link" activeclassname="active">
                Add Query
            </NavLink>
        </div>
    );
}
