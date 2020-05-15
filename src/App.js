import React, {Fragment,Component } from "react";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";
import axios from 'axios';
import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';
class App extends Component {
 
  state ={
    users:[],
    loading: false,
    alert:null
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

clearUsers=()=>{

  this.setState({users:[],loading:false})
}

setAlert =(msg)=>{
 this.setState({alert:{msg}})

 setTimeout(()=> this.setState({alert:null}),5000)
}
  render() {
   const {users,loading,alert} =this.state;
    return (
      <Fragment>
      <Navbar  title="Github finder"/>
      <Alert alert={alert}/>
      <Search searchUsers={this.searchUsers}  clearUsers={this.clearUsers} 
      showClear={users.length>0 ?true:false}
      setAlert={this.setAlert}
      />
      <div className="container mt-2">
     
           <Users users={users} loading={loading}  />
       </div>
      </Fragment>
    );
  }
}

export default App;
