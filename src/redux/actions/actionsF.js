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
    CLEAN_SEARCH} from './actionsT'
import axios from 'axios'

function getAlldogs(){
    return function(dispatch){
        axios.get('http://localhost:3002/dogs')
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
        axios.get('http://localhost:3002/temperament')
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
        axios.get(`http://localhost:3002/dogs?name=${input}`)
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






export{getAlldogs,setDogsUse,filter,setTemperaments,ord,setSearchs,cleanSearch}