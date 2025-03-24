import React,{Component} from "react";

export class User extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Yashvanth',
            age:19,
        };
    };
    handleChange=(e)=>{
        this.setState(()=>({
            name:e.target.value
        }))
    }
    render(){
        
        return(
            <div className="card">
                <h1>Name: {this.state.name}<br/>Age: {this.state.age}</h1>
                <input className="in" type="text" placeholder="Enter your Name" onChange={(e)=>this.handleChange(e)} />
            </div>
        )
    }
}