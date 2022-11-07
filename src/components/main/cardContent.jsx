import { CardDogs } from "./Card";
import './cardCont.scss';





export default function CardContent({currentDogs}){
 
    
        return(
        <div className="cd_subCont">
            {currentDogs&&currentDogs.map(e=><CardDogs key={e.id} id={e.id} name={e.name} image={e.image} temperament={e.temperament} weight={e.weight} origin={e.origin}/>)||"Error request"}
        </div>)
    
}