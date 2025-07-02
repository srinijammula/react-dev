import { RestaurantCard } from "./RestaurantCard"
import {useState, useEffect} from "react";
import { corsProxy, swiggyApi } from "../utils/constants"
import {Shimmer} from "./shimmer"

export const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const fetchData= async () => {
        const data = await fetch(corsProxy+swiggyApi)
        const json=await data.json();
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

     useEffect(() => {
        fetchData();
    },[]);
    

    if (restaurantList.length==0){
    return <Shimmer />
    }

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