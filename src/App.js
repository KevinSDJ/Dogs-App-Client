import React, {lazy,Suspense,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Main from "./Pages/Home/subPages/main";
import Create from "./Pages/Home/subPages/create";
import Details from "./Pages/Home/subPages/details";
import {singIn} from './redux/actions/actionsF'
import Welcome from"./Pages/Presentation/welcome"
import LoadingSp from './components/utilities/loading'
const Register =lazy(()=> import("./Pages/Register/register"))
const Login =lazy(()=>import("./Pages/Login/login"))




export default function App() {
  let dispatch= useDispatch()
  let {
    session}= useSelector(state=>state)
 useEffect(()=>{
        if(session){
            dispatch(singIn())
        }
},[dispatch,session])

  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" 
      element={<Welcome/>}/>
      <Route path="/register"
      element={
        <Suspense fallback={<LoadingSp/>}>
           <Register/>
        </Suspense>}/>}/>
      <Route path="/login" element={
        <Suspense delayMs="2000" fallback={<LoadingSp/>}>
           <Login/>
        </Suspense>}/>}/>
      <Route path="/home" element={<Home/>}>
        <Route path="" element={<Main/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path=":id" element={<Details/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
   
  );
}

