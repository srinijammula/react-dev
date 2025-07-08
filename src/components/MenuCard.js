import { menuImgUrl } from "../utils/constants"

export const MenuCard = (props) => {
    const {name, imageId, ratings, defaultPrice} = props.menuData
    return (
        <div className="menu-card">
            <img className='res-image' src={menuImgUrl+imageId} />
            <h3>{name}</h3>
            <h4>{defaultPrice?"₹"+defaultPrice/100:'NA'}</h4>
            <h4>{ratings.aggregatedRating.rating}</h4>
        </div>
    )
}