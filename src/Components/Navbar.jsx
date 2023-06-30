import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {


  const {state, dispatch} = useGlobalStates()
  

  const changeTheme = () =>{
    dispatch({type:'CHANGE_THEME', payload:state.theme === 'light' ? 'dark' : 'light'})
  }

  return (
    <nav className= 'nav'/* style={{display:'flex', justifyContent:'space-between', width:'100%'}} */>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/* <h1 style={{fontSize: '20px', margin:'0', padding:'0'}}>DH ODONTO</h1> */}
      <img src='/images/DH.png' />
      <div className='navRoutes' /* style={{marginRight:'6%'}} */>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link style={{marginRight:'10px'}} to="/favs">Favs</Link>
        <button onClick={changeTheme} /* style={{border:'1px solid red', bordeRadius:'40%', background: 'transparent'}} */>{state.theme === 'light'?  '🌙' : '☀️'}</button>
      </div>
      
    </nav>
  )
}

export default Navbar