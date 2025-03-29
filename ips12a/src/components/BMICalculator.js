import React, { useEffect, useState } from "react";

function BMICalculator(){
    const [weight,setWeight]=useState(0);
    const [height,setHeight]=useState(0);
    const [BMI,setBMI]=useState(0);
    useEffect(()=>{
        const heightinm=height/100;
        if(weight>0 && heightinm>0){
            const res=weight/(heightinm*heightinm);
            setBMI(res);
        }else{
            setBMI(0);
        }
    },[weight,height]);

    return(
        <div className="card">
            <p className="card-title">Q1. BMI Calculator</p>
            <input type="number" placeholder="Enter Height(in cm)" onChange={(e)=>setHeight(e.target.value)}/>
            <input type="number" placeholder="Enter Weight(in kg)" onChange={(e)=>setWeight(e.target.value)}/>
            <p>BMI: {BMI}</p>
        </div>
    );
}

export default BMICalculator;