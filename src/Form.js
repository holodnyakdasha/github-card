import React from "react";
import axios from "axios";
import App from "./App";

class Form extends React.Component{
    state = {userName: ''}
    handleSubmit = (event)=>{
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`).then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({userName: ''});
        });

    };
    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <input type='text' className={'search_input'}
                       value={this.state.userName}
                       onChange={(event)=> this.setState({userName: event.target.value})}
                       placeholder={"Github user name"} required/>
                <button type={'submit'}>Add card</button>
            </form>
        );
    }

}

export default Form;