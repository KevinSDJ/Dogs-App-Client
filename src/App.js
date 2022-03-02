import React, { useEffect ,lazy,Suspense} from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Main from "./Pages/Home/subPages/main";
import { getAlldogs, setDogsUse, setTemperaments } from "./redux/actions/actionsF";
import Create from "./Pages/Home/subPages/create";
import Details from "./Pages/Home/subPages/details";
const Welcome= lazy(()=>import("./Pages/Presentation/welcome"))
const Register =lazy(()=> import("./Pages/Register/register"))
const Login =lazy(()=>import("./Pages/Login/login"))


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
      <Routes>
      <Route  path="/" 
      element={
        <Suspense fallback={<div>Loading...........</div>}>
           <Welcome/>
        </Suspense>}/>
      <Route path="/register"
      element={
        <Suspense fallback={<div>Loading...........</div>}>
           <Register/>
        </Suspense>}/>}/>
      <Route path="/login" element={<Suspense fallback={<div>Loading...........</div>}>
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

