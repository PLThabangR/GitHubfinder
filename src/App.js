import React, {Fragment,Component } from "react";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";
import axios from 'axios';
import Search from './Components/User/Search'
class App extends Component {
 
  state ={
    users:[],
    loading: false
  }
async componentDidMount(){
 
  this.setState({loading:true});
 const res= await axios.get(`https://api.github.com/users?cleint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

 this.setState({users:res.data,loading:false});
}

searchUsers =async text=>{
  console.log(text)
  this.setState({loading:true})

  const res= await axios.get(`https://api.github.com/search/users?q=${text}&cleint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  console.log(res.data)
   this.setState({users:res.data.items,loading:false});
}

  render() {
   
    return (
      <Fragment>
      <Navbar  title="Github finder"/>
      <Search searchUsers={this.searchUsers}/>
      <div className="container mt-2">
     
           <Users users={this.state.users} loading={this.state.loading}  />
       </div>
      </Fragment>
    );
  }
}

export default App;
