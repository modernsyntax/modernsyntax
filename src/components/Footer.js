import React from "react";
import Contact from "./Contact";

const today = new Date()

const Footer = (props) => {
    return (
        <footer>
            {/* <p> */}
                ModernSyntax&#169; {today.getFullYear()}
                <Contact />
            {/* </p> */}
        </footer>
    )
}

export default Footer;