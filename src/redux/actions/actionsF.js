import {
    GET_ALL_DOGS,
    SET_DOGS_USE,
    FILT_TYPE_EXIST,
    FILT_TYPE_CREATED,
    FILT_TYPE,
    SET_TEMPERAMENTS,
    ORDER_AZ,
    ORDER_ZA,
    WEIGHT_MIN,
    WEIGHT_MAX,
    SET_SEARCHS,
    CLEAN_SEARCH,
    LOGIN,
    ERROR,
    REGISTER,
    CLEAR_ERROR,
    LOGOUT
} from './actionsT'
import axios from 'axios'
import env from 'react-dotenv';

let {URL_DEV}= env
let URL=URL_DEV||"https://ksdj-dogs-api.herokuapp.com"

function getAlldogs(){
    return function(dispatch){
        axios.get(URL+`/dogs`)
        .then(res=>{
            dispatch({type:GET_ALL_DOGS,payload:res.data})
           
        })  
    }
}
function setDogsUse(){
    return {type:SET_DOGS_USE}
}

function filter(data){
    if(data.hasOwnProperty("types")){
        return {type:FILT_TYPE,payload:data.types}
    }else if(data==="exist"){
        return {type:FILT_TYPE_EXIST,payload:data}
    }else if(data==="created"){
        return {type:FILT_TYPE_CREATED,payload:data}
    }
}
function setTemperaments(){
    return function(dispatch){
        axios.get(URL+`/temperament`)
        .then(res=>{
            dispatch({type:SET_TEMPERAMENTS,payload:res.data})
           
        })  
    }
}
function ord(value,list){
    if(value==="A-Z"){
        return {type:ORDER_AZ}
    }else if(value==="Z-A"){
        return {type:ORDER_ZA}
    }else if(value==="weight-"){
        return {type:WEIGHT_MIN}
    }else if(value==="weight+"){
        return {type:WEIGHT_MAX}
    }
}
function setSearchs(input,cb){
    return function(dispatch){
        axios.get(URL+`/dogs?name=${input}`)
        .then(res=>{
            dispatch({type:SET_SEARCHS,payload:res.data})
        })
        .catch(e=>{
            cb(prev=>{
                return {...prev,err:" Breed not found"}
            })
        })
    }
}

function cleanSearch(){
    return {type:CLEAN_SEARCH}
}


function registerUser(data){
    return (dispatch)=>{
         axios.post(URL+`/register`,data,{withCredentials:true})
         .then(resp=>{
            dispatch({type:REGISTER})
         },(error)=>{
            dispatch({type:ERROR,payload:error})
         })
    }
}
function singIn(data){

    if(JSON.parse(localStorage.getItem('DgAppSession'))){
        let Token=JSON.parse(localStorage.getItem('DgAppSession'))
        return (dispatch)=>{
            axios.post(URL+`/login`,null,{headers:{Authorization:"Bearer "+Token,withCredentials:true}})
            .then((res)=>{
                dispatch({type:LOGIN,payload:res.data.user})
            },error=>console.log(error))
        }
    }
    
    return (dispatch)=>{
        axios.post(URL+`/login`,data,{withCredentials:true})
        .then(resp=>{
            console.log(resp)
            let {Token}=resp.data
            if(Token){
                localStorage.setItem("DgAppSession",JSON.stringify(Token))
            }
            dispatch({type:LOGIN,payload:resp.data.user})
        },(error)=>{
            dispatch({type:ERROR,payload:error})
        })}
    
    
}

function clearError(){
    return (dispatch)=>{
        dispatch({type:CLEAR_ERROR})
    }
}
function closeSession(){
    return (dispatch)=>{
        localStorage.removeItem('DgAppSession')
        dispatch({type:LOGOUT})
    }
}


export{getAlldogs,setDogsUse,filter,setTemperaments,ord,setSearchs,cleanSearch,registerUser,singIn,clearError,closeSession}