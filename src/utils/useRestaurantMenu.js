import { useState, useEffect } from "react";
import { swiggyMenu, corsProxy } from "../utils/constants"

export const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(corsProxy + swiggyMenu + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}