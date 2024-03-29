import {GET_ALL_DOGS,
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
    RESPONSE,
    CLEAR_RESPONSE} from './actionsT'

import axios from 'axios'

let URL="https://wikidogs-api.fly.dev"

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
        axios.get(URL+`/dogs?name=${input}`,{withCredentials:true})
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


function createRace(data){
    
    return (dispatch)=>{
        axios.post(URL+"/dog",data)
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



export{
    getAlldogs,
    setDogsUse,
    filter,
    setTemperaments,
    ord,
    setSearchs,
    cleanSearch,
    clearResponse,
    createRace
}
