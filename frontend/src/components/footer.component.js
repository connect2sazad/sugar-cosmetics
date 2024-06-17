import React from "react";
import { Link } from "react-router-dom";
import { applestore, footer_logo, playstore } from "../assets/images";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPinterest, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <div className="container-fluid bg-dark pb-4">
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
                    <div className="col-12 text-white px-5">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <h4 className="title">GET IN TOUCH</h4>
                            </div>
                            <div className="col-3" style={{fontSize: "12px"}}>
                                <span className="fs-6">Call us at</span>
                                <div className="text-muted mt-2 fw-semibold fs-6"><Link to="tel:1800-209-9933">1800-209-9933</Link></div>
                                <div className="text-white">Monday to Friday: 09:00 AM - 09:00 PM</div>
                                <div className="text-white">Saturday: 09:00 AM - 07:00 PM</div>
                            </div>
                            <div className="col-3" style={{fontSize: "12px"}}>
                                <span className="fs-6">Support & Press</span>
                                <div className="text-muted mt-2 fw-semibold fs-6"><Link to="mailto:hello@sugarcosmetics.com">hello@sugarcosmetics.com</Link></div>
                                <div className="text-muted mt-2 fw-semibold fs-6"><Link to="mailto:pr@sugarcosmetics.com">pr@sugarcosmetics.com</Link></div>
                            </div>
                            <div className="col-3" style={{fontSize: "12px"}}>
                                <span className="fs-6">Careers</span>
                                <div className="text-muted mt-2 fw-semibold fs-6"><Link to="#">We're hiring!</Link></div>
                            </div>
                            <div className="col-3" style={{fontSize: "12px"}}>
                                <span className="fs-6">Influencer Collab</span>
                                <div className="text-muted mt-2 fw-semibold fs-6"><Link to="#">Join Us</Link></div>
                            </div>
                        </div>
                        
                        <hr className="border-white" />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-3 d-flex justify-content-center flex-column py-2 text-white">
                        <div className="text-uppercase fw-bold">GET THE NEW SUGAR APP TODAY! </div>
                        <div className="mt-1" style={{fontSize:"12px"}}>Tap into a better shopping experience.</div>
                    </div>
                    <div className="col-2 d-flex justify-content-center py-2">
                        <img src={playstore} alt="Playstore" style={{height:"50px"}}/>
                    </div>
                    <div className="col-2 d-flex justify-content-center py-2">
                        <img src={applestore} alt="Applestore" style={{height:"50px"}}/>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

            <div className="d-flex justify-content-between p-3 bg-black text-white border-top border-white">
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