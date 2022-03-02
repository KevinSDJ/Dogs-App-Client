import React from "react";
import { CardDogs } from "./Card";
import './cardCont.scss';





export default function CardContent(props){
 
    if(props.currentDogs.length){
        return(
        <div className="cd_subCont">
            {props.currentDogs.map(e=><CardDogs key={e.id} id={e.id} name={e.name} image={e.image} temperament={e.temperament} weight={e.weight} origin={e.origin}/>)}
        </div>)
    }else{
        return(
        <div>
        </div>)
    }
}