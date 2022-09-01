import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import withNavigation from './WithNavigation';
import ErrorComponent from './ErrorComponent';
import withParams from './withParams';
import ListTodosComponent from './ListTodosComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import TodoComponent from './TodoCompoent';

class TodoApp extends Component{

    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const TodoComponentWithParamsWithComponent= withParams(withNavigation(TodoComponent));
        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent) 
        return (
            <div className = "TodoApp">
              <Router>

              <HeaderComponentWithNavigation/>
                    <Routes>
                        
                            <Route path="/" element={<LoginComponentWithNavigation />} />
                            <Route path="/login" element={<LoginComponentWithNavigation />} />
                        {/* <Route path ="/login"  element={<LoginComponent/>}/>
                            <Route path ="/welcome/:name"  element={<WelcomeComponent/>}/>*/}
                            <Route path ="/welcome/:name"  element={<AuthenticatedRoute><WelcomeComponentWithParams/></AuthenticatedRoute>}/>
                            <Route path ="/todos/:id"  element={<AuthenticatedRoute><TodoComponentWithParamsWithComponent/></AuthenticatedRoute>}/>
                            <Route path ="/todos"  element={<AuthenticatedRoute><ListTodosComponentWithNavigation/></AuthenticatedRoute>}/>
                        {/*<Route path ="/todos/:id"  element={<AuthenticatedRoute><TodosComponent/></AuthenticatedRoute>}/>*/}
                         <Route path ="/logout"  element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>
                        
                            <Route path="*" element={<ErrorComponent />} />
                            
                           
                    </Routes>
                    <FooterComponent/>
                </Router>

                {/*<LoginComponent/>
                <WelcomeComponent/>*/}

            </div>
        );

    }
}

   

export default TodoApp;