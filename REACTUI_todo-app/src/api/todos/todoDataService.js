import axios from 'axios';
import {API_URL,JPA_API_URL} from '../../Constant.js'
class TodoDataService
{
    getAllTodos(name)
    {
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }

    deleteTodoItem(id,username)
    {
       return axios.delete( `${JPA_API_URL}/users/${username}/todos/${id}`);
    }

    retriveTodo(name,id)
    {
        return axios.get(`${JPA_API_URL}/users/${name}/todo/${id}`);
    }

    updateTodo(name,id,todo)
    {
        return axios.put(`${JPA_API_URL}/users/${name}/todo/${id}`,todo);
    }

    createTodo(name,todo)
    {
        return axios.post(`${JPA_API_URL}/users/${name}/todo/`,todo);
    }

    
}

export default new TodoDataService();