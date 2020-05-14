import React, {Fragment,Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";
import axios from 'axios'
class App extends Component {
 
async componentDidMount(){
 const res= await axios.get('https://api.github.com/users');

 console.log(res.data);
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
