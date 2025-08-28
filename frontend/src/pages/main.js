import React, {useState} from 'react';
import NavBar from "../components/nav/navBar";
import Footer from "../components/footer/Footer";
import MyMap from "../components/maps/Map";
import MainList from "../components/mainList/MainList";

import JsonData from "../data/rest.json";

const Main = () => {
    const [showMap, setShowMap] = useState(false);

    function handleClick() {
        setShowMap(!showMap);
    }

    const points = JsonData
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="">
                    <h1>Лучшие рестораны Воронежа</h1>
                    <button
                        className="switcher"
                        onClick={handleClick}
                    >
                        Показать {showMap ? "список" : "карту"}
                    </button>
                    {!showMap ?
                        <MainList/>
                        :
                        <MyMap points={points}/>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;