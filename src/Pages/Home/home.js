import React from 'react';
import Nav from '../../components/Nav/nav';
import {Outlet} from 'react-router-dom';
import './home.scss';





export default function Home(){
    //navigate('/login')
    return(
        <div className="home">
            <Nav/>
            <div>
                <Outlet/>
            </div>
        </div>)
};