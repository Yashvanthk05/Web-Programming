import React,{Component} from "react";

export class ToggleSwitch extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle:false,
        }
    }
    toggleSwitch=()=>{
        this.setState((prevState)=>({
            toggle:!prevState.toggle,
        }))
    }
    render(){
        return(
            <div className="card">
                <h1>Toggler: {this.state.toggle?'ON':'OFF'}</h1>
                <button className="btn" onClick={()=>this.toggleSwitch()}>Toggle</button>
            </div>
        )
    }
}