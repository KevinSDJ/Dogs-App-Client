import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './login.scss';
import axios from 'axios';





export default function Login() {
    const [state,setState]= useState({
        email:"",
        password:""
    })
    
    let navigate= useNavigate()
    function handleChange(e){
        setState(prev=>{
            let r={...prev,[e.target.name]:e.target.value}
            return r
        })
    }
    

    function onsubmit(e){
        e.preventDefault()
        axios.post('https://ksdj-dogs-api.herokuapp.com/login',state,{withCredentials:true})
        .then(res=>{
            navigate("/home")
        })
        .catch(e=>navigate('/register'))
    }
    
    return (
        <div className="l_block">
            <div className="l_subBlock1"></div>
            <div className="l_subBlock2"></div>
            <div className="l_c_content">
                <form className="l_form" onSubmit={onsubmit} autoComplete="off">
                    <div className="l_img_cont"></div>
                    <div className="l_img_cont"></div>
                    <div className="l_dt_section">
                        <label htmlFor="email">
                            Email:
                            <input id="email" name="email" type="email" onChange={handleChange} required />
                        </label>
                        <label htmlFor="password">
                            Password:
                            <input id="password" name="password" type="password" onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="l_btn_group">
                        <button type="submit" >login</button>
                        <button className="l_btn_cancel" type="button" onClick={()=>navigate('/')}>cancel</button>
                    </div>
                </form>
            </div>
        </div>)
    
    
}