import React from "react";
import Filter from "../../../components/utilities/filter";
import Order from "../../../components/utilities/order";
import './main.scss';
import Paginate from "../../../components/utilities/pagination";





export default function Main(){
    
    return(
    <div>
        <div className="filtresCont">
           <Filter/>
           <Order/>
        </div>
        <div>
            <Paginate/>
        </div>
    </div>)
}