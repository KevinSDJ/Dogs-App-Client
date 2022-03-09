import { useState ,useEffect} from "react";
import './searchbar.scss';
import { setSearchs,clearResponse} from "../../redux/actions/actionsF";
import { useDispatch,useSelector} from "react-redux";
import Modal from '../utilities/modal'




export default function Search(){
    const [input,setInput]= useState({
        search:""
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
        dispatch(setSearchs(input.search))
        setTimeout(()=>{
            setInput(prev=>{return {...prev,search:""}})
        },(1000))
    }
    return(
    <form onSubmit={onsubmit} autoComplete={"off"} className="s_form">
         
        <input name="search" type="search" placeholder="search"  value={input.search} onChange={handleChange}/>
        <button type="submit" className="search_btn_icon"></button>
    </form>)
}