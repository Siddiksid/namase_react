import React from 'react'

import  ReactDOM  from 'react-dom/client';


const header=React.createElement("div",{id:'header'},
[React.createElement('h1',{id:'heading-1'},"Heading 1"),
React.createElement('h2',{id:'heading-2'},'Heading 2'),React.createElement('h3',{id:'heading-3'},'Heading-3')]);


// The same using JSX


const JsxHeader=(
    <div>
        <h1 className='heading-1'>Heading 1</h1>
        <h2 className='heading-2'>Heading 2</h2>
        <h3 className='heading-3'>Heading 3</h3>
    </div>
)


// The same using functional component

const ComponentHeader=()=>{
    return(
        <div>
          <h1 className='heading-1'>Heading 1</h1>
          <h2 className='heading-2'>Heading 2</h2>
          <h3 className='heading-3'>Heading 3</h3>

        </div>
    )
}

// Pass attributes to jsx

const ComponentHeader1=()=>{
    return(
        <div>
          <h1 className='heading-1' style={{backgroundColor:'green'}}>Heading 1</h1>
          <h2 className='heading-2' style={{border:'2px solid gray'}}>Heading 2</h2>
          <h3 className='heading-3' style={{color:'purple'}}>Heading 3</h3>

        </div>
    )
}

// Composition of one component inside another

const ComponentHeader3=()=>{
    return(
        <div>
          <h1 className='heading-1'>Heading 1</h1>
          <h2 className='heading-2'>Heading 2</h2>
          <h3 className='heading-3'>Heading 3</h3>
          <ComponentHeader1 />
          
        </div>
    )
}


 // `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.


 const Header = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};


//  Create a Header Component from scratch using Functional Component with JSX


const header4=()=>{
  return(
    <header className='header'>
        <div className='left'>
           <h1 style={{color:'cyan'}}>Fake Company</h1>
           <img src="" alt=""/>
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
    </header>
  )
}