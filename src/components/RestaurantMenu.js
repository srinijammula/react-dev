import { useEffect, useState } from "react"
import { swiggyMenu, corsProxy } from "../utils/constants"
import { Shimmer } from "./Shimmer"
import { useParams } from "react-router"
import { MenuCard } from "./MenuCard"

export const RestaurantMenu = () =>{

    const {resId} = useParams()

    const [resInfo, setResInfo] = useState(null)

    const fetchMenu= async () => {
        const data = await fetch(corsProxy+swiggyMenu+resId)
        const json= await data.json()
        console.log(json.data.cards[2].card.card.info.name)
        setResInfo(json.data)
    }
     useEffect(() => {
    fetchMenu()
    },[])

    if (resInfo===null){
        return <Shimmer />
    }

    const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            <h2>Menu</h2>
            <div className="menu-container">
                {itemCards.map(item => <MenuCard key={item.card.info.id} menuData={item.card.info} />)}
            </div>
        </div>
    )
}
