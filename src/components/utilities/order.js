import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { ord, setDogsUse } from "../../redux/actions/actionsF";
import './order.scss';



export default function Order(){
    const [order,setOrder]=useState(null)
    const dispatch= useDispatch()
  
    useEffect(()=>{
        if(order==="default"){
            dispatch(setDogsUse())
        }else if(order!== "default"&& order!== null){
            dispatch(ord(order))
        }
    },[dispatch, order])
    return(
    <form className="order_form"> 
        <span>Order by</span>
      
        <select onClick={(e)=>{setOrder(e.target.value)}}>
            <option value="default">default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="weight-" >weight-</option>
            <option value="weight+" >weight+</option>
        </select>
        <i>{">"}</i>
    </form>)
}