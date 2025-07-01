import { RestaurantCard } from "./RestaurantCard"
import restaurants from "../utils/data"
import {useState} from "react";

export const Body = () => {
    const [restaurantList, setRestaurantList] = useState(restaurants);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // console.log("yes it works")
                    const newRestaurantList = restaurantList.filter(
                        (res) => res.info.avgRating>4
                    )
                    setRestaurantList(newRestaurantList)
                }}
                >Top Rated Restaurants</button>
                <button className="filter-all-btn" onClick={() => {
                    setRestaurantList(restaurants)
                }}
                >Show all Restaurants</button>
                
            </div>
            <div className="res-container">
                {
                    restaurantList.map(restaurant=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}