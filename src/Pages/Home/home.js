import React, { useEffect, useReducer } from 'react';
import {Outlet} from 'react-router-dom';
import './home.scss';
import {useSelector} from 'react-redux'




export default function Home(){
    let {userData}=useSelector(state=>state)
    return(
        <div className="home">
            <div>
                <Outlet/>
            </div>
        </div>)
};