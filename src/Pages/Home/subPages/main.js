import React,{lazy,Suspense}from "react";
import {useSelector} from 'react-redux'
import Filter from "../../../components/utilities/filter";
import Order from "../../../components/utilities/order";
import './main.scss';
import Nav from '../../../components/Nav/nav.jsx';
import Footer from '../../../components/footer/footer.js';
import Modal from '../../../components/utilities/modal'
const Paginate= lazy(()=>import("../../../components/utilities/pagination"))
export default function Main(){
    let {response}= useSelector(state=>state)
    return(
    <div>
        <Nav/>
        <Modal response={response} />
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