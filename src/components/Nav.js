import React from "react";

const Nav = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li><a href="#portfolio">Home</a></li>
                    <li><a href="badges.html">Portfolio</a></li>
                    <li><a href="collapsible.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;