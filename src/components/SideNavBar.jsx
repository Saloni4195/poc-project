import './SideNavBar.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Addition from './Addition.jsx';
import Continuation from './Continuation.jsx';
import Termination from './Termination.jsx';

export default function SideNavBar() {
    return (
        <div className="sidenav">
            <Link to={"/"} className="nav-link">
                Home
            </Link>

            <Link to={"/Addition"} className="nav-link">
                Addition
            </Link>

            <Link to={"/Continuation"} className="nav-link">
                Continuation
            </Link>

            <Link to={"/Termination"} className="nav-link">
                Termination
            </Link>

            <Routes>
                <Route exact path="/" element={<Home/>} /> 
                <Route path="/add-course" element={<Addition />} />
                <Route path="/view-courses" element={<Continuation />} />
                <Route path="/view-courses" element={<Termination />} />
            </Routes>

        </div>
    );
}