import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams()
  const {specificDoctor, setSpecificDoctor,dispatch} = useGlobalStates()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:'ADD_FAV', payload:specificDoctor})
    
  }

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
    axios.get(url)
    .then(res =>  setSpecificDoctor(res.data))
  },[])

  return (
    <>
      <div className='detail'>
        <img style={{width:'100px', height:'100px'}} src="/images/doctor.jpg" alt="" />
        <div>
          <h5>Name: <span>{specificDoctor?.name}</span></h5>
          <h5>Username: <span>{specificDoctor?.username}</span></h5>
          <h5>Email: <span>{specificDoctor?.email}</span></h5>
          <h5>Phone: <span>{specificDoctor?.phone}</span></h5>
          <h5>website: <span>{specificDoctor?.website}</span></h5>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
      <button onClick={addFav} className="favButton buttonCard">⭐</button>
      </div>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail