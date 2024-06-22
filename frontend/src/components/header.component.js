import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { ImExit } from "react-icons/im";

import { HeaderLogo } from "../assets/images";
import { menus } from "./menus.component";

const Header = ({ selected }) => {

    const [user, setUser] = useState('');
    const navigate = useNavigate('');
    const [token, setToken] = useState('');

    useEffect(() => {
        
        setToken(localStorage.getItem('token'));
        setUser(atob(localStorage.getItem('auth')));

    }, [user, navigate, token]);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
        setToken('');
        setUser('');
    }

    return (
        <>
            <div className="header-fixed">
                <div className="bg-dark row mx-0 py-3 text-white">
                    <div className="col-4">
                        <Link to="/"><img src={HeaderLogo} alt="Logo" /></Link>
                    </div>
                    <div className="col-4 text-center">
                        <input type="search" placeholder="Search for a Product" className="form-control" name="search" id="search" />
                    </div>
                    <div className="col-4 text-right d-flex justify-content-end" >
                        {
                            user ? (
                                <div className="d-flex justify-content-center" style={{fontSize: "20px"}}>
                                    <div className="text-white text-decoration-none d-flex justify-content-end align-items-center cursor-pointer">
                                        <FaHeart style={{ marginRight: "20px" }} />
                                    </div>
                                    <div className="text-white text-decoration-none d-flex justify-content-end align-items-center cursor-pointer">
                                        <FaShoppingCart style={{ marginRight: "20px" }} />
                                    </div>
                                    <div className="text-white text-decoration-none d-flex justify-content-end align-items-center cursor-pointer">
                                        <FaUser style={{ marginRight: "20px" }} />
                                    </div>
                                    <div className="text-white text-decoration-none d-flex justify-content-end align-items-center cursor-pointer" onClick={logout}>
                                        <ImExit style={{ marginRight: "20px" }} />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Link className="text-white text-decoration-none d-flex justify-content-end align-items-center" to="/login">
                                        <FaUser style={{ marginRight: "10px" }} /> Login
                                    </Link>
                                </>
                            )
                        }

                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 py-0 text-uppercase border-bottom border-secondary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav p-0 m-0">
                            {menus.map((menu) => (
                                <li className="nav-item py-1 px-1" key={menu.id}>
                                    <Link to={menu.link} className={`nav-link ${menu.id === selected ? 'active' : 'link-dark'}`} aria-current="page">
                                        {menu.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="body-padding">
                {/* Rest of the page content */}
            </div>
        </>
    );
}

export default Header;
