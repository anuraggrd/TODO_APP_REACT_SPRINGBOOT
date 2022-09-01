import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService';


class HeaderComponent extends Component{

    render()
    {
       const isuserLogedIn = AuthenticationService.isUserLogedIn()
       let username = AuthenticationService.loggedinUserName();
      // console.log(isuserLogedIn)
        return(
            <header>
                <nav className ="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href = "www.in28minutes.com" className = "navbar-brand">In28minutes</a></div>
                    <ul className="navbar-nav">
                       {isuserLogedIn && <li><Link className="nav-Link" to ={{pathname:`/welcome/${username}`}} >Home</Link></li>} 
                        {isuserLogedIn &&<li><Link className="nav-Link" to ="/todos">Todos</Link></li>}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isuserLogedIn && <li><Link className="nav-Link" to ="/login">Login</Link></li>}
                        {isuserLogedIn && <li><Link className="nav-Link" to ="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}

                    </ul>
                </nav>
            </header>
        );
    }


}


export default HeaderComponent
