import React, {Fragment,Component } from "react";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";
import axios from 'axios';
import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import User from './Components/User/User'
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component {
 
  state ={
    users:[],
    user:{},
    loading: false,
    alert:null
  }
async componentDidMount(){
 
  this.setState({loading:true});
 const res= await axios.get(`https://api.github.com/users?cleint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

 this.setState({users:res.data,loading:false});
}

searchUsers =async userName=>{
  
  this.setState({loading:true})

  const res= await axios.get(`https://api.github.com/search/users?q=${userName}&cleint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
   this.setState({users:res.data.items,loading:false});

}
//Get single github user
getSingleUser =async (userName) =>{
  this.setState({loading:true})

  const res= await axios.get(`https://api.github.com/users/${userName}?&cleint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
   this.setState({user:res.data,loading:false});
}

clearUsers=()=>{

  this.setState({users:[],loading:false})
}

setAlert =(msg)=>{
 this.setState({alert:{msg}})

 setTimeout(()=> this.setState({alert:null}),5000)
}
  render() {
   const {users,loading,alert,user} =this.state;
    return (

      <Router>
      <Fragment>
      <Navbar  title="Github finder"/>
     
     
      <div className="container mt-2">
     <Switch>
     <Route exact path='/' render={props=>(
       <Fragment>
       <Alert alert={alert}/>
       <Search searchUsers={this.searchUsers}  clearUsers={this.clearUsers} 
       showClear={users.length>0 ?true:false}
       setAlert={this.setAlert}
       />
      <Users users={users} loading={loading}  />
      </Fragment>)}/>

      <Route
        exact
        path='/About' component={About}
      />

      <Route exact path='/User/:login' render={props =>(
        <User {...props } getSingleUser={this.getSingleUser} user={user}
        loading={loading}/>
      )}/>
     </Switch>
         
       </div>
      </Fragment>
      </Router>
    );
  }
}

export default App;
