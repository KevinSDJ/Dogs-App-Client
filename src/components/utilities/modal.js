import React ,{useState,useLayoutEffect} from'react';
import './modal.scss';
import Success from '../../media/success-svgrepo-com.svg'
import Warning from '../../media/triangular-warning-signal-svgrepo-com.svg'
import Error from '../../media/error-svgrepo-com.svg'
import {clearResponse} from '../../redux/actions/actionsF'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'




export default function Modal({redirectEnd,response}){	
	const [open,setOpen]=useState(false)
	let dispatch= useDispatch()
	let navigate= useNavigate()
	let handleClick =(e)=>{
		dispatch(clearResponse())
		if(redirectEnd){
			setTimeout(()=>navigate(redirectEnd),(1000))
		}
	}
	useLayoutEffect(()=>{
		if(response){
			setOpen(!open)
		}
		if(!response){
			setOpen(false)
		}
	},[response])
	if(open){
		return (<>
		   <div  id="background_modal">
		       <div id="Modal">
		         <button id="btnCLoseModal" onClick={handleClick}>x</button>
		         <div id="Header_Modal">{response&&<img src={(response.type==="success"&&Success)||(response.type==="warning"&& Warning)||(response.type==="error"&& Error)}  alt={"message"} /> }<h3 className={response.type+'_modal'}>{response.type}</h3></div>
		         <div id="header_body"><p>{response.msg}</p></div>
		         <div id="btnModalContent"><button id="btnCLoseModal2" onClick={handleClick}>close</button></div>
		       </div>
		   </div>
		</>)
	}else return null
}