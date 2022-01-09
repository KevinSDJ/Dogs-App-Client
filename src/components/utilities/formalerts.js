import React from "react";
import './formalerts.scss'

export default function Alerts(props){
    let {msg,type}=props


    if(type==="warning"){
        return(<span className="warning">{msg}</span>)
    }else if(type==="succes"){
        return (<span className="succes">{msg}</span>)
    }



}