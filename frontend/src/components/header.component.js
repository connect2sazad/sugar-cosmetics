import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import axios from "axios";

import { HeaderLogo } from "../assets/images";
import { menus } from "./menus.component";

const Header = ({ selected }) => {

    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const verifyAuth = async () => {
            try {

                const response = await axios.get('http://localhost:5555/verify-auth', {
                    headers: {
                        'Authorization': token
                    }
                });

                if (response.status === 200) {
                    setUser(response.data.userid);
                } else {
                    navigate('/login');
                }

            } catch (e) {
                navigate('/login');
            }
        }

        // verifyAuth();
    }, [user, navigate, token]);

    return (
        <>
            <div className="bg-dark row mx-0 py-3 text-white">
                <div className="col-4">
                    <img src={HeaderLogo} alt="Logo" />
                </div>
                <div className="col-4 text-center">
                    <input type="search" placeholder="Search for a Product" className="form-control" name="search" id="search" />
                </div>
                <div className="col-4 text-right d-flex justify-content-end">
                    <Link className="text-white text-decoration-none d-flex justify-content-end align-items-center" to="/login"><FaUser className={{ marginRight: "10px" }} /> Login</Link>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 text-uppercase">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        {
                            menus.map((menu) => (
                                <li className="nav-item" key={menu.id}>
                                    <Link to={menu.link} className={`nav-link ${menu.id === selected ? 'active' : 'link-dark'}`} aria-current="page">
                                        {menu.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}



export default Header;