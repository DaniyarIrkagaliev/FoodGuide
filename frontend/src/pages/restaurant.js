import React, {useContext, useState} from 'react';
import NavBar from "../components/nav/navBar";
import Footer from "../components/footer/Footer";
import {Context} from "../index";
import Modal from "../components/modal";
import {addToDefaultFav} from "../http/restaurantsAPI";


const Restaurant = () => {

    const {restaurant} = useContext(Context)

    const {review} = useContext(Context)

    const addToFav = () => {
        addToDefaultFav(restaurant.id).then(data => {
            review.setToFav(data.rows)
        })
    }

    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="rest-main-info">
                    <div className='info-above'>
                        <h4>{restaurant.name} </h4>
                        <p className='rest-cat'>{restaurant.category}</p>
                        <p className="rest=address">{restaurant.addres}</p>
                        <span onClick={addToFav()}>
                            <img src='https://cdn-icons-png.flaticon.com/512/2832/2832478.png' alt='fav'/>
                        </span>

                        <span onClick={toggleShowModal}>
                            <img src='https://cdn-icons-png.flaticon.com/512/8751/8751777.png' alt='another fav'/>
                        </span>
                        <Modal show={showModal} onCloseButtonClick={toggleShowModal}/>
                    </div>


                    <div>
                        <img src={restaurant.image} alt={restaurant.name}/>
                        <img src={restaurant.image} alt={restaurant.name}/>
                        <img src={restaurant.image} alt={restaurant.name}/>
                    </div>

                    <p className='rest-descr'>{restaurant.description}</p>

                </div>
                <div className="rest-info">

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Restaurant;