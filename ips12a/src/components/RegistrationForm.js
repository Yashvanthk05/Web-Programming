import React,{useState} from "react";
import UserDetails from "./UserDetails";

function RegistrationForm(){
    const [userDetail,setUserDetail]=useState({name:"",email:"",password:""});
    const [submitted,setSubmitted]=useState(null);

    const handleChange=(e)=>{
        setUserDetail({...userDetail,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted({name:userDetail.name,email:userDetail.email,password:userDetail.password})
        setUserDetail({name:"",email:"",password:""});
    }

    return(
        <div className="card">
            <p className="card-title">Q2. Registration Form</p>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Name" type="text" name="name" onChange={(e)=>handleChange(e)} required/>
                <input placeholder="Enter Email" type="email" name="email" onChange={(e)=>handleChange(e)} required/>
                <input placeholder="Enter Password" type="password" name="password" onChange={(e)=>handleChange(e)} required/>
                <button type="submit">Submit</button>
            </form>
            {submitted && <UserDetails user={submitted}/>}
        </div>
    )
}

export default RegistrationForm;