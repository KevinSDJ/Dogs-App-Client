import React,{lazy,Suspense}from "react";
import Filter from "../../../components/utilities/filter";
import Order from "../../../components/utilities/order";
import './main.scss';
import Nav from '../../../components/Nav/nav.jsx';
import Footer from '../../../components/footer/footer.jsx';
const Paginate= lazy(()=>import("../../../components/utilities/pagination"))
export default function Main(){
    
    return(
    <div>
        <Nav/>
        <div className="filtresCont">
           <Filter/>
           <Order/>
        </div>
        <div>
           <Suspense fallback={<div>Loading</div>}>
              <Paginate/>
           </Suspense>
        </div>
        <Footer/>
    </div>)
}