import React, { useContext } from 'react';
import Logo from '../../image/logo.png' 
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);


    return (
        <div className="nav-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav>
                            <img src={Logo} style={{width: "150px",height: '50px'}} alt="logo"/>
                            <div className="topNav" style={{float: "right"}}>
                                <Link className="navLink" to="/">Home</Link>
                                <Link className="navLink" to="/">Donation</Link>
                                <Link className="navLink" to="/">Blog</Link>
                                {
                                    loggedInUser.isSignedIn && <Link className="navLink" to="/volunteer">Your Events</Link>
                                }
                                <Link className="navLink" to="/login">Login</Link>
                                <Link className="navLink register" to="/register">Register</Link>
                                <Link className="navLink admin" to="/addEvent">Admin</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;