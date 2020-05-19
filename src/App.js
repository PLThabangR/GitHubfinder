import React, {Fragment} from "react";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/User/Users";
import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import User from './Components/User/User';
import GithubState from './Context/github/gitHubState';
import AlertState from './Context/AlertContext/AlertState';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const  App =()=> {

 


    return (
      <GithubState>
      <AlertState>
      <Router>
      <Fragment>
      <Navbar  title="Github finder"/>
      <div className="container mt-2">
     <Switch>
     <Route exact path='/' render={props=>(
       <Fragment>
       <Alert />
       <Search   
       
       />
      <Users/>
      </Fragment>)}/>

      <Route
        exact
        path='/About' component={About}
      />

      <Route exact path='/User/:login' 
        component ={User} 
     />
     </Switch>
         
       </div>
      </Fragment>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

export default App;
