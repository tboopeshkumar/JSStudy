import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import { Login } from '../login/login'

export class Main extends Component{
    render(){
        return (
           <Switch>
               <Route path='/login' component={Login}/>
            </Switch>
        );
    }
}