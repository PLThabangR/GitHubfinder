import {SEARCH_USERS,
    REMOVE_ALERT,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,} from '../types';


    export default (state,action)=>{
        switch(action.type){
               case SEARCH_USERS:
                   return{
                       ...state,
                       users:action.payload,
                       loading:false
                   } 

            case SET_LOADING:
                return{
                    ...state,
                    loading:true
                }
            
            
            default:
                return  state;

        }

    }