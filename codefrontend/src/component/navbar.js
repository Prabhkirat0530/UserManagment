import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <>
            <nav className="navbar rounded-0 text-start" style={{ backgroundColor: "lightgrey" }}>
                <div class="container">
                    <a class="nav-link fs-1 text-decoration-none text-black" ><Link to="/user">ADD USER</Link></a>
                    <a class="nav-link fs-1 text-decoration-none text-dark" ><Link to="/allusers">ALL USERS</Link></a>
                </div>
            </nav>
        </>

    )
}

export default Navbar;