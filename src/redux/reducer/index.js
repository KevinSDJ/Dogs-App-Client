import { orderAlf } from '../../components/utilities/orderAlfabetic'

import {
    GET_ALL_DOGS,
    SET_DOGS_USE,
    FILT_TYPE,
    FILT_TYPE_CREATED,
    FILT_TYPE_EXIST,
    SET_TEMPERAMENTS,
    ORDER_AZ,
    ORDER_ZA,
    SET_SEARCHS,
    CLEAN_SEARCH,
    WEIGHT_MIN,
    WEIGHT_MAX} from '../actions/actionsT'



let initState={
    dogs:[],
    dogsUse:[],
    temperaments:[],
    searchs:[]
    
}


export default function root(state=initState,action){
    switch(action.type){
        case GET_ALL_DOGS:
            return {...state,dogs:action.payload}
        case SET_DOGS_USE:
            return {...state,dogsUse:[...state.dogs]}
        case FILT_TYPE:
            return {...state,dogsUse:state.dogs.filter(e=>e.temperament?.includes(action.payload))}
        case FILT_TYPE_CREATED:
            return {...state,dogsUse:state.dogs.filter(e=> e.hasOwnProperty("userId"))}
        case FILT_TYPE_EXIST:
            return {...state,dogsUse:state.dogs.filter(e=> !e.hasOwnProperty("userId"))}
        case SET_TEMPERAMENTS:
            return {...state,temperaments:action.payload}
        case ORDER_AZ:
            return {...state,dogsUse:orderAlf(state.dogsUse,"asc")}
        case ORDER_ZA:
            return {...state,dogsUse:orderAlf(state.dogsUse,"desc")}
        case WEIGHT_MIN:
            return {...state,dogsUse:[...state.dogsUse.sort(((a,b)=> a.weight.split("-")[0]-b.weight.split("-")[0]))]}
        case WEIGHT_MAX:
            return {...state,dogsUse:[...state.dogsUse.sort(((a,b)=> b.weight.split("-")[0]-a.weight.split("-")[0]))]}
        case SET_SEARCHS:
            return {...state,searchs:state.searchs.concat(action.payload)}
        case CLEAN_SEARCH:
            return {...state,searchs:[]}
        default:return state
    }
}



