import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';
const Header = () => {
    const { user, logout } = useAuth();
    const history = useHistory();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand px-3"><Link to="/">Fotafot Courier Express</Link></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/home"> <FontAwesomeIcon icon={faHome} />  Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about">About Us</Link>
                        </li>

                        {!user?.email &&
                            <li className="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                        }
                        <li className="nav-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addService">Add Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myOrders">My Order</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/manageOrder">Manage Order</Link>
                        </li>
                        {user?.email &&
                            <li className="nav-item">
                                <span className="text-primary">{user.displayName}</span>
                            </li>
                        }
                        {user?.email &&
                            <li className="nav-item">
                                <button onClick={() => logout(history)} className="btn-small btn-primary" style={{ marginLeft: "10px" }}>Log Out</button>
                            </li>
                        }
                    </ul>
                </div>
            </nav>







        </div>
    );
};

export default Header;