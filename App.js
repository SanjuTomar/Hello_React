/**
 * <div id ="parent">
 * <div id="child">
 * <h1> h1 tag</h1>
 * </div>
 * 
 * </div>
 * 
 *
 */
const heading = React.createElement("h1",{id:"parent"},
[React.createElement("div",{id:"child"},"h1 tag"),React.createElement("h2",{id:"child"},"h2 tag")],
[React.createElement("",{id:"child2"},"h1 child tag"),React.createElement("h2",{id:"child2"},"h2 child2 tag")]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading) 