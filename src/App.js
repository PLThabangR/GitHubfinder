import React, {Fragment,useState} from "react";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";
import axios from 'axios';
import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import User from './Components/User/User'
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
const  App =()=> {
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const [loading,setloading] = useState(false);
  const [alert,setAlert] = useState(null);
  const [repos,setRepos] = useState([]);
  

//Get users
const searchUsers =async userName=>{
  
  setloading('true');
  
  const res= await axios.get(`https://api.github.com/search/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
  setUsers(res.data.items);
  setloading(false);
  
 

}
//Get single github user
const getSingleUser =async (userName) =>{
  setloading(true);
  
  const res= await axios.get(`https://api.github.com/users/${userName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
   setUser(res.data);
   setloading(false);
   
}

//get each users repository details
const getUserRepos =async (userName) =>{
  setloading(true);

  const res= await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  setRepos(res.data)
  setloading(true);
}

//Clear state values
const clearUsers=()=>{

  setUsers([]);
  setloading(false);
}

const showAlert =(msg)=>{
 setAlert({msg});
 setTimeout(()=> setAlert(null),5000)
}


    return (

      <Router>
      <Fragment>
      <Navbar  title="Github finder"/>
     
     
      <div className="container mt-2">
     <Switch>
     <Route exact path='/' render={props=>(
       <Fragment>
       <Alert alert={alert}/>
       <Search searchUsers={searchUsers}  clearUsers={clearUsers} 
       showClear={users.length>0 ?true:false}
       showAlert={showAlert}
       />
      <Users users={users} loading={loading}  />
      </Fragment>)}/>

      <Route
        exact
        path='/About' component={About}
      />

      <Route exact path='/User/:login' render={props =>(
        <User {...props } getSingleUser={getSingleUser} user={user}
        loading={loading} getUserRepos={getUserRepos}
        repos={repos}/>
      )}/>
     </Switch>
         
       </div>
      </Fragment>
      </Router>
    );
  
}

export default App;
