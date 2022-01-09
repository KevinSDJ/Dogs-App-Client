import React from "react";
import './logout.scss';
import axios from "axios";
import { useNavigate } from "react-router";



export default function Logout(){
     let navigate= useNavigate()
   
    function onsubmit(e){
        e.preventDefault()
        axios.get('http://localhost:3001/logout',{withCredentials:true})
        .then(resp=>{
            navigate('/')
        })
        .catch((e)=>{
            alert(`error al cerrar sesion  ${e}`)
        })
            
    }

    return (
        <form onSubmit={onsubmit}>
            <button type="submit" className="logout" ></button>
        </form>)
}