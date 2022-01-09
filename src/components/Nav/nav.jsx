import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';
import Search from '../Search/Searchbar';
import Logout from './logout';



export default function Nav(){
    return(
    <header className="header">
        <nav className="nav">
           <div className="logoContent">
               <div className="logo"></div>
               <Link className="logo_title" to="" >Dogs App</Link>
           </div>
           <div>
              <Search/>
           </div>
           <ul className="links">
               <li><Link className="link" to="create">create</Link></li>
           </ul>
           <Logout/>
        </nav>
    </header>
    )
}