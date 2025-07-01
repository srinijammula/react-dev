import { imgUrl } from "../utils/constants"

export const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props.resData.info
    return (
        <div className="res-card">
            <img className='res-image' src={imgUrl+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString||'22 mins'}</h4>
        </div>
    )
}