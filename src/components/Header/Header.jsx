import React from "react";
import { Link } from "react-router-dom";
import PostSearch from "../PostSearch/PostSearch";

const Header = ({ ...props }) => {
    return (
        <div {...props}>
            <Link to="/">
                <h3>TECH BLOG</h3>
            </Link>
            <div className="header-two-section">
                <PostSearch />
                <h3 className="login">login</h3>
            </div>
        </div>
    );
};

export default Header;
