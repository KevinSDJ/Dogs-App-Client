import React, { useEffect, useReducer } from 'react';
import Nav from '../../components/Nav/nav';
import {Outlet} from 'react-router-dom';
import './home.scss';
import {useSelector} from 'react-redux'




export default function Home(){
    let {userData}=useSelector(state=>state)
    useEffect(()=>{
        if(userData){
            console.log(useReducer)
        }
    },[userData])
    return(
        <div className="home">
            <Nav/>
            <div>
                <Outlet/>
            </div>
        </div>)
};