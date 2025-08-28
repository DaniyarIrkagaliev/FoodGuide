import React, {useState, useEffect, useContext,} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

import {fetchRestaurants} from "../../http/restaurantsAPI";
// import Pages from "../pages";
import PlaceCard from "../placeCard/PlaceCard";


const MainList = observer(() => {

    const {restaurant} = useContext(Context)

    useEffect(() => {
        fetchRestaurants(null, null, 1, 2).then(data => {
            restaurant.setRestaurant(data.rows)
        })
    }, [])

    useEffect(() => {
        fetchRestaurants(restaurant.page, 10).then(data => {
            restaurant.setRestaurant(data.rows)
            restaurant.setTotalCount(data.count)
        })
    }, [restaurant.page,])


    const [isLoading, setIsLoading] = useState(false)

    return isLoading ? (
        <div>ЗАГРУЗКА</div>
    ) : (
        <div>
            <div className="restaurant-cards">
                {restaurant.restaurants.map(restaurant =>
                    <PlaceCard key={restaurant.rest_id} restaurant={restaurant}/>
                )}

                {/*<Pages/>*/}
            </div>
        </div>
    );
});

export default MainList;