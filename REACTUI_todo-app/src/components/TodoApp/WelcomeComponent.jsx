import React,{Component} from 'react';
import withParams from './withParams.jsx';
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todos/HelloworldService.js';

class WelcomeComponent extends Component{

  constructor(props)
  {
    super(props)
    this.getMsg = this.getMsg.bind(this)
    this.state = {
      welcomeMsg : ''
    }
    this.handleSuccessResponseMsg = this.handleSuccessResponseMsg.bind(this);
    this.handleErrorMsg = this.handleErrorMsg.bind(this);
  }
    render()
    {
      return(
        <div>
          <h1>Welcome!</h1>
          <div className ="container">
              Welcome {this.props.params.name}. You can manage your To do from <Link to ="/todos">here</Link>
          </div>
          <div className ="container">
             click here to get a customize Welcome message
             <button className='btn btn-success' onClick={this.getMsg}> Get Welcome Message</button>
             
          </div>
          <div>{this.state.welcomeMsg}</div>
        </div>
      );
    }

    getMsg()
    {
    /*  //console.log("message here");
      HelloWorldService.executeHelloWorldService()
      .then(response => this.handleSuccessResponseMsg(response))
      //.catch()*/

      //console.log("message here"); executeHelloWorldPathVariableService
     /* HelloWorldService.executeHelloWorldServiceBean()
      .then(response => this.handleSuccessResponseMsg(response))
      //.catch()*/

      HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
      .then(response => this.handleSuccessResponseMsg(response))
      .catch( error => this.handleErrorMsg(error))
    }

    handleSuccessResponseMsg(response)
    {
        this.setState({
          welcomeMsg : response.data.message
        });
    }

    handleErrorMsg(error)
    {
      console.log(error)
      let errorMsg = '';
      if(error.message)
      {
        errorMsg += error.message;
      }

      if(error.response && error.response.data)
      {
        errorMsg += error.response.data.message;
      }

      this.setState({
        welcomeMsg : errorMsg
      });
    }
  }
export default WelcomeComponent;