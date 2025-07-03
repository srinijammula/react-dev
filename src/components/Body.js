import { RestaurantCard } from "./RestaurantCard"
import restaurants from '../utils/data'
import {useState, useEffect} from "react";
import { corsProxy, swiggyApi } from "../utils/constants"
import {Shimmer} from "./shimmer"

export const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] =useState("");

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
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value) }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        console.log(filteredList)
                        setRestaurantList(filteredList)}} >
                        Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const newRestaurantList = restaurantList.filter(
                        (res) => res.info.avgRating>4.3
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