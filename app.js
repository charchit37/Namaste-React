

// const heading = React.createElement("h1", {className:"text-red"} , "Hello World");  // This will return an object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // It will create the structure from object and will reneder to DOM




/* 
    <div id="parent">
        <div id="child">    
            <h1> I am a h1 Tag </h1>
            <h2> I am a h2 Tag </h2>
        </div>
    </div>

*/


const parent = React.createElement(
    "div", 
    { id: "parent" },
    React.createElement("div", { id: "child" },[React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2", {}, "I am an h2 tag")]
   )
)
    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);