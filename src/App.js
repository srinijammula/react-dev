import React, {lazy, Suspense} from "react";
import {createRoot} from "react-dom/client"
import {About} from "./components/About"
import { Body } from "./components/Body";
import {Header} from "./components/Header"
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer.js";
//import { Grocery } from "./components/Grocery";



const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)

















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

