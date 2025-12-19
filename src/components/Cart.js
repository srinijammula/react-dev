import { useDispatch, useSelector } from "react-redux";
import { MenuCard } from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart =() => {
    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return (<div className="text-center m-4 p-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button className="rounded-lg bg-black text-white p-2 m-2" onClick={handleClearCart}>Clear Cart</button>
        <div>
            {cartItems.map(item => <MenuCard key={item.menuData.id} menuData={item.menuData} />)}
        </div>
    </div>)
};

export default Cart;