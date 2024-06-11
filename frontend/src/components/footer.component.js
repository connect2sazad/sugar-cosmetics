import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
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