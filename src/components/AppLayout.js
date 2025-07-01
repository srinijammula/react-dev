import { Header } from "./Header"
import { Body } from "./Body"

export const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}