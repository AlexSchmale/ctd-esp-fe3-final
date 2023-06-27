import React, { useEffect, useReducer } from 'react'
import { useState, useContext, createContext } from 'react'

const GlobalState = createContext()

const initialState = JSON.parse(localStorage.getItem("favs")) || []

const reducer = (state, action) =>{
  switch(action.type){
    case 'ADD_FAV':
      return [...state, action.payload]
    default:
      throw new Error()
  }
}

const Context = ({children}) => {

  /* export const initialState = {theme: "", data: []} */
    const [doctors, setDoctors] = useState([])
    const [specificDoctor, setSpecificDoctor] = useState({})

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
      localStorage.setItem("favorites", JSON.stringify(state))
    }, [state])

  return (
    <GlobalState.Provider value = {{doctors, setDoctors, specificDoctor, setSpecificDoctor, state, dispatch}}>
        
        {children}

    </GlobalState.Provider>
  )
}

export const useGlobalStates = () => useContext(GlobalState)

export default Context