import React from 'react'
import {useNavigate} from 'react-router-dom'
import './topNavBack.scss'

export default function TopNavBack(){
   let navigate= useNavigate()
   return(
   	<div id="BackNav">
   	      <div id="IconBack" onClick={()=>navigate("/home")}>
   	      </div>
   	</div>)
}