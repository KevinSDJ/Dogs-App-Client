import {useState,useLayoutEffect} from'react';
import Success from '../../assets/success-svgrepo-com.svg'
import Warning from '../../assets/triangular-warning-signal-svgrepo-com.svg'
import Err from '../../assets/error-svgrepo-com.svg'
import {clearResponse} from '../../redux/actions/actionsF'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './modal.scss';



let alerts={success:Success,error:Err,warning:Warning}
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
		         <div id="Header_Modal">{response&&<img src={response?alerts[`${response.type}`]:"#"} alt={"message"} /> }<h3 className={response.type+'_modal'}>{response.type}</h3></div>
		         <div id="header_body"><p>{response.msg}</p></div>
		         <div id="btnModalContent"><button id="btnCLoseModal2" onClick={handleClick}>close</button></div>
		       </div>
		   </div>
		</>)
	}else return null
}