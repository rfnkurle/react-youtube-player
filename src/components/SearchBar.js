import React, {Component}from "react";
import styled from 'styled-components'
import {Form, FormGroup, Label, Input} from 'reactstrap'

const FormWrapper = styled(FormGroup)`
    position: relative;
    span {
        color: red;
        font-size: 24px;
        font-weight: 700;
        position: absolute;
        right: 10px;
        top: -2 px;
        :hover{
            color: darkred;
            cursor: pointer;
        }
    }

`

class SearchBar extends Component{
    state ={
        term: ""
    }

handleInputChange = (event) =>{
    //update state value for "term"
    this.setState({ term: event.target.value}); 
    //if we want to use 
    this.props.searchYouTube(event.target.value);
    

}

    render(){
        return (
                //form needs to be able to alter and update state of term
            <Form onSubmit={(event) => event.preventDefault()}>
                <FormWrapper>
                    <Label 
                    for="youTubeSearch" 
                    hidden>YouTube Search</Label>
                    <Input 
                    type="text" 
                    name="youTubeSearch" 
                    id="youTubeSearch" 
                    placeholder="Search Artist" 
                    value={this.state.term}
                    onChange={this.handleInputChange}
                    />
                    {/* <span onClick={() => this.setState({term: ""})}>x</span> */}
                </FormWrapper>
            </Form>
        )
        
    }

};



   



export default SearchBar;