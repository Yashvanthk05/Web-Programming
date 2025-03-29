import React,{useState,useEffect} from "react";

function Clock(props){
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const id=setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
        return ()=>clearInterval(id);
    },[])
    return(
        <div className="card">
            <p className="card-title">Q3. {props.title||"Clock"}</p>
            <span style={{fontSize:24,fontWeight:700}}>{time}</span>
        </div>
    );
}

export default Clock;