import React from 'react'
class UserClass extends React.Component{
     constructor(props)
     {
        super(props);
        
        this.state={
            
            userInfo:{
                name:"Dummy",
                location:"default",
                
            }
           
        };
         console.log(this.props.name+" Children Constructor");
     }
     async componentDidMount()
     {
         console.log(this.props.name+" Child component did mount");
        const data=await fetch('https://api.github.com/users/Siddiksid');
        const json=await data.json();
        
        this.setState(
            {
                userInfo:json
            }
        )
     }
     componentDidUpdate()
     {
        console.log("Component was updated");
     }

     componentWillUnmount()
     {
        console.log("component is unmounted")
     }
    render ()
    
    {
        const{login,avatar_url}=this.state.userInfo;

      
         console.log(this.props.name+" children Render");
       
        return (
            <div className="user-card">
              <img src={avatar_url} alt="dp" />
             <h2>Name : {login}</h2>
             
             <h4>Contact : siddiksid15</h4>
        </div>
        )
    }
}

export default UserClass;

/*

Parent constructor 

parent render 

first child constructore

first child render


second child constructor

second child render



firstchild component did mount

secondchild component did mount


parent component did mount



*/