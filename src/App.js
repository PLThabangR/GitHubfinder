import React, {Fragment,Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";
import axios from 'axios'
class App extends Component {
 
  state ={
    users:[],
    loading: false
  }
async componentDidMount(){

  this.setState({loading:true});
 const res= await axios.get('https://api.github.com/users');

 this.setState({users:res.data,loading:false});
}

  render() {
   
    return (
      <Fragment>
      <Navbar  title="Github finder"/>
      <div className="container mt-2">
     
           <Users users={this.state.users} loading={this.state.loading}  />
       </div>
      </Fragment>
    );
  }
}

export default App;
