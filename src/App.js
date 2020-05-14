import React, {Fragment,Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";

class App extends Component {
 
componentDidMount(){
  
}

  render() {
   
    return (
      <Fragment>
      <Navbar  title="Github finder"/>
      <div className="container mt-2">
     
           <Users />
       </div>
      </Fragment>
    );
  }
}

export default App;
