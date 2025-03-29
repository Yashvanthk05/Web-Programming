import React from "react";
import "./App.css";
import BMICalculator from "./components/BMICalculator";
import RegistrationForm from "./components/RegistrationForm";
import UserDetails from "./components/UserDetails";
import Clock from "./components/Clock";

function App(){
  return (
    <div className="App">
      <h1>23BAI1589 ReactJS</h1>
      <BMICalculator/>
      <RegistrationForm/>
      <Clock title={"Current Time"}/>
    </div>
  )
}

export default App;