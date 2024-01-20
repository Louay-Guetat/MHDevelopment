import React, {useEffect, useState} from "react";

import './services.css'

const ConceptionImpression = () =>{
    const [texts, setTexts] = useState({});
    
    useEffect(() => {
        import(`../../languages/${localStorage.getItem('selectedLanguage')}.json`)
            .then((data) => setTexts(data.conception_impression))
            .catch((error) => console.error(`Error loading language data: ${error}`));
    }, []);

    return(
        <div className="service-container">
            <div className="image-container">
                <img src="./images/services/conception.jpg" alt="Conception and impression banner" />
                <h1>{texts.name}</h1>
            </div>
            <div className="service">
                <div className="definition">
                    <h1> {texts.question} </h1>
                    <span> {texts.definition} </span>
                </div>
                <h1 id="service"> {texts.service} </h1>
                <div className="service-style">
                    <div className="service-image-container">
                        <img src="./images/services/conception_impression/conception1.jpg" alt="anything" />
                    </div>
                    <div className="description-container">
                        <span>{texts.description1}</span>
                    </div>
                </div>

                <div className="service-style">
                    <div className="description-container">
                        <span>{texts.description2}</span>
                    </div>
                    <div className="service-image-container">
                        <img src="./images/services/conception_impression/conception2.jpg" alt="anything" />
                    </div>
                </div>

                <div id="lastChild" className="service-style">
                    <div className="service-image-container">
                        <img src="./images/services/conception_impression/conception3.jpg" alt="anything" />
                    </div>
                    <div className="description-container">
                        <span>{texts.description3}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConceptionImpression;