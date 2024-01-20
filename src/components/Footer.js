import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.css'

const Footer = () =>{
    const [texts, setTexts] = useState({});

    useEffect(() => {
        import(`../languages/${localStorage.getItem('selectedLanguage')}.json`)
            .then((data) => setTexts(data.footer))
            .catch((error) => console.error(`Error loading language data: ${error}`));
    }, []);

    return(
        <div className="footer">
            <div className="footer-content">
                <div className="socials-content">
                    <div className="social-media">
                        <a href="https://www.facebook.com/profile.php?id=61552927892681" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /> </a>
                        <a href="https://www.instagram.com/mhdevelopment.tunis/?hl=fr" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href="https://www.tiktok.com/@mh.developmenttunisia" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTiktok} /> </a>
                    </div>
                    <div className="social-contact">
                        <div> <FontAwesomeIcon icon={faEnvelope} /> <span> {texts.contact} </span></div>
                        <div><FontAwesomeIcon icon={faWhatsapp} /> <span> {texts.number} </span></div>
                    </div>
                </div>
                <div className="copyrights">
                    <span style={{color:'var(--B1)'}}>{texts.copyrights}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;