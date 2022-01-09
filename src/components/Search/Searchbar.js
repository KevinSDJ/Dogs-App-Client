import { useState } from "react";
import './searchbar.scss';
import MsgError from "./errorMsg";
import { setSearchs } from "../../redux/actions/actionsF";
import { useDispatch } from "react-redux";




export default function Search(){
    const [input,setInput]= useState({
        search:""
    })
    const [error,setError]=useState({
        err:null
    })

    const dispatch=useDispatch()

    const handleChange=(e)=>{
        setInput(prev=>{
            let r={...prev,[e.target.name]:e.target.value}
            return r
        })
    }
    function onsubmit(e){
        e.preventDefault()
        dispatch(setSearchs(input.search,setError))
        setTimeout(()=>{
            setInput(prev=>{return {...prev,search:""}})
        },(1000))
    }
    if(error.err){
        setTimeout(()=>{
            setError(prev=>{
            return {...prev,err:null}
        })
        },(2000))
    }
    return(
    <form onSubmit={onsubmit} autoComplete={"off"} className="s_form">
        <MsgError msg={error.err}/>
        <input name="search" type="search" placeholder="search"  value={input.search} onChange={handleChange}/>
        <button type="submit" className="search_btn_icon"></button>
    </form>)
}