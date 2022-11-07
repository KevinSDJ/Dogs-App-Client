import {Suspense,lazy} from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Main from "./Pages/Home/subPages/main";
import Create from "./Pages/Home/subPages/create";
import Details from "./Pages/Home/subPages/details";

const Home= lazy(()=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(import("./Pages/Home/home")),3000)
  })
})
const Welcome= lazy(()=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(import("./Pages/Presentation/welcome")),2000)
  })
})



export default function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
      <Route  path="/" element={<Welcome/>}/>
      <Route path="/home" element={<Home/>}>
        <Route path="" element={<Main/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path=":id" element={<Details/>}/>
      </Route>
    </Routes>
    </Suspense>
  </BrowserRouter>
   
  );
}

