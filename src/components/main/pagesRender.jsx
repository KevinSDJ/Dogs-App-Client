import { useEffect} from "react";
import "./pagesRender.scss";




export default function PagesRender({ pages, setCurrP, currentPage }) {
   
    function handleNextOrPrev(e) {
        if (e.target.id === "next") {
            if (currentPage < pages.length) {
                setCurrP(currentPage + 1)
            }

        } else if (e.target.id === "prev") {
            if (currentPage > 1) {
                setCurrP(currentPage - 1)
            }
        }
    }
    function handleClick(e) {
        setCurrP(Number(e.target.id))
    }
    useEffect(() => {
        if (currentPage > pages.length) {
            setCurrP(1)
        }
        return ()=>currentPage
    }, [currentPage, pages.length, setCurrP])
    if (pages) {
        return (
        <div className="pg_subcont">
            <button id="prev" onClick={handleNextOrPrev}>{'<'}</button>
            {currentPage!==1?"...":null}
            {currentPage > 1 ? pages.map(e => e === currentPage-1 && <li key={e} id={e} onClick={handleClick}>{e}</li>) : null}
            {pages.map(e => e === currentPage && <li style={{ backgroundColor: "gray",color:"white"}} key={e} id={e} onClick={handleClick}>{e}</li>)}
            {currentPage < pages.length ? pages.map(e => e === currentPage+1 && <li key={e} id={e} onClick={handleClick}>{e}</li>) : null}
            {currentPage<pages.length?"...":null}
            <button id="next" onClick={handleNextOrPrev} >{'>'}</button>
        </div>
        )
    } else {
        return (<div>
            Loading.....
        </div>)
    }

}