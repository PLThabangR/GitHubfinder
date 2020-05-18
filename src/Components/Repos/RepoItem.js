import React,{Fragment} from 'react'
import {  MDBCard, MDBCardBody, MDBCardText } from 'mdbreact';
const RepoItem = ({repo}) => {
    return (
        <Fragment>
        <MDBCard>
        <MDBCardBody>
        <MDBCardText>
        <a href={repo.html_url}>{repo.name} </a>
        </ MDBCardText>
        </MDBCardBody>
        </MDBCard>
            <br></br>
        </Fragment>
    )
}

export default RepoItem
