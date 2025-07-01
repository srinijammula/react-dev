import { RestaurantCard } from "./RestaurantCard"
import restaurants from "../utils/data"

export const Body = () => {
    const restaurantList = [];
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("yes it works")
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    restaurants.map(restaurant=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}