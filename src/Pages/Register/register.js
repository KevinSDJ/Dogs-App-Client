import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Register.scss';
import axios from 'axios';





export default function Register() {
    const [state,setState]= useState({
        username:"",
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
        let {username,email,password}= state
        axios.post('http://localhost:3001/register',{username,email,password},{withCredentials:true})
        .then(res=> navigate("/login"))
    }

    return (
        <div className="r_block">
            <div className="r_subBlock1"></div>
            <div className="r_subBlock2"></div>
            <div className="r_c_content">
                <form className="r_form" onSubmit={onsubmit} autoComplete="off">
                    <div className="r_img_cont"></div>
                    <div className="r_dt_section">
                        <label htmlFor="username">
                            Username:
                            <input id="username" name="username" type="text"  onChange={handleChange} required/>
                        </label>
                        <label htmlFor="email">
                            Email:
                            <input id="email" name="email" type="email" onChange={handleChange} required />
                        </label>
                        <label htmlFor="password">
                            Password:
                            <input id="password" name="password" type="password" onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="r_btn_group">
                        <button type="submit">register</button>
                        <button className="r_btn_cancel" type="button" onClick={()=>navigate('/')}>cancel</button>
                    </div>
                </form>
            </div>
        </div>)
}