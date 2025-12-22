import { render, screen } from "@testing-library/react"
import { RestaurantCard } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant component",()=>{
    render(<RestaurantCard resData={MOCK_DATA.resData} />);

    const name=screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument();
})