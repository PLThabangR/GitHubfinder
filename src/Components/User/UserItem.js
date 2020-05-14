import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = ({user}) => {
  
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={user.avatar_url} waves />
        <MDBCardBody>
          <MDBCardTitle>{user.name}</MDBCardTitle>
          <MDBCardText>{user.bio}</MDBCardText>
          <MDBBtn href={user.url} >Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;