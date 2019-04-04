import React from "react";

const Tech = (props) => {
    return (

        <div className="container tech">
        <div className="card">
            <div className="card-content">
            <div className="row valign-wrapper">
                <img className="col s2 m1" src="/images/css3.png" alt="CSS3" />
                <img className="col s2 m1" src="/images/html5.png" alt="HTML5" />
                <img className="col s2 m1" src="/images/js.jpg" alt="Javascript" />
                <img className="col s2 m1" src="/images/nodejs.jpg" alt="NodeJS" />
            {/* </div>
            <div className="row valign-wrapper"> */}
                <img className="col s3 m1 hide-on-small-only" src="/images/react.png" alt="React" />
                <img className="col s3 m1 hide-on-small-only" src="/images/mongodb.png" alt="MongoDB" />
                <img className="col s3 m1 hide-on-small-only" src="/images/mysql.png" alt="MySQL" />
                <img className="col s3 m1 hide-on-small-only" src="/images/firebase.png" alt="FireBase" />
            </div>
            <div className="row valign-wrapper">
                <img className="col s3 m1 hide-on-med-and-up" src="/images/react.png" alt="React" />
                <img className="col s3 m1 hide-on-med-and-up" src="/images/mongodb.png" alt="MongoDB" />
                <img className="col s3 m1 hide-on-med-and-up" src="/images/mysql.png" alt="MySQL" />
                <img className="col s3 m1 hide-on-med-and-up" src="/images/firebase.png" alt="FireBase" />
            </div>
            
            </div>
        </div>
        </div>
    )
}

export default Tech; 