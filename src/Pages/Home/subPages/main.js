import React from "react";
import Filter from "../../../components/utilities/filter";
import Order from "../../../components/utilities/order";
import './main.scss';
import Paginate from "../../../components/utilities/pagination";
import Nav from '../../../components/Nav/nav.jsx'




export default function Main(){
    
    return(
    <div>
        <Nav/>
        <div className="filtresCont">
           <Filter/>
           <Order/>
        </div>
        <div>
            <Paginate/>
        </div>
    </div>)
}