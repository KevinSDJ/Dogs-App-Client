import './welcome.scss';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
export default function Welcome() {
    let navigate= useNavigate()
    const [sizeScreen ,setSizeScreen]= useState(window.innerWidth)
    let {login} = useSelector(state=>state)
    useEffect(()=>{
        if(login){
            navigate('/home')
        }
    },[login])



    //controlador de la pantalla
    useEffect(()=>{
        window.addEventListener('resize',(e)=>{
            setSizeScreen(window.innerWidth)
        })
        return ()=>sizeScreen
    },[sizeScreen])

return (
        <div id="w_content">
            <div id="w_Box">
                <div id="w_section_izq">
                   <div id="w_text_section">
                      <p className="w_title">Welcome to</p>
                      <h5 id="w_s_title">DogsApp <span className="w_title_icon"></span></h5>
                   </div>
                    <div id="w_btn_group">
                       <button className="w_btn" onClick={()=>navigate('login')}>login</button>
                       <button className="w_btn" onClick={()=>navigate('register')}>register</button>
                     </div>
                  </div>
                <div id="w_dogs_img">
               </div>
            </div>
        </div>
    )
}




