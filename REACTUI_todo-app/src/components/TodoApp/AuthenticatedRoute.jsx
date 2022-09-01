import React,{Component} from 'react'
import { Navigate } from 'react-router-dom'
import AuthenticationService from'./AuthenticationService.js'

class AuthenticatedRoute extends Component{

    render(){
        if(AuthenticationService.isUserLogedIn()){
           // <Route{... this.props}/>
           return {...this.props.children}
        }else{
           // <Redirect to="/Login"/>
           return <Navigate to="/login" /> 
       }
   }
}

export default AuthenticatedRoute;