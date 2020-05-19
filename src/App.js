import React, {Fragment} from "react";
import "./index.css";
import Navbar from "./Components/Layout/Navbar";
import Home from './Components/Pages/Home';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import User from './Components/User/User';
import GithubState from './Context/github/gitHubState';
import AlertState from './Context/AlertContext/AlertState';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./Components/Pages/NotFound";
const  App =()=> {

 


    return (
      <GithubState>
      <AlertState>
      <Router>
      <Fragment>
      <Navbar  title="Github finder"/>
      <div className="container mt-2">
      <Alert/>
     <Switch>
     <Route exact path='/' 
      component={Home} />

      <Route
        exact
        path='/About'
         component={About}/>

      <Route exact path='/User/:login' 
        component ={User} 
     />

     <Route component={NotFound}/>

     </Switch>
         
       </div>
      </Fragment>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

export default App;
