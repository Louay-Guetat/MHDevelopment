import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear, faPhone, faLaptop, faQrcode, faHeart, faAsterisk, faCamera, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import './Navbar.css'

const smoothScrollTo = (id, margin = 10) => {
    const element = document.getElementById(id);
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - margin * 16,
        behavior: 'smooth',
      });
    }
  };

const Navbar = () =>{

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));

    useEffect(()=>{
        if (localStorage.getItem('selectedLanguage') === null){
            localStorage.setItem('selectedLanguage', 'french')
            setSelectedLanguage(localStorage.getItem('selectedLanguage'))
        }
    },[])

    const changeLanguage = (language) => {
      setSelectedLanguage(language);
      localStorage.setItem('selectedLanguage', language);
      window.location.reload()
    };

    const [texts, setTexts] = useState({});

    useEffect(() => {
        import(`../languages/${selectedLanguage}.json`)
          .then((data) => setTexts(data.navbar))
          .catch((error) => console.error(`Error loading language data: ${error}`));
      }, [selectedLanguage]);
      
    const actionSearch = () =>{
        console.log('Coming soon!')
    }

    return(
        <div className="navbar">
            <div className="logo">
                <a href="/">
                    <img src="LOGO-MH.png" alt="logo"/>
                    <span>MH DEVELOPMENT</span>
                </a>
            </div>
            <div className="logo-mobile">
                <div className="main-mobile">
                    <a href="/">
                        <img src="LOGO-MH.png" alt="logo"/>
                        <span>MH DEVELOPMENT</span>
                    </a>

                    <div className="language-container-mobile">
                        <div className="dropdown-language">
                            {selectedLanguage === 'french' ? (
                                <img src="./flags/france.png" alt="french"/>
                            ) : selectedLanguage === 'english' ? (
                                <img src="./flags/english.png" alt="english" />
                            ) : (
                                <img src="./flags/tunisia.png" alt="arabic" />
                            )}
                            <div className="dropdown-language-content">
                            <div
                                className="language-option"
                                onClick={() => changeLanguage('french')}
                            >
                                <img src="./flags/france.png" alt="French" />
                                <span>{texts.fr}</span>
                            </div>
                            <div
                                className="language-option"
                                onClick={() => changeLanguage('english')}
                            >
                                <img src="./flags/english.png" alt="English" />
                                <span>{texts.eng}</span>
                            </div>
                            <div
                                className="language-option"
                                onClick={() => changeLanguage('arabic')}
                            >
                                <img src="./flags/tunisia.png" alt="Arabic" />
                                <span>{texts.ar}</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="searchbar-mobile">
                    <input type="text" />
                    <button onClick={() => actionSearch()}><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /></button>
                </div>
            </div>
            <div className="nav-links">
                <a href="/"> <FontAwesomeIcon icon={faHouse} style={{marginRight:'0.5rem'}} /> {texts.accueil} </a>
                <div className="dropdown">
                    <a>
                        <FontAwesomeIcon icon={faGear} style={{marginRight:'0.5rem'}} />{texts.services} 
                    </a>
                    <div className="dropdown-content">
                        <a href="/conception_et_impression"> 
                            <FontAwesomeIcon icon={faQrcode} style={{marginRight:'0.5rem'}} /> 
                            {texts.conception_impression}
                        </a>
                        <a href="/social_media"> 
                            <FontAwesomeIcon icon={faHeart} style={{marginRight:'0.5rem'}} /> 
                            {texts.social_media}
                        </a>
                        <a href="/shooting"> 
                            <FontAwesomeIcon icon={faCamera} style={{marginRight:'0.5rem'}} /> 
                            {texts.shooting}
                        </a>
                        <a href="/dev_web"> 
                            <FontAwesomeIcon icon={faLaptop} style={{marginRight:'0.5rem'}} /> 
                            {texts.dev_web}
                        </a>
                        <a href="/ref_web"> 
                            <FontAwesomeIcon icon={faAsterisk} style={{marginRight:'0.5rem'}} /> 
                            {texts.ref_web}
                        </a>
                    </div>
                </div>
                <a href="/contact"> <FontAwesomeIcon icon={faPhone} style={{marginRight:'0.5rem'}} />{texts.contact} </a>
            </div>
            <div className="searchbar">
                <input type="text" />
                <button onClick={() => actionSearch()}><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /></button>
            </div>
            <div className="language-container">
                <div className="dropdown-language">
                    {selectedLanguage === 'french' ? (
                        <img src="./flags/france.png" alt="french"/>
                    ) : selectedLanguage === 'english' ? (
                        <img src="./flags/english.png" alt="english" />
                    ) : (
                        <img src="./flags/tunisia.png" alt="arabic" />
                    )}
                    <div className="dropdown-language-content">
                    <div
                        className="language-option"
                        onClick={() => changeLanguage('french')}
                    >
                        <img src="./flags/france.png" alt="French" />
                        <span>{texts.fr}</span>
                    </div>
                    <div
                        className="language-option"
                        onClick={() => changeLanguage('english')}
                    >
                        <img src="./flags/english.png" alt="English" />
                        <span>{texts.eng}</span>
                    </div>
                    <div
                        className="language-option"
                        onClick={() => changeLanguage('arabic')}
                    >
                        <img src="./flags/tunisia.png" alt="Arabic" />
                        <span>{texts.ar}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;