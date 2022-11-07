import {useEffect, useState} from "react";
import {filter, setDogsUse} from '../../redux/actions/actionsF';
import {useDispatch, useSelector} from 'react-redux'
import './filter.scss';



function Filter(){
    const [types,setTypes] = useState(null)
    const [checkbox,setCheckbox]= useState({
        exist:false,
        created:false
    })
    let temps= useSelector(state=> state.temperaments)
    const dispatch= useDispatch()
    useEffect(()=>{
        if(checkbox.exist){
            dispatch(filter("exist"))
        }else if(checkbox.created){
            dispatch(filter("created"))
        }else if(types==="default"&&!checkbox.exist&&!checkbox.created){
            dispatch(setDogsUse())
        }else if(types&&types!== "default"){
            dispatch(filter({types}))
        }
    },[checkbox.created, checkbox.exist, types,dispatch])
    



    return (
        <form className="filt_form">
            <span id="f-opn-clos" onClick={(e) => {  
                if (document.getElementById("filtre").hidden === true) {
                    document.getElementById("filtre").hidden = false
                } else {
                    document.getElementById("filtre").hidden = true
                }
            }}><p>filter</p><div className="icon_filter"></div></span>
            <aside id="filtre" hidden>
                <label htmlFor="temperaments">
                    temperaments
                    <select id="temperaments" onChange={(e) => {
                        setTypes(e.target.value);
                        
                    }}>
                        <option value="default">default</option>
                        {temps.map(e=><option key={e.id} value={e.name} >{e.name}</option>)}
                        
                    </select>
                    <i>{">"}</i>
                </label>
                <label htmlFor="exist-created" onChange={(e)=>{
                    setCheckbox(prev=>{let int= {...prev,[e.target.id]:e.target.checked};return int});
                    
                }}>
                      <label htmlFor="exist">
                          exist
                          <input type="checkbox" id="exist"/>
                      </label>
                      <label htmlFor="created">
                          created
                          <input type="checkbox" id="created"/>
                      </label>
                </label>
            </aside>

        </form>)
}
export default Filter