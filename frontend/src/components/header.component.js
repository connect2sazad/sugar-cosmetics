import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Search from "./search.component";

const Header = () => {

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
        </>
    );
}



export default Header;