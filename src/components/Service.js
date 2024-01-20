import React from "react";

import './service.css'

const Service = ({service, image}) =>{
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
    };
    return(
        <div className="service-card" style={backgroundStyle}>
            <h1> {service} </h1>
        </div>
    );
};

export default Service;