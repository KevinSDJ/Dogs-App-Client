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
    RESPONSE,
    REGISTER,
    CLEAR_RESPONSE,
    LOGOUT,
    CREATERACE
} from './actionsT'
import axios from 'axios'
import env from 'react-dotenv';

let {URL_DEV}= env
let URL="https://ksdj-dogs-api.herokuapp.com"

function getAlldogs(){
    return function(dispatch){
        axios.get(URL+`/dogs`)
        .then(res=>{
            dispatch({type:GET_ALL_DOGS,payload:res.data})
            dispatch(setDogsUse())
           
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
            dispatch({type:RESPONSE,payload:e.response.data})
        })
    }
}

function cleanSearch(){
    return {type:CLEAN_SEARCH}
}


function registerUser(data){
    return (dispatch)=>{
         axios.post(URL+`/register`,data)
         .then(resp=>{
            dispatch({type:RESPONSE,payload:resp.data})
            dispatch({type:REGISTER})
         })
         .catch(error=>dispatch({type:RESPONSE,payload:error.response.data}))
    }
}
function singIn(data){

    if(JSON.parse(localStorage.getItem('DgAppSession'))){
        let Token=JSON.parse(window.localStorage.getItem('DgAppSession'))
        return (dispatch)=>{
            axios.post(URL+`/login`,null,{headers:{Authorization:"Bearer "+Token}})
            .then((res)=>{
                dispatch({type:RESPONSE,payload:res.data})
                dispatch({type:LOGIN,payload:res.data.user})
            },error=>dispatch({type:RESPONSE,payload:error.response.data}))
        }
    }
    
    return (dispatch)=>{
        axios.post(URL+`/login`,data)
        .then(resp=>{
            let {Token}=resp.data
            if(Token){
                window.localStorage.setItem("DgAppSession",JSON.stringify(Token))
            }
            dispatch({type:LOGIN,payload:resp.data.user})
            dispatch({type:RESPONSE,payload:resp.data})
        },(error)=>{
            dispatch({type:RESPONSE,payload:error.response.data})
        })}
    
    
}

function createRace(data){
    let Token = JSON.parse(window.localStorage.getItem('DgAppSession'))
    return (dispatch)=>{
        axios.post(URL+"/dog",data,{headers:{Authorization:"Bearer "+Token}})
        .then(res=>{
            dispatch({type:RESPONSE,payload:res.data});
            dispatch(getAlldogs())
           
        })
        .catch(e=>dispatch({type:RESPONSE,payload:e.response.data}))
    }
}

function clearResponse(){
    return (dispatch)=>{
        setTimeout(()=>{dispatch({type:CLEAR_RESPONSE})},(1000))
    }
}
function closeSession(){
    return (dispatch)=>{
        localStorage.removeItem('DgAppSession')
        dispatch({type:LOGOUT})
    }
}



export{
    getAlldogs,
    setDogsUse,
    filter,
    setTemperaments,
    ord,
    setSearchs,
    cleanSearch,
    registerUser,
    singIn,
    clearResponse,
    closeSession,
    createRace
}