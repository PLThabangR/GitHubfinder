import React,{useContext} from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import AlertContext from '../../Context/AlertContext/AlertContext';
const AlertPage = () => {
  const alertContext =useContext(AlertContext);

  const {alert} =alertContext
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