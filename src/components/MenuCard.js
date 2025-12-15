import { menuImgUrl } from "../utils/constants"

export const MenuCard = (props) => {
    const {name, imageId, ratings, defaultPrice, price} = props.menuData
    return (
        <div className="p-4 m-3 bg-sky-100 rounded-md">
            <img className='rounded-sm' src={menuImgUrl+imageId} />
            <h3>{name}</h3>
            <h4>{defaultPrice?"₹"+defaultPrice/100:"₹"+price/100}</h4>
            
        </div>
    )
}