import { Shimmer } from "./Shimmer"
import { useParams } from "react-router"
import { MenuCard } from "./MenuCard"
import { useRestaurantMenu } from "../utils/useRestaurantMenu"

export const RestaurantMenu = () =>{

    const {resId} = useParams()

    const resInfo=useRestaurantMenu(resId);

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
