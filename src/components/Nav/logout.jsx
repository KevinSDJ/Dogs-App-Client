import React from "react";
import './logout.scss';
import { useNavigate } from "react-router";
import {useDispatch} from 'react-redux'
import {closeSession} from '../../redux/actions/actionsF'



export default function Logout(){
    let navigate= useNavigate()
    let dispatch= useDispatch()
    function onsubmit(e){
        e.preventDefault()
        dispatch(closeSession())
        navigate('/')
    }

    return (
        <form onSubmit={onsubmit}>
            <button type="submit" className="logout" ></button>
        </form>)
}