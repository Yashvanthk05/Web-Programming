import React,{useState} from "react";
import styles from '../style.module.css'
import styled from "styled-components";

const Button=styled.button`
  font-size: 32px;
  background-color: white;
  border: none;
  border-radius: 10px;
`

export default function ThemeSwitcher(){
    const[lightmode,setLightMode]=useState(true);
    return(
        <div className={styles.thememain} style={lightmode?{border:"2px solid dodgerblue",background:"white"}:{border:"2px solid darkslateblue",background:"black"}}>
            <div className={styles.themenav} style={lightmode?{backgroundColor:"dodgerblue",color:"white"}:{backgroundColor:"mediumslateblue"}}>
                {lightmode?"Light Mode":"Dark Mode"}
            <Button onClick={()=>setLightMode((prev)=>!prev)}>
                    {lightmode?"☀️":"🌙"}
                </Button>
            </div>
            <p style={lightmode?{color:"black",fontSize:24}:{color:"white",fontSize:24}}>ThemeSwitcher.js</p>
        </div>
    )
}