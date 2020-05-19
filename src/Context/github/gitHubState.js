import React ,{useReducer} from 'react';
import axios from 'axios';
import GithubReducer from './githubReducer';
import {SEARCH_USERS,
    REMOVE_ALERT,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    CLEAR_USERS,} from '../types';
import githubContext from './githubContext';

    //Create initial state
    const GithubState =props =>{
        const initialState={
            users:[],
            user:{},
            repos:[],
            loading:false

        }

        const [state,dispatch] = useReducer(GithubReducer,initialState);
        //Search users
        const searchUsers =async userName=>{
  
            setloading();
            
            const res= await axios.get(`https://api.github.com/search/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            
           dispatch({
            type:SEARCH_USERS,
            payload:res.data.items

           })
           
          }

        //get user
        const getSingleUser =async (userName) =>{
            setloading();
            
            const res= await axios.get(`https://api.github.com/users/${userName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            
          dispatch({
              type: GET_USER,
              payload :res.data
          })
             
          }
        //get repos
        const getUserRepos =async (userName) =>{
            setloading();
          
            const res= await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
           dispatch({
               type:GET_REPOS,
               payload :res.data
           })
          }
          

        //clear Users
        const clearUsers=()=> dispatch({type:CLEAR_USERS})

          

        //set loading
        const setloading =() => dispatch({type:SET_LOADING});

        return <githubContext.Provider
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers,
            clearUsers,
            getSingleUser,
            getUserRepos


        }}
        >
        {props.children}
        </githubContext.Provider>
    }

    export default GithubState;