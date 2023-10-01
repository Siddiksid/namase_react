import React from 'react'
import User from './User'
import UserClass from './UserClass'
import { Component } from 'react'


class About extends Component{
  constructor(props)
  {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount()
  {
    console.log("parent component did mount");
    // Api calls
  }

  render()
  {
    console.log("parent render");
    
    return (
      <div>
        <h1>About us</h1>
        <h2>This is Info about our team</h2>
        
        <UserClass  />
        <UserClass  />
       
      </div>
    )
  }
}




// const About = () => {
  // return (
  //   <div>
  //     <h1>About us</h1>
  //     <h2>This is Info about our team</h2>
  //     <User name={"Siddik (function)"} />
  //     <UserClass name={"Siddik (class)"} location={"tamilnadu (class)"} />
  //   </div>
  // )
// }

export default About