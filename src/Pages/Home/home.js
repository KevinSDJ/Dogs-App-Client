import React,{useEffect}from 'react';
import {Outlet,useNavigate} from 'react-router-dom';
import './home.scss';
import {getAlldogs,setTemperaments ,clearResponse} from "../../redux/actions/actionsF"
import { useDispatch,useSelector} from "react-redux";




export default function Home(){
    let dispatch =useDispatch()
    let {response}= useSelector(state=>state)
    let navigate= useNavigate()
    useEffect(()=>{
        if(response){
            dispatch(clearResponse())
        }
    },[navigate,response,dispatch])
    useEffect(()=>{
    dispatch(getAlldogs())
    dispatch(setTemperaments())
  },[dispatch])
    return(
        <div className="home">
            <div>
                <Outlet/>
            </div>
        </div>)
};