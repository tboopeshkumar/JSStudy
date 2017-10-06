import React, { Component} from 'react';
import {PropTypes as PT } from "prop-types";
import FormGroup from "../common/forms/FormGroup"
export class LoginForm extends Component{

    static propTypes={
        processing : PT.bool,
        email : PT.string,
        password : PT.string, 
        login : PT.func,
    }

    static defaultProps={
        email :'',
        password : '',
        login : ()=> {}
    }

    constructor(props){
        super(props);
    }

    submit(e){
        e.preventDefault();
        this.props.login({email: this.props.email, password : this.props.password});
    }

    render(){
        const { email, password } = this.props;
        return (
           <form>
               <h2>Login</h2>
               <hr/>
               <input className="form-control"
               name="email"
               value={email}               
               />
           </form>
        );
    }
}