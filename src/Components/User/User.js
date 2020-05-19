import React, { useEffect,useState, Fragment,useContext } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBView, MDBIcon } from 'mdbreact';
import Spinner from "./../Layout/spinner";
import {Link} from 'react-router-dom';
import Repos from '../Repos/Repos';
import { MDBBadge } from "mdbreact";
import GithubContext from '../../Context/github/githubContext';

const User =({match})=> {
  const githubContext = useContext(GithubContext);
  //Destructure the context
  const {getSingleUser,loading,user,getUserRepos,repos} = githubContext;
  useEffect(()=>{
   //fetching the single user using passed params
   getSingleUser(match.params.login);
  
   getUserRepos(match.params.login);


  },[]);
    
        const {
            name,
            avatar_url,
            bio,
            blog,
            login,
            location,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            company,
            hiraeble
        } = user;

          
    
         
        if(loading ) return <Spinner/>;
        return (
            <Fragment>
            <MDBBtn >
            <Link to={"/"}>
            Back to search
            </Link>
            </MDBBtn>
            <MDBCard wide cascade>
          
        <div className="row">
               <div className="col-md-4">
               <MDBView cascade>
               <MDBCardImage className='text-center'
                 hover
                 overlay='white-slight'
                 className='card-img-top'
                 src={avatar_url}
        
                 alt="Responsive image"
               style={{width:'300px',height:'300px'}}
               />
             </MDBView>
               </div>
               <div className="col-md-8">     
            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle className='card-title'>
                <strong>{name}</strong>
              </MDBCardTitle>
  
              <p className='font-weight-bold blue-text'>{login}</p>
  
              <MDBCardText>
               {bio}
              </MDBCardText>
              <MDBCardText>
              Hireable {" "}
              {hiraeble ?<MDBIcon icon="calendar-check" />
            :<MDBIcon icon="times-circle" />}
              </MDBCardText>
              
              <MDBCardText>
            {location && (
                <Fragment>
                {location}
                </Fragment>
                )}
             </MDBCardText>
             
             <MDBCardText>
                {company && <Fragment>
                    <strong>Campany name: </strong>
                        {company}
                </Fragment>
                }
                </MDBCardText>
                <MDBCardText>
                {blog && <Fragment>
                    <strong>Website: </strong>
                        {blog}
                </Fragment>
                }
                </MDBCardText>
              
             
            <MDBBtn  href={html_url} >
            
           
           
            Visit github proflie
        
            </MDBBtn>


              </MDBCardBody>
              </div>
              </div>
              </MDBCard>
            
                <br></br>
              <MDBCard>
              <MDBCardBody>
     
              <div className="text-center">
              <MDBBadge color="primary">Follows {'', following}</MDBBadge>
              <MDBBadge color="success">Followers {' ',followers}</MDBBadge>
              <MDBBadge color="info">Public repos {'',public_repos}</MDBBadge>
              <MDBBadge color="warning">public gists {'',public_gists}</MDBBadge>
                </div>
            
              </MDBCardBody>
              </MDBCard>
              <br></br>
              <Repos repos={repos}/>
            </Fragment>
        )
    
}

export default User
