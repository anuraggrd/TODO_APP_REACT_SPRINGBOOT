import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{

    constructor(props)
    {
        super(props);
        
        this.state = {
            userName : "Anurag",
            password : "",
            hasLoginFailed: false,
            showloginMsg : false

        }
    //     this.handleUserNameChange = this.handleUserNameChange.bind(this);
    //    this.handlePasswordChange = this.handlePasswordChange.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.loginClicked = this.loginClicked.bind(this);
    }
    render()
    {
        return (
            
            <div className = "LoginComponent">
                <h1>Login</h1>
                <div className= "container">
       { /*<ShowLoginMsgSuccess showLoginMsgVar={this.state.showloginMsg}/>*/}
    {/*<ShowLoginValidMsg hasLoginFailedVar= {this.state.hasLoginFailed}/>*/}
                {this.state.showloginMsg && <div>Login successful</div>}
                {this.state.hasLoginFailed && <div className = "alert alert-warning">Login Failed</div>}
                UserName : <input type ="text" name ="userName" value = {this.state.userName} onChange = {this.handleChange}/>
                Password : <input type ="text" name ="password" value = {this.state.password} onChange = {this.handleChange}/>
                <button className = "btn btn-success" onClick={this.loginClicked}>Login</button>
                
                </div> 
            </div>
        );
    }

    handleChange(event)
    {
        //console.log(event.target.name);

        this.setState ({
        [event.target.name] : event.target.value
        })
    }
    loginClicked()
    {

        //console.log(this.state);
        // if(this.state.userName === 'Anurag' && this.state.password === '123')
        // {
        //     //console.log("successful")
        //    // this.props.history.push("/welcome")

        //    AuthenticationService.registerSucessfulLogedIN(this.state.userName,this.state.password);
        //    this.props.navigate(`/welcome/${this.state.userName}`)
        //     this.setState({hasLoginFailed: false})
        //     this.setState({showloginMsg: true})
            
            
        // }else
        // {
        //     console.log("Falied")
        //     this.setState({hasLoginFailed: true})
        //     this.setState({showloginMsg: false})

        // }

        // AuthenticationService.
        // executeBasicAuthenticationService(this.state.userName,this.state.password)
        // .then(()=>{
        //     AuthenticationService.registerSucessfulLogedIN(this.state.userName,this.state.password);
        //     this.props.navigate(`/welcome/${this.state.userName}`)
        //     this.setState({hasLoginFailed: false})
        //     this.setState({showloginMsg: true})
        // })
        // .catch(()=>{
        //     this.setState({hasLoginFailed: true})
        //     this.setState({showloginMsg: false})

        // })


        AuthenticationService.
        executeJwtAuthenticationService(this.state.userName,this.state.password)
        .then((response)=>{
            AuthenticationService.registerSucessfulLoginForJwtToken(this.state.userName,response.data.token);
            this.props.navigate(`/welcome/${this.state.userName}`)
            this.setState({hasLoginFailed: false})
            this.setState({showloginMsg: true})
        })
        .catch(()=>{
            this.setState({hasLoginFailed: true})
            this.setState({showloginMsg: false})

        })

    }

   /* handleUserNameChange(event)
    {
       // console.log(event.target.value);

        this.setState ({
            userName : event.target.value
        })
    }*/

    
   /* handlePasswordChange(event)
    {
       // console.log(event.target.value);

        this.setState ({
            password : event.target.value
        })
    }*/

    
}



function ShowLoginMsgSuccess(props)
{
    if(props.showLoginMsgVar)
    {
        return (<div>Login successful</div>);
    }
    return null;
}

function ShowLoginValidMsg(props)
{
    if(props.hasLoginFailedVar)
    {
        return (<div>Login Failed</div>);
    }
    return null;
}

export default LoginComponent;