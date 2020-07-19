import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLogedin()){
            return <Route {...this.props}/>
        }
        else{
            return <Redirect to="/login"/>
        }
    }
}
export default AuthenticatedRoute