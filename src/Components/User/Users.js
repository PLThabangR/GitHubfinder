import React from 'react'
import UserItem from './UserItem';
import Spinner from '../Layout/spinner'
import PropTypes from 'prop-types';

 const Users =({users,loading})=> {
   
    if(loading=false){
        return <Spinner/>
    }else{
        return (
            <div style={userStyle}>
                {users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }

       
    }

    // Users.PropTypes= {
    //     users:PropTypes.array.isRequired,
    //     loading:Prototype.bool.isRequired
    // }
const userStyle ={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
export default Users
