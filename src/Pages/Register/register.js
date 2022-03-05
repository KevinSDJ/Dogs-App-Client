import React, { useState,useLayoutEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './Register.scss';
import {registerUser} from '../../redux/actions/actionsF.js'
import {useDispatch,useSelector} from 'react-redux';





export default function Register() {
    const [state,setState]= useState({
        username:"",
        email:"",
        password:""
    })
    let {reg,login}=useSelector(state=>state)
    let dispatch= useDispatch()
    let navigate= useNavigate()
    function handleChange(e){
        setState(prev=>{
            let r={...prev,[e.target.name]:e.target.value}
            return r
        })
    }
    useLayoutEffect(()=>{
        if(reg){
            navigate('/login')
        }
        if(login){
            navigate('/home')
        }
    },[navigate, reg,login])

    function onsubmit(e){
        e.preventDefault()
        dispatch(registerUser(state))
    }
    return (
        <div id="registerContent">
                <form id="r_form" onSubmit={onsubmit} autoComplete="off">
                    <div id="r_img_cont"></div>
                    <div id="r_dt_section">
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
            </div>)
}