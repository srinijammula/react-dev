import React from "react";
import {createRoot} from "react-dom/client";
import {restaurants} from "./data"

const logo = new URL('./img/eato_logo.png',import.meta.url).href
const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} className="logo-eato"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props.resData.info
    return (
        <div className="res-card">
            <img className='res-image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString||'22 mins'}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                {
                    restaurants.map(restaurant=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<AppLayout />)

















//episode 3
// //jsx - babel transpiles to React.createElement
// const jsxhead = <h1 id="h1">This is by jsx</h1>;
// const root = createRoot(document.getElementById("root"));

// var number=11;
// //functional copmonent in react-alaways in caps
// const HeadingComponent = () => {
//     return <div><h1>functional component</h1>
//     {/*rendering component inside component - component composition*/}
//     {/*you can write js code here in {}*/}
//     <h2>This number value is {number}</h2>
//     <HeadingComponent2 />
//     </div>
// };
// const HeadingComponent2 = () => (
//     <h1>Same as before</h1>
// );

// root.render(<HeadingComponent />);   


//Episode 1
// const heading1 = React.createElement("h1", {id:"heading1"}, "Hello from React");
// const root1 = createRoot(document.getElementById("root"));
// root1.render(heading1);

// /*nesting
// <div id="parent">
//     <div id="child">
//         <h1>Nesting of element</h1>
//         <h2>Array of element</h2>
//     </div>
// </div>
// */   
// const nesting1 = React.createElement("div", {id:"parent"}, 
//     React.createElement("div", {id:"child"}, 
//         [React.createElement("h1", {id:"h1"}, "This is React Development"),
//         React.createElement("h2", {id:"h2"}, "Array of element")])
// )
// root1.render(nesting1);
// console.log(nesting1);

