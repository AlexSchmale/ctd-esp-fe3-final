import React, { useEffect } from 'react'
import { useGlobalStates} from '../Components/utils/Context'
import Card from '../Components/Card'
import axios from 'axios'
//import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state, dispatch} = useGlobalStates()

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch({type:'GET_LIST', payload:res.data}))
  }, [])

  return (
    <main className="homeMain" >
      <div className='card-grid'>
        { state.doctorsList?.map(doctor => <Card key={doctor.id} doctor={doctor}/>)}
      </div>
    </main>
  )
}

export default Home