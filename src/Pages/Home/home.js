import React, { useEffect, useReducer } from 'react';
import Nav from '../../components/Nav/nav';
import {Outlet} from 'react-router-dom';
import './home.scss';
import {useSelector} from 'react-redux'




export default function Home(){
    let {user}=useSelector(state=>state)
    useEffect(()=>{
        if(user){
            console.log(useReducer)
        }
    },[user])
    return(
        <div className="home">
            <Nav/>
            <div>
                <Outlet/>
            </div>
        </div>)
};