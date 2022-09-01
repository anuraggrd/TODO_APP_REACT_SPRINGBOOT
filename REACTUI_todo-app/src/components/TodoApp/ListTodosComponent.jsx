import React,{Component}  from 'react';
import TodoDataService from '../../api/todos/todoDataService.js'

import AuthenticationService from './AuthenticationService.js';
import moment from 'moment';
class Todos extends Component{

    constructor(props)
    {
        
        super(props);
        this.state ={
           
            message : null,
            listtodo : [
               /*{id:1,description:'Go to in28Minutes Classess', done:false.toString()},
                {id:2,description:'become Expert in react',done:false.toString()},
                {id:3,description:'make project',done:false.toString()},
                {id:4,description:'get a job',done:false.toString()}*/
            ]
        

        }

        this.clickedDeleteTodo = this.clickedDeleteTodo.bind(this); 
        this.clickedUpdateTodo = this.clickedUpdateTodo.bind(this); 
        this.clickedAddTodo = this.clickedAddTodo.bind(this); 
        this.refresh = this.refresh.bind(this)
    }

    componentDidMount()
    {
        this.refresh();
        /**/
    }
    clickedUpdateTodo(id)
    {
        console.log('update' +id)
        this.props.navigate(`/todos/${id}`)
       /* let user = AuthenticationService.loggedinUserName()
            TodoDataService.deleteTodoItem(id,user)
            .then(response=> {
                this.setState({ message : ` deleted todo ${id} successful !!`});
                this.refresh();

            })*/
    }
    clickedAddTodo()
    {
        //console.log('update' +id)
        this.props.navigate(`/todos/-1`)
       /* let user = AuthenticationService.loggedinUserName()
            TodoDataService.deleteTodoItem(id,user)
            .then(response=> {
                this.setState({ message : ` deleted todo ${id} successful !!`});
                this.refresh();

            })*/
    }
    clickedDeleteTodo(id)
        {
            let user = AuthenticationService.loggedinUserName()
            TodoDataService.deleteTodoItem(id,user)
            .then(response=> {
                this.setState({ message : ` deleted todo ${id} successful !!`});
                this.refresh();

            })
        }
        refresh()
        {
            console.log("refresh button");
            let user = AuthenticationService.loggedinUserName()
        TodoDataService.getAllTodos(user)
        .then(response => {
           //
            //console.log(response.data)
            this.setState({
                listtodo : response.data
            });
        })
        }

    render()
    {
        var date = new Date().toDateString();
        return(

            <div> 
                <h1>List of Todos</h1>
             {this.state.message && <div className = "alert alert-success">{this.state.message}</div>}
                <div className='container'>
                <div><td><button className="btn btn-success" onClick ={this.clickedAddTodo}>Add</button></td></div>
                <table className = "table" >
                            <thead>
                                <tr><th>Id</th><th>Description</th>
                                <th>Is Completed</th><th>TargetDate</th>
                                <th>Update</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.listtodo.map(
                                    todo =>
                                    
                                    <tr key= {todo.id}>
                                        
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>  {moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                        <td><button className="btn btn-success" onClick ={()=> this.clickedUpdateTodo(todo.id)}>UPDATE</button></td>
                                        <td><button className="btn btn-warning" onClick ={()=> this.clickedDeleteTodo(todo.id)}>DELETE</button></td>
                                        
                                        </tr>
                                        
                                      
                                )

                                        }
                            </tbody>
                            
                </table>
                
                </div>
            </div>
        );
    }
}

export default Todos;