import React, { useEffect } from 'react'
import { useGlobalStates} from '../Components/utils/Context'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
//import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {doctors, setDoctors} = useGlobalStates()

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setDoctors(res.data))
  }, [])

  return (
    <main className="homeMain" >
      <div className='card-grid'>
        { doctors?.map(doctor => <Card key={doctor.id} doctor={doctor}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home