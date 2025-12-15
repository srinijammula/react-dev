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

    return (
        <div className="text-lg">
            <h1 className="inline-block text-lg p-4 m-4 bg-sky-200 rounded-sm">{resInfo.cards[2].card.card.info.name+" Menu"}</h1>
            <div className="flex flex-wrap p-3 m-3">
                {itemCards.map(item => <MenuCard key={item.card.info.id} menuData={item.card.info} />)}
            </div>
        </div>
    )
}
