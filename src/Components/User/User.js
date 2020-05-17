import React, { Component, Fragment } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import Spinner from "./../Layout/spinner";
import {Link} from 'react-router-dom'
export class User extends Component {
  
  componentDidMount(){
      //fetching the single user using passed params
      this.props.getSingleUser(this.props.match.params.login);
      
  }
    render() {
        const {
            name,
            avater_url,
            locatin,
            bio,
            login,
            location,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            company,
            hiraeble
        } = this.props.user;


        const {loading} =this.props.loading;
           
        if(loading ) return <Spinner/>;
        return (
            <Fragment>
            <MDBBtn >
            <Link to={"/"}>
            Back to search
            </Link>
            </MDBBtn>
            <MDBCard wide cascade>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay='white-slight'
                className='card-img-top'
                src={avater_url}
                alt='Card cap'
                style={{width:'150px'}}
              />
            </MDBView>
  
            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle className='card-title'>
                <strong>{name}</strong>
              </MDBCardTitle>
  
              <p className='font-weight-bold blue-text'>Photographer</p>
  
              <MDBCardText>
               {bio}
              </MDBCardText>
              <MDBCardText>
              Hiraeble {" "}
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
                <li>
                {company && <Fragment>
                    <strong>Company name</strong>
                        {company}
                </Fragment>
                }
                </li>
                <li>
                {company && <Fragment>
                    <strong>Company name</strong>
                        {company}
                </Fragment>
                }
                </li>
                <li>
                {company && <Fragment>
                    <strong>Company name</strong>
                        {company}
                </Fragment>
                }
                </li>
             
            <MDBBtn  href={html_url} >
            
           
           
            Visit github proflie
        
            </MDBBtn>


              </MDBCardBody>
              </MDBCard>
            </Fragment>
        )
    }
}

export default User
