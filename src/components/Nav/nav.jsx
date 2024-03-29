import  {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';
import Search from '../Search/Searchbar';
import Menu from './ToogleMenu'




export default function Nav(){
    const [sizeScreen ,setSizeScreen]= useState(window.innerWidth)
    useEffect(()=>{
        let cancel=false
        window.addEventListener('resize',(e)=>{
            if(!cancel){
                setSizeScreen(window.innerWidth)
            }
        })
        return ()=>{cancel=true}
    })
    return(
    <header className="header">
        <nav className="nav">
           <div className="logoContent">
               <div className="logo"></div>
               <Link className="logo_title" to="" >Dogs App</Link>
           </div>
           {sizeScreen<=1024?null:<div>
              <Search/>
           </div>}
           <Menu/>
           {sizeScreen<=1024?null: <ul className="links">
               <li><Link className="link" to="create">create</Link></li>
           </ul>}
        </nav>
    </header>
    )
}