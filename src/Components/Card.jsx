import React from "react";
import { Link } from "react-router-dom";
import {useGlobalStates} from './utils/Context'


const Card = ({ doctor }) => {

  const {dispatch} = useGlobalStates()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:'ADD_FAV', payload:doctor})
    
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="profile" src="/images/doctor.jpg" alt="profile picture"/>
        <h4 style={{color:'red'}}>{doctor.name}</h4>
        <p>{doctor.username}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link style={{width:'100%'}}  to={`/doctor/${doctor.id}`}><button className="favButton">👨‍⚕️</button></Link>
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>

    </div>
  );
};

export default Card;
