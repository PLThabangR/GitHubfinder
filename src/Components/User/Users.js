import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../Layout/spinner'
import GithubContext from '../../Context/github/githubContext';

 const Users =()=> {
   const githubContext = useContext(GithubContext);
    //Destruct the context api
    const {loading,users} =githubContext;

    if(loading){
        return <Spinner/>
    }else{
        return (
            <div style={userStyle}>

                {users.map(
                    user =>
                    <UserItem key={user.id} user={user} />
                )}
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
