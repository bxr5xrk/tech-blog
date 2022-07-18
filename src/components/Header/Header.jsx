import React from "react";
import { Link } from "react-router-dom";

const Header = ({ ...props }) => {
    return (
        <div {...props}>
            <Link to="/">
                <h3>TECH BLOG</h3>
            </Link>

            <h3>login</h3>
        </div>
    );
};

export default Header;
