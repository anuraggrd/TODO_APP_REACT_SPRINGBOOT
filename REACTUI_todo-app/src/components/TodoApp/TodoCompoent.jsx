import { ErrorMessage, Field, Form, Formik } from 'formik';
import moment from 'moment';
import React,{Component}  from 'react';
import TodoDataService from '../../api/todos/todoDataService.js'

import AuthenticationService from './AuthenticationService.js';


class TodoComponent extends Component{

    constructor(props)
    {
        super(props);
        this.state = {

            id:this.props.params.id,
            description:'',
            targetDate : moment(new Date()).format('YYYY-MM-DD'),
            done: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this); 
    }
    componentDidMount()
    {
        if(this.state.id === -1)
        {
            return;
        }else{
        let username = AuthenticationService.loggedinUserName();
        TodoDataService.retriveTodo(username,this.state.id).
        then(response =>{
            this.setState({
                description  :response.data.description,
                targetDate  :moment(response.data.targetDate).format('YYYY-MM-DD'),
                done  :response.data.done

                
            })
           // console.log(response.data.done)
        }
        )
        }
    }

    validate(values)
    {
        let errors ={}
        if(!values.description){
            errors.description = 'Enter a Description'
        }else if(values.description.length <5){
            errors.description = 'Enter atleast 5 characters in Description'
        }

        if(!moment(values.targetDate).isValid())
        {
            errors.targetDate = "Enter a valid target Date"
        }
        return errors
    }

    onSubmit(values)
    {
        let username = AuthenticationService.loggedinUserName();
       let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate,
            done:values.done
        }

        if (this.state.id == -1) {

            TodoDataService.createTodo(username, todo).then(() => this.props.navigate("/todos"))
           // console.log(values)
        } else {
            let username = AuthenticationService.loggedinUserName();
            TodoDataService.updateTodo(username, this.state.id,todo).then(() => this.props.navigate("/todos"))
            //console.log(values)
        }
    }
    render()
    {
        let description = this.state.description;
        let targetDate = this.state.targetDate;
        let done = this.state.done;
        return(
            <div className = "TodoComponent">
                <h1>TODO</h1>
                {/*<h1>Welcome in todo List of id : {this.props.params.id} </h1>*/}
                <div className='container'>
                <Formik
                        initialValues={{
                            description, targetDate,done
                            /*it takes name:value    pair if name and value  have same spelling the we use only keys it works perfactly*/

                        }}
                onSubmit ={this.onSubmit}
                validateOnChange = {false}
                validateOnBlur = {false}
                validate = {this.validate}
                enableReinitialize = {true}
                >
                    {
                        (props) => (
                           /* <div>something</div>*/
                            <Form>
                                <ErrorMessage name="description" component ="div" className = "alert alert-warning"/>
                                <ErrorMessage name="targetDate" component ="div" className = "alert alert-warning"/>
                                <fieldset className='form-group'>
                                    <label>Description</label>
                                        <Field className = "form-control" type = "text" name = "description"/>
                                </fieldset>

                                <fieldset className='form-group'>
                                    <label> TargetDate</label>
                                        <Field className = "form-control" type = "date" name = "targetDate"/>
                                   
                                </fieldset>
                                <fieldset className='form-group'>
                                    <label> IsCompleted</label>
                                        <Field className = "form-control" type = "text" name = "done"/>
                                   
                                </fieldset>
                                <br/>
                                <button className='btn btn-success' type="submit"> Save</button>
                            </Form>
                            )
                    }
                 

                </Formik>
                </div>
            </div>
        );
    }

}

export default TodoComponent;