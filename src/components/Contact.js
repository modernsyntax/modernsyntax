import React from "react";
import media from "../media";
import Chip from "./Chip";

const Contact = (props) => {
    return (
        <div className="container contact">
            <div className="row">
                {media.map(media => {
                    return <Chip name={media.name} image={`/images/${media.image}`} link={media.link} key={media.name} />
                })}
            </div>
        </div>
    )
}

export default Contact;