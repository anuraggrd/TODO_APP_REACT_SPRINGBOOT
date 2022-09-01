import React ,{Component}from 'react'
import './Counter.css'


class Counter extends Component
{
    constructor()
    {
        super();
        this.state ={
            counter :0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render(){

        return (
          <div className ="counter">
              <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
              <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
              <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>  
              <CounterButton by = {100} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>  
              <span className = "counts">{this.state.counter}</span>
              <div >
                <button className="reset" onClick = {this.reset}>Reset</button>
              </div>
          </div>
        );
      }

      reset()
      {
        this.setState(
            {
                counter :0
            }
        );
      }

      increment(incrementBy){ //update state -- counter by 1 
       // console.log(`increment from parent- ${by}`);
 
         this.setState(
          (prevState)=>{
              return {counter : prevState.counter + incrementBy}
          }
         );
     }

     decrement(decrementBy){ //update state -- counter by 1 
        // console.log(`increment from parent- ${by}`);
  
          this.setState(
           (prevState)=>{
               return {counter : prevState.counter - decrementBy}
           }
          );
      }
}

class CounterButton extends Component
{
    //Define the initial state in a constructor
    // constructor()
    // {
    //     super();
    //     this.state ={
    //         counter :0
    //     }
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }
    render(){
        return(
            <div className= "counterButton">
            <button onClick ={ ()=> {this.props.incrementMethod(this.props.by)}}>+{this.props.by}</button> 
            <button onClick = {() =>{this.props.decrementMethod(this.props.by)}}>-{this.props.by}</button> 
          {/*  <span className = "counts">{this.state.counter}</span>*/}
            </div>
        );
    }// end of render method
    

    // increment(){ //update state -- counter by 1 
    //     //console.log("increment");

    //     this.setState(
    //     (prevState)=> {
    //         return {counter : prevState.counter + this.props.by}
    //     }
    //    );

    //    this.props.incrementMethod(this.props.by);
    // }

    // decrement(){ //update state -- counter by 1 
    //     //console.log("increment");

    //     this.setState(
    //     (prevState)=> {
    //         return {counter : prevState.counter - this.props.by}
    //     }
    //    );

    //    this.props.decrementMethod(this.props.by);
    // }


}


export default Counter;