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
    this.props.searchUsers(this.state.text);
    this.setState({text:''});
}

render(){
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
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
    }
};

export default FormPage;