import {useNavigate} from 'react-router-dom';
import './welcome.scss';

export default function Welcome() {
    let navigate= useNavigate()

return (
        <div id="w_content">
            <div id="w_Box">
                <div id="w_section_izq">
                   <div id="w_text_section">
                      <p className="w_title">Welcome to</p>
                      <h5 id="w_s_title">WikiDogs <span className="w_title_icon"></span></h5>
                   </div>
                    <div id="w_btn_group">
                       <button className="w_btn" onClick={()=>navigate('Home')}>Enter</button>
                     </div>
                  </div>
                <div id="w_dogs_img">
               </div>
            </div>
        </div>
    )
}




