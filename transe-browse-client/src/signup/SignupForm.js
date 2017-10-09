import React, { Component } from "react";
import {PropTypes as PT} from "prop-types";
import Button from "./../common/Button";

class SignupForm extends Compoent{

    static propTypes ={
        processing : PT.bool,
        errors : PT.object,
        email : PT.string,
        password :PT.string,
        pause : PT.bool,
        signup : PT.func,
        onChangeHandle : PT.func
    }

    static propTypes ={
        processing : false,
        errors : {},
        email : "",
        password : "",
        pause : true,
        signup : ()=>{},
        onChangeHandle : PT.func
    }

    constructor(pros){
        super(props);
    }

    onChangeHandle(e){
        this.props.onChangeHandle({[e.target.name]: e.target.value});
    }

    submit(e){
        e.preventDefault();
        this.props.signup({email: this.props.email, password: this.props.password});ks
    }

    render(){
        const { processing, errors, email, password, pause } = this.props;
        const error_mail =(errors.email === "") ? null : errors.email;
        const error_password = (errors.password === "") ? null : errors.password;

        return(
            <form>
                </form>
        )
    }

}