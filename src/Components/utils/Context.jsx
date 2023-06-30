import React, { useEffect, useReducer } from 'react'
import {useContext, createContext } from 'react'
import axios from 'axios'

const GlobalState = createContext()

const initialState = {
  doctorsList: [],
  specificDoctor: {},
  favs: JSON.parse(localStorage.getItem("favorites")) || [],
  theme: JSON.parse(localStorage.getItem("theme")) || "light"
}

const reducer = (state, action) =>{
  switch(action.type){
    case 'GET_LIST':
      return {...state, doctorsList: action.payload}
    case 'GET_DETAIL':
      return {...state, specificDoctor:action.payload}
    case 'ADD_FAV':
      return {...state, favs: [...state.favs, action.payload]}
    case 'CHANGE_THEME':
      return {...state, theme: action.payload}
    default:
      throw new Error()
  }
}

const Context = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState) 


    useEffect(()=>{
      localStorage.setItem("favorites", JSON.stringify(state.favs)) 
    }, [state.favs])

    useEffect(()=>{
      localStorage.setItem("theme", JSON.stringify(state.theme))
    }, [state.theme])

  return (
    <GlobalState.Provider value = {{state, dispatch}}>
        
        {children}

    </GlobalState.Provider>
  )
}

export const useGlobalStates = () => useContext(GlobalState)

export default Context