import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import './card.scss';
import LoadingSpinner from "./loadingCard";




function CardDogs({ id, name, image, weight, temperament,origin}) {
    const [isLoading,setisLoading]= useState(true)
    useLayoutEffect(()=>{
        if(isLoading){
            setTimeout(()=>{
            setisLoading(!isLoading)
        },(1000));
        }
         
    },[isLoading])

    return (
        <div className="flip_cont">
            <LoadingSpinner isLoading={isLoading}/>
            <div className="r_card" hidden={isLoading?true:false}>
                <div className="front">
                    <h4>{name}</h4>
                    <img loading="lazy" width="300" src={image} alt={name} />
              
                </div>
                <div className="back">
                    <div className="c_data">
                        <h6>Temperament</h6>
                        <p>{Array.isArray(temperament) ?temperament.join(", ") : temperament}</p>
                        <h6>Weight</h6>
                        <p>{weight}</p>
                    </div>
                    <Link to={`/home/${id}`}>
                        view details
                    </Link>
                </div>
            </div>
        </div>)

}
export { CardDogs }
