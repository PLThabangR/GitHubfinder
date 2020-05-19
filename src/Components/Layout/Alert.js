import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

const AlertPage = ({alert}) => {
  return (
      alert !==  null && (
    <MDBContainer>
      
      <MDBAlert color="danger" >
     
        {alert.msg}
      </MDBAlert>
      
    </MDBContainer>
      )
  );
};

export default AlertPage;