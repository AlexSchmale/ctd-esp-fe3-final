
import { Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useGlobalStates } from "./Components/utils/Context";

function App() {

  const {state} = useGlobalStates()

  return (
      <div /* className= {state.theme === 'light'? 'lightApp': 'darkApp'} */ id={state.theme}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/doctor/:id" element={<Detail/>}/>
          </Route>
        </Routes>
          
      </div>
  );
}

export default App;
