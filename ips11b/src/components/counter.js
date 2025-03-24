import React,{Component} from "react";

export class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    increment=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1,
        }));
    };
    decrement=()=>{
        this.setState((prevState)=>({
            count:prevState.count-1,
        }));
    };
    render(){
        return(
            <div className="card">
                <h1>Count Value: {this.state.count}</h1>
                <br/>
                <button className="btn" onClick={()=>this.decrement()}>Decrement</button>
                <button className="btn" onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}