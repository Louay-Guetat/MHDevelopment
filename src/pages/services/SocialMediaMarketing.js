import React, {useEffect, useState} from "react";

import './services.css'

const SocialMediaMarketing = () =>{
    const [texts, setTexts] = useState({});

    useEffect(() => {
        import(`../../languages/${localStorage.getItem('selectedLanguage')}.json`)
            .then((data) => setTexts(data.social_media))
            .catch((error) => console.error(`Error loading language data: ${error}`));
    }, []);

    return(
        <div className="service-container">
            <div className="image-container">
                <img src="./images/services/social_media/social_media1.jpg" alt="Social Media Marketing banner" />
                <h1>{texts.name}</h1>
            </div>
            <div className="service">
                <div className="definition">
                    <h1> {texts.question} </h1>
                    <span> {texts.definition} </span>
                </div>
                <h1 id="service"> {texts.service} </h1>
                <div className="service-style">
                    <div className="description-container">
                        <span>{texts.description1}</span>
                    </div>
                    <div className="service-image-container">
                        <img src="./images/services/socialmedia.jpg" alt="anything" />
                    </div>
                </div>

                <div className="service-style">
                    <div className="service-image-container">
                        <img src="./images/services/social_media/social_media2.jpg" alt="anything" />
                    </div>
                    <div className="description-container">
                        <span>{texts.description1}</span>
                    </div>
                </div>

                <div id="lastChild" className="service-style">
                    <div className="description-container">
                        <span>{texts.description3}</span>
                    </div>
                    <div className="service-image-container">
                        <img src="./images/services/social_media/social_media3.jpg" alt="anything" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SocialMediaMarketing;