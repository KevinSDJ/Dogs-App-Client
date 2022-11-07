import {lazy,Suspense,useState,useEffect}from "react";
import './pagination.scss';
import { useSelector } from 'react-redux';
import CardContent from "../main/cardContent";
import ClearSearch from "../Search/clearSearch";




const PagesRender= lazy(()=>import("../main/pagesRender"))


export default function Paginate() {
  const [currentPage, setCurrP] = React.useState(1)
  const [sizeScreen ,setSizeScreen]= useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',(e)=>{
            setSizeScreen(window.innerWidth)
        })
        return ()=>sizeScreen
    },[sizeScreen])
  const dogsXpage = sizeScreen>=1200?15:8
  let dogsuse = useSelector(state => state.dogsUse)
  let search = useSelector(state => state.searchs)


  let indexOfLast = currentPage * dogsXpage;
  let indexOfFirst = indexOfLast - dogsXpage;
  let currentDogs = search.length < 1 ? dogsuse.length && dogsuse.slice(indexOfFirst, indexOfLast) : search.length && search.slice(indexOfFirst, indexOfLast);

  let pagesNumber = []
  for (let i = 1; i <= Math.ceil(search.length < 1 ? dogsuse?.length / dogsXpage : search?.length / dogsXpage); i++) {
    pagesNumber.push(i);
  }
  return (
    <div>
      <div className="pg_content">
        <Suspense fallback={<div>Loading</div>}>
          <PagesRender setCurrP={setCurrP} pages={pagesNumber} currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="cd_content">
        <ClearSearch />
        <CardContent currentDogs={currentDogs} />
      </div>
    </div>
  )



}

