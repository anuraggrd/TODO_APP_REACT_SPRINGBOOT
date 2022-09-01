import logo from './logo.svg';
import './App.css';
import  React,{Component} from 'react';
import Counter from './components/counter/Counter';
import TodoApp from './components/TodoApp/TodoApp';
import { render } from '@testing-library/react';

//import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{

  render(){

    return (
      <div className ="App">
        {/* <Counter/>  */} 
        <TodoApp/>
      </div>
    );
  }
}


class LearningCoponent extends Component
{

  render()
  {
   return ( 
   <div class= "LearningComponents">


    </div>)
  }
}




export default App;
