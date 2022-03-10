import React, {useEffect, useState } from 'react';
import './login.scss';
import {singIn} from '../../redux/actions/actionsF'
import {useDispatch, useSelector} from 'react-redux';
import Modal from './../../components/utilities/modal'
import {useNavigate} from 'react-router-dom'



export default function Login() {
    const [state,setState]= useState({
        email:"",
        password:""
    })
    let {session,response}=useSelector(state=>state)
    let navigate= useNavigate()
    let dispatch= useDispatch()
    function handleChange(e){
        setState(prev=>{
            let r={...prev,[e.target.name]:e.target.value}
            return r
        })
    }
    useEffect(()=>{  
        if(session){
            navigate('/home')
        }
    },[session, navigate])
    function onsubmit(e){
        e.preventDefault()
        dispatch(singIn(state))
        setState({email:'',password:''})
    }
    
    return (
        <div id="loginContent">
              <Modal response={response}  redirectEnd={response?response.type==="success"?'/home':'/register':null}/>
                <form id="l_form" onSubmit={onsubmit} >
                    <div id="l_img_cont"></div>
                    <div id="l_dt_section">
                        <label htmlFor="email">
                            Email:
                            <input id="email" name="email" type="email" onChange={handleChange} required />
                        </label>
                        <label htmlFor="password">
                            Password:
                            <input id="password" name="password" type="password" onChange={handleChange} required />
                        </label>
                    </div>
                    <div id="l_btn_group">
                        <button type="submit" >login</button>
                        <button className="l_btn_cancel" type="button" onClick={()=>navigate('/')}>cancel</button>
                    </div>
                </form>
        </div>)
    
    
}
