import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import { LoginForm } from '../login/LoginForm'

export class Main extends Component{
    render(){
        return (
           <Switch>
               {<Route path='/login' component={LoginForm}/>}
            </Switch>
        );
    }
}