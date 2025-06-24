const heading1 = React.createElement("h1", {id:"heading1"}, "Hello from React");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);

/*nesting
<div id="parent">
    <div id="child">
        <h1>Nesting of element</h1>
        <h2>Array of element</h2>
    </div>
</div>
*/   
const nesting1 = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {id:"h1"}, "Nested"),
        React.createElement("h2", {id:"h2"}, "Array of element")])
)
root1.render(nesting1);
console.log(nesting1);

