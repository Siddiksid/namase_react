import React from 'react'

import  ReactDOM  from 'react-dom/client';

// React element => Object =>HTML element(render)


 const heading=React.createElement("h1",{id:'heading'},"Namaste React 🚀");

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



//Jsx -HTML like or XML like syntax
//Jsx code is transpiled before it reaches the js engine (Parcel uses babel to transpile it)
//Jsx is converted into react.createElement
const jsxHeading=(
<h1 id="Heading" className='header'>
    This is a heading using Jsx</h1>);

// React Component
// Class Based components
// functional components
const Title=()=><h1>Namaste React 🚀</h1>
// Jsx will not excute malicious data from api ,It will sanitize the data
// const data=api.getData();
// Component composition
const HeadingComponent=()=>{

    return(
        <div>
            <Title />  
            <Title />  
            <Title />  
            <Title />  
        <h1>Heading from functional component</h1>
        <h2>{32*34}</h2>
        {console.log("Any js expression will execute")}
        {jsxHeading}
        {variables}
        {/* {data} */}
        </div>
      

    )
}

const HeadingComponent2=()=><h1>Heading from functional component</h1>

const variables=(
    <div>
        <HeadingComponent2 />
    </div>
)


console.log(heading);
console.log(jsxHeading);
root.render(<HeadingComponent />);