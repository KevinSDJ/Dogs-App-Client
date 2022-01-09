import React from 'react';
import './errorMsg.scss';



export default function MsgError({msg}){
    if(msg){
        return(
        <div className="s_err_cont">
            <div>x</div>
            <h3>!{msg}</h3>
            <p>enter the name correctly</p>
        </div>)
    }else{
        return null
    }
}