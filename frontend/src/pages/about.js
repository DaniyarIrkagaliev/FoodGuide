import React, {useEffect, useState} from 'react';
import NavBar from "../components/nav/navBar";
import Footer from "../components/footer/Footer";
import JsonData from "../data/landing.json";


const About = () => {

    const [landingPageData, setLandingPageData] = useState(JsonData);

    return (
        <div>
            <NavBar/>
            <div id="about" className="container">
                <div>
                    <div className="header">
                        <h2>О Проекте</h2>
                        <h3>{landingPageData ? landingPageData.Header.title : 'Loading'}</h3>
                        <h5>{landingPageData ? landingPageData.Header.paragraph : 'Loading'}</h5>
                        <h4>{landingPageData ? landingPageData.Header.secondParagraph : 'Loading'}</h4>
                    </div>
                    <div className="about-text">
                        <h1>Описание</h1>
                        <p>{landingPageData ? landingPageData.About.paragraph : 'Loading'}
                        </p>
                    </div>

                    <div className="purpose">
                        <h1>Постановка задачи </h1>
                        <h3>{landingPageData ? landingPageData.About.purposeParagraph : 'Loading'} </h3>

                        <div className="list-style">
                            <div className="col-lg-6 col-sm-6 col-xs-12 ">
                                <ul>
                                    {landingPageData.About
                                        ? landingPageData.About.purpose.map((d, i) => (
                                            <li key={`${d}-${i}`}>{d}</li>
                                        ))
                                        : "loading"}
                                </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6 col-xs-12 ">
                                <ul>
                                    {landingPageData.About
                                        ? landingPageData.About.purpose2.map((d, i) => (
                                            <li key={`${d}-${i}`}>{d}</li>
                                        ))
                                        : "loading"}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;