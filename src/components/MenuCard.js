import { useDispatch } from "react-redux";
import { menuImgUrl } from "../utils/constants"
import { addItem } from "../utils/cartSlice";

export const MenuCard = (props) => {
    const {name, imageId, ratings, defaultPrice, price} = props.menuData;
    const dispatch = useDispatch();
    const handleAddItem=()=>{
        dispatch(addItem(props));
    }

    return (
        <div className="p-4 m-3 bg-sky-100 rounded-md">
            <img className='rounded-sm' src={menuImgUrl+imageId} />
            <h3>{name}</h3>
            <h4>{defaultPrice?"₹"+defaultPrice/100:"₹"+price/100}</h4>
            <button className="bg-black text-white p-2 rounded-lg cursor-pointer" onClick={handleAddItem}>Add</button>
        </div>
    )
}