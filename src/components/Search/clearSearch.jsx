
import { useDispatch, useSelector } from "react-redux";
import { cleanSearch } from "../../redux/actions/actionsF";
import './clearSearch.scss';




export default function ClearSearch(){
    let dispatch= useDispatch()
   
    let search= useSelector(state=> state.searchs)
    function onclick(e){
        dispatch(cleanSearch())
    }
    if(search?.length>0){
        return(
        <div id="s_btn_clear_cont">
           searchs
           <button className="btn_clear_srch" onClick={onclick}></button>
        </div>)
    }else{
        return null
    }
}