import { imgUrl } from "../utils/constants"

export const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props.resData.info
    return (
        <div className="m-4 p-4 w-72 bg-amber-100 rounded-s-md hover:bg-amber-200">
            <img className='rounded-md' src={imgUrl+cloudinaryImageId}/>
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString||'22 mins'}</h4>
        </div>
    )
}