/*
React element at the end of the day is an object

ReactElement(obj) =>HTML(Browser understands)
<div id="Parent">
  <div id="child">
      <h1> I'm a heading </h1>

  </div>


</div>




*/




const parent=React.createElement("div",{id:'parent'},
[React.createElement("div",{id:'child-1'},
[React.createElement("h1",{id:'h1-header'},"I'm a h1 heading "),
React.createElement("h2",{id:"h2-header"},"I'm a h2 heading")]),
React.createElement("div",{id:'child-2'},
[React.createElement("h1",{id:'h1-header'},"I'm a h1 heading "),
React.createElement("h2",{id:"h2-header"},"I'm a h2 heading")])])




const heading=React.createElement('h1',{id:"heading"},"Hello World from react");
    
const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(parent);