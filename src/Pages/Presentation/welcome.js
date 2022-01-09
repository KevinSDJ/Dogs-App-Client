import './welcome.scss';
import {useNavigate} from 'react-router-dom'
export default function Welcome() {
    let navigate = useNavigate()

    return (
        <div className="w_content">
            <div className="w_bg_img">
            </div>
            <div className="w_section_p">
                <div className="w_section_izq">
                   <p className="w_title">Welcome to</p>
                   <h5 className="w_s_title">DogsApp <span className="w_title_icon"></span></h5>
                   <div className="w_btn_group">
                       <button className="w_btn" onClick={()=>navigate('login')}>login</button>
                       <button className="w_btn" onClick={()=>navigate('register')}>register</button>
                   </div>
                </div>
                <div className="w_dogs_img">
                </div>
            </div>
        </div>
    )
}