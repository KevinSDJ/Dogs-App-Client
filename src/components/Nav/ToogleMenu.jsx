import React,{useState,useEffect}from 'react';
import {Link} from 'react-router-dom'
import Logout from './logout';
import Search from '../Search/Searchbar'

export default function Menu(){
	const [sizeScreen ,setSizeScreen]= useState(window.innerWidth)
	const [open,setOpen]= useState(false)
	useEffect(()=>{
		window.addEventListener('resize',(e)=>{
			setSizeScreen(window.innerWidth)
		})
		if(sizeScreen<=1024){
			document.getElementById('toggleMenu').hidden=false
		}else{
			document.getElementById('toggleMenu').hidden=true
		}
	},[sizeScreen])
	return(<div id="toggleMenu" hidden>
	     {open?
	     	<div id="AsideMenu">
	     	   <div id="AsideMenuContent">
	     	       <div id="headerAsideMenu">
	     	     	    <div className="logoContent">
                           <Link className="logo_title" to="" >Dogs App</Link>
                        </div>
                         <button id="toggleBtnClose" onClick={(e)=>setOpen(!open)}>x</button>
	     	        </div>
	     	       <div id="AsideMenuBody">
	     	        <ul className="links">
                      <li><Link className="link" to="create">create</Link></li>
                   </ul>
                   <Search/>
	     	       <Logout/>
	     	       </div>
		        </div>
	     	</div>
	     	:
	     	<button id="toggleBtn" type="button" onClick={(e)=>setOpen(!open)} >
		       	
		     </button>
	     }
	</div>)
}