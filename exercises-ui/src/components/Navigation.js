import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <nav id="hubbar">
                <Link className="navbar" to="/"> Home Page</Link>
                <Link className="navbar" to="/add-exercise"> Add Exercise</Link>
            </nav>
        </>
    )
}

export default Navigation;