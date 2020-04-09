import React from "react";
import Login from "/Components/Login";


export default class HomeScreen extends React.Component {
  
  state = {
    isLoggedin : false,
    username : "",
  }

  callbackFunc = (logindata) => {
      this.setState({isLoggedin : logindata.isUserAuth,username: logindata.username})
  }
  
  render(){
    if(this.state.isLoggedin == false){
        return (
          <div>
            <Login parentCallback = {this.callbackFunc}/>
          </div>
        );
    }
    else{
        return(
          <div>
            <p>Logged in as : {this.state.username}</p>
          </div>
        )
    }
    
  }
}
