import React, {useState, useEffect} from "react";

import Contact from '../Contact/Contact'
import './Home.css'
import Slider from "../../components/Slider";
import Service from "../../components/Service";

const servicesImages= ['./images/services/conception-banner.jpg',
                       './images/services/socialmedia-banner.jpg',
                       './images/services/shooting-banner.jpg',
                       './images/services/dev_web-banner.jpg',
                       './images/services/ref_web-banner.jpg'
                    ]

const Home = () =>{
    const [texts, setTexts] = useState({});
    useEffect(() => {
        import(`../../languages/${localStorage.getItem('selectedLanguage')}.json`)
            .then((data) => setTexts(data.home))
            .catch((error) => console.error(`Error loading language data: ${error}`));
    }, []);
    
    return(
        <div className="Home">
            <Slider />
            <div className="home-content">
                <h1>{texts.introQ}</h1>
                <center><span className="text-style">{texts.introR}</span></center>
                <hr className="custom-hr"></hr>
                <h1 style={{color:'var(--M2)'}}>{texts.servicesQ}</h1>
                <div id="services" className="services">
                    {texts.servicesR && texts.servicesR.map((service, index) => (
                        <div className="service-item" key={index}>
                            <a href={index === 0 ? '/conception_et_impression' : index === 1 ? '/social_media' : index === 2 ? '/shooting' : index === 3 ? '/dev_web' : '/ref_web'}
                                style={{textDecoration:'none', color:'white', border:'none'}}
                            >   
                                <Service service={service} image={servicesImages[index]} />
                            </a>
                        </div>
                    ))}
                </div>
                <hr className="custom-hr"></hr>
                <h1 style={{color:'var(--M2)'}}>{texts.contactQ}</h1>
                <Contact />
            </div>
        </div>
    )
}

export default Home;