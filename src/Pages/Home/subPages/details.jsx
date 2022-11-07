import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './details.scss';
import TopNavBack from '../../../components/Nav/topbarback.jsx'



export default function Details() {
    let races = useSelector(state => state.dogsUse)
    let { id } = useParams()
    let raceDetail = races.filter(e => e.id === Number(id) || e.id === id)
    if(raceDetail){
        return (
        <div id="detailsSection">
            <TopNavBack/>
            <div className="conteinerDetail">
                <section>
                    <img loading="lazy"  src={raceDetail[0].image} alt={raceDetail[0].name} />
                </section>
                <section id="dataDetails">
                    <h2 id="nameDetailsRace">{raceDetail[0].name}</h2>
                    <hr />
                    <div id="heightDetail">
                        <h5>Height</h5>
                        <span>{raceDetail[0]?.height}</span>
                    </div>
                    <div id="weightDetail">
                        <h5>Weight</h5>
                        <span>{raceDetail[0]?.weight}</span>
                    </div>
                    <div id="lifeDetails">
                        <h5>life span</h5>
                        <span>{raceDetail[0]?.hasOwnProperty("life_span")?raceDetail[0].life_span:raceDetail[0].age}</span>
                    </div>
                    <div id="Temperamentsdetails">
                        <h5>Temperaments</h5>
                        <span>{Array.isArray(raceDetail[0].temperament)?raceDetail[0].temperament.join(","):raceDetail[0].temperament}</span>
                    </div>
                    {raceDetail[0].hasOwnProperty("origin")?
                    <div id="originDetail">
                        <h5>Origin</h5>
                        <span>{raceDetail[0].origin}</span>
                    </div>:null}
                </section>
            </div>
        </div>
    )
    }else{
        return(<div>""</div>)
    }
    
}