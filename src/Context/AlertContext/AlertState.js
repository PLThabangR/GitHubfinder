import React ,{useReducer} from 'react';
import AlertReducer from './AlertReducer';
import {
    REMOVE_ALERT,
    SET_ALERT,
    } from '../types';
import AlertContext from './AlertContext';

    //Create initial state
    const AlertState =props =>{
        const initialState=null;

        const [state,dispatch] = useReducer(AlertReducer,initialState);
       
        //set alert
        const setAlert =(msg)=>{
            dispatch({
                type:SET_ALERT,
                payload: {msg}
            })

            setTimeout(()=> dispatch({type:REMOVE_ALERT}),5000)
           }
           
        
        return <AlertContext.Provider
        value={{
            alert:state,
            setAlert
        }}
        >
        {props.children}
        </AlertContext.Provider>
    }

    export default AlertState;