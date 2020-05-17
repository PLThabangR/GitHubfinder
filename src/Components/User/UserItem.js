import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'
const CardExample = ({user}) => {
  
  return (
    <MDBCol style={{ maxWidth: "22rem" }} >
      <MDBCard>
        <MDBCardImage className="img-fluid" src={user.avatar_url} waves />
        <MDBCardBody>
          <MDBCardTitle>{user.login}</MDBCardTitle>
          <MDBCardText>{user.bio}</MDBCardText>
          <MDBBtn >
          <Link  to={`/User/${user.login}`}>
          More info
          </Link>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;