import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {doctors, setDoctors} = useGlobalStates()

  useEffect(()=>{
    setDoctors(JSON.parse(localStorage.getItem("favorites"))) 
  }, [])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {doctors?.map(doctor=> <Card key={doctor.id} doctor={doctor}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
