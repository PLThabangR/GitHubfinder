import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

class FormPage extends Component {
state={
    text:''
};
 
onChange=(e)=>{
this.setState({[e.target.name]:e.target.value});
}

onSubmit =(e)=>{
  e.preventDefault();
  if(this.state.text===''){
    console.log("stiil in de alert")
    this.props.setAlert('Please enter something')
  }else{
   
    this.props.searchUsers(this.state.text);
    this.setState({text:''});
}
}


render(){
  const {showClear,clearUsers} =this.props;
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form  onSubmit={this.onSubmit}>
      
        <div className="grey-text">
          <MDBInput label="Search github users" icon="user"  type="text" validate error="wrong"
            success="right"  name="text" value={this.state.text} onChange={this.onChange} />
        
        </div>
        <div className="text-center">
          <MDBBtn block outline color="info" value="search" type="submit">
            Search
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
      <br></br>
      {showClear && (

        <div className="text-center">
        <MDBBtn block outline color="info"  onClick={clearUsers}>
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
};

export default FormPage;