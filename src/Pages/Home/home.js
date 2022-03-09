import React,{useEffect}from 'react';
import {Outlet,useNavigate} from 'react-router-dom';
import './home.scss';
import { getAlldogs, setDogsUse, setTemperaments ,clearResponse} from "../../redux/actions/actionsF"
import { useDispatch,useSelector} from "react-redux";
import Modal from './../../components/utilities/modal'



export default function Home(){
    let dispatch =useDispatch()
    let {response}= useSelector(state=>state)
    let navigate= useNavigate()
    useEffect(()=>{
        if(response){
            dispatch(clearResponse())
        }
    },[navigate,response])
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