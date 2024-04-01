import {React, useState, useEffect} from "react";
import './Contact.css'

const Contact = () =>{
    const [texts, setTexts] = useState({});
    useEffect(() => {
        import(`../../languages/${localStorage.getItem('selectedLanguage')}.json`)
            .then((data) => setTexts(data.contact))
            .catch((error) => console.error(`Error loading language data: ${error}`));
    }, []);
    
    return(
        <div className="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.8076200683932!2d10.179438247939867!3d36.70639327316364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd37003f006f2b%3A0xd996378abd3654!2sMh%20Development!5e0!3m2!1sfr!2stn!4v1712002448220!5m2!1sfr!2stn" 
                    className="google-maps"
                    style={{border:'3px solid var(--B2)', borderRadius:'3rem'}}
                    allowFullScreen
                    loading="eager" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="google-maps-position">
            </iframe>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to= mhdevelopment.tunisie@gmail.com" target="_blank" rel="noreferrer"><img src="./images/gmail.png" alt="google gmail"/> {texts.email} </a>

        </div>
    )
}

export default Contact;