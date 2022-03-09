import React, { useState,useLayoutEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './Register.scss';
import {registerUser} from '../../redux/actions/actionsF.js'
import {useDispatch,useSelector} from 'react-redux';
import Modal from './../../components/utilities/modal'





export default function Register() {
    const [state,setState]= useState({
        username:"",
        email:"",
        password:""
    })
    let {response}=useSelector(state=>state)
    let dispatch= useDispatch()
    let navigate= useNavigate()
    function handleChange(e){
        setState(prev=>{
            let r={...prev,[e.target.name]:e.target.value}
            return r
        })
    }

    function onsubmit(e){
        e.preventDefault()
        dispatch(registerUser(state))
        setState(prev=>{return {...prev,username:'',email:'',password:''}})
    }
    return (
        <div id="registerContent">
               <Modal response={response} redirectEnd={response.type==="success"?'/login':null}/>
                <form id="r_form" onSubmit={onsubmit} autoComplete="on">
                    <div id="r_img_cont"></div>
                    <div id="r_dt_section">
                        <label htmlFor="username">
                            Username:
                            <input id="username" value={state.username} name="username" type="text"  onChange={handleChange} required/>
                        </label>
                        <label htmlFor="email">
                            Email:
                            <input id="email" name="email" value={state.email} type="email" onChange={handleChange} required />
                        </label>
                        <label htmlFor="password">
                            Password:
                            <input id="password" name="password" value={state.password} type="password" onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="r_btn_group">
                        <button type="submit">register</button>
                        <button className="r_btn_cancel" type="button" onClick={()=>navigate('/')}>cancel</button>
                    </div>
                </form>
            </div>)
}