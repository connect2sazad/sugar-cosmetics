import React from "react";
import { Link } from "react-router-dom";
import { footer_logo } from "../assets/images";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPinterest, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <div className="bg-dark" style={{ height: "100px", width: "100px", padding: "10px", borderRadius: "50%", transform: "translateY(-50%)" }}>
                            <img src={footer_logo} alt="Sugar" />
                        </div>
                    </div>
                    <div className="col-12 text-center text-white">
                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <FaFacebookF />
                        </Link>
                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <FaTumblr />
                        </Link>
                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <FaTwitter />
                        </Link>
                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <FaYoutube />
                        </Link>
                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <FaInstagram />
                        </Link>
                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <FaEnvelope />
                        </Link>
                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <FaPinterest />
                        </Link>
                    </div>
                    <div className="col-12 text-center text-uppercase">
                        <hr className="border-white" />
                        <Link to="#" className="m-3 fw-semibold">
                            Stores
                        </Link>
                        <Link to="#" className="m-3 fw-semibold">
                            Elite
                        </Link>
                        <Link to="#" className="m-3 fw-semibold">
                            Terms & conditions
                        </Link>
                        <Link to="#" className="m-3 fw-semibold">
                            returns
                        </Link>
                        <Link to="#" className="m-3 fw-semibold">
                            faq
                        </Link>
                        <Link to="#" className="m-3 fw-semibold">
                            about us
                        </Link>
                        <hr className="border-white" /> 
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between p-3 bg-dark text-white">
                <div>
                    &copy; {new Date().getUTCFullYear()} connect2sazad. All Rights Reserved.
                </div>
                <div>
                    Produced by <Link to="https://www.connect2sazad.me" target="_blank" rel="noopener noreferrer" className="text-white">connect2sazad</Link>
                </div>
            </div>
        </>
    );
}

export default Footer;