import React from "react";
import './pagination.scss';
import { useSelector } from 'react-redux';
import CardContent from "../main/cardContent";
import PagesRender from "../main/pagesRender";
import ClearSearch from "../Search/clearSearch";







export default function Paginate() {
  const [currentPage, setCurrP] = React.useState(1)
  const dogsXpage = 8
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
        <PagesRender setCurrP={setCurrP} pages={pagesNumber} currentPage={currentPage} />
      </div>
      <div className="cd_content">
        <ClearSearch />
        <CardContent currentDogs={currentDogs} />
      </div>
    </div>
  )



}

