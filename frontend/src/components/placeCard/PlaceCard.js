import React from 'react';
import "./card.scss"
import {Link} from "react-router-dom";


const PlaceCard = ({restaurant}) => {
    //rest_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //     ya_id: {type: DataTypes.STRING},
    //     coordinates: {type: DataTypes.STRING},
    //     name: {type: DataTypes.STRING},
    //     adress: {type: DataTypes.STRING},
    //     url: {type: DataTypes.STRING},
    //     phones: {type: DataTypes.STRING},
    //     categories: {type: DataTypes.STRING},
    //     hours: {type: DataTypes.STRING},
    //     description: {type: DataTypes.STRING},
    //     img: {type: DataTypes.STRING}
    return (
        <Link to={`/restaurant/${restaurant.rest_id}`} className="card-link">
            <div className="card">

                <img src="https://avatars.mds.yandex.net/get-altay/2701879/2a000001707d053cb44e7267d3cab540b302/XXXL"
                     alt={restaurant.name}/>
                <div className="info">
                    <div className='info-right'>
                        <div className="title">{restaurant.name}</div>
                        <div className="type">{restaurant.type}</div>
                        <div className="work-time">{restaurant.hours}</div>
                        <div className="cuisine">{restaurant.categories}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PlaceCard;