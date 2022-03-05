import React,{useEffect}from 'react';
import {Outlet,useNavigate} from 'react-router-dom';
import './home.scss';
import { getAlldogs, setDogsUse, setTemperaments } from "../../redux/actions/actionsF"
import { useDispatch,useSelector} from "react-redux";



export default function Home(){
    let dispatch =useDispatch()
    let {login}= useSelector(state=>state)
    let navigate= useNavigate()
    useEffect(()=>{
        if(!login){
            navigate('/login')
        }
    },[login,navigate])
    useEffect(()=>{
    dispatch(getAlldogs())
    dispatch(setTemperaments())
    let temDogs=setTimeout(()=>{dispatch(setDogsUse())},(2000))

    return ()=>clearTimeout(temDogs)
  },[dispatch])
    return(
        <div className="home">
            <div>
                <Outlet/>
            </div>
        </div>)
};