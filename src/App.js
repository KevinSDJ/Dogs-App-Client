import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Main from "./Pages/Home/subPages/main";
import Welcome from "./Pages/Presentation/welcome";
import { getAlldogs, setDogsUse, setTemperaments } from "./redux/actions/actionsF";
import s from './App.module.css';
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import Create from "./Pages/Home/subPages/create";
import Details from "./Pages/Home/subPages/details";
import 'normalize.css';



export default function App() {
  let dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getAlldogs())
    dispatch(setTemperaments())
    setTimeout(()=>{
      dispatch(setDogsUse())
    },(2000))
  },[dispatch])

 

 
 
 
 
  return (
    <BrowserRouter>
    <div className={s.App}>
      <Routes>
      <Route  path="/" element={<Welcome/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}>
        <Route path="" element={<Main/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path=":id" element={<Details/>}/>
      </Route>
    </Routes>
    </div>
    
  </BrowserRouter>
   
  );
}

