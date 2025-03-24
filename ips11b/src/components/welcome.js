import React,{Component} from "react";

export class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={name:'Yashvanth'};
    }
    render(){
        return(
            <div className="card">
                <h1>Welcome Message</h1>
                <h2>Hello, {this.state.name}</h2>
            </div>
        )
    }
}