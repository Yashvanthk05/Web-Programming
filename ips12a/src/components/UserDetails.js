import React from "react";

function UserDetails({ user }) {
    return (
        <div className="card" style={{backgroundColor:"white",color:"black"}}>
            <p className="card-title">UserDetails</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    );
}

export default UserDetails;