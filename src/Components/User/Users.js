import React, { Component } from 'react'
import UserItem from './UserItem';


 class Users extends Component {
     state={
         users:[
            {
                id:'1',
                name: "aGameOfSnake",
                avatar_url: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
                url: "https://api.github.com/users/ethanboxx",
                bio: "17 years old - Student",
    
            },
            {
                id:'2',
                name: "aGameOfSnake",
                avatar_url: "https://avatars2.githubusercontent.com/u/8074468?v=4",
                url: "https://api.github.com/users/ethanboxx",
                bio: "17 years old - Student",
    
            },
            {
                id:'3',
                name: "aGameOfSnake",
                bio: "17 years old - Student ",
                avatar_url: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
                url: "https://api.github.com/users/ethanboxx",
    
            }

         ]
     }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle ={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
export default Users
