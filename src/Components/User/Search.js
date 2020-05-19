import React, {useState,useContext} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import GithubContext from '../../Context/github/githubContext';
import Alertcontext from '../../Context/AlertContext/AlertContext';
const FormPage =(showAlert)=> {

  const githubContext =useContext(GithubContext);
  const alertContext  =useContext(Alertcontext)
  const[text,setText] =useState('');
 
const onChange=(e)=>{
setText(e.target.value);
}

const onSubmit =(e)=>{
  e.preventDefault();
  if(text===''){
   alertContext.setAlert('Please enter something');
  
  }else{
    githubContext.searchUsers(text);
    setText('');
}
}

return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form  onSubmit={onSubmit}>
      
        <div className="grey-text">
          <MDBInput label="Search github users" icon="user"  type="text" validate error="wrong"
            success="right"  name="text" value={text} onChange={onChange} />
        
        </div>
        <div className="text-center">
          <MDBBtn block outline color="info" value="search" type="submit">
            Search
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
      <br></br>
      {githubContext.users.length > 0 && (

        <div className="text-center">
        <MDBBtn block outline color="info"  onClick={githubContext.clearUsers}>
          Clear
          <MDBIcon far icon="window-minimize"  className="ml-1" />
        </MDBBtn>
        <br></br>
      </div>
      
      )}
     

    </MDBCol>
  </MDBRow>
</MDBContainer>
);
  }


export default FormPage;