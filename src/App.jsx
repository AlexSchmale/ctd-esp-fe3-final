
import { Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
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
