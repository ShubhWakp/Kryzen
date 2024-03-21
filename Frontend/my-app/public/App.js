import "./App.css";
import "./tabler.min.css"
// eslint-disable-next-line
import NavbarNew from "../src/components/NavbarNew";
import Home from "./components/Home";
import { Route, Routes } from 'react-router-dom';
import Pricewatcher from "./components/Pricewatcher";



const App = () => {
  return(
    <>
    <Routes>
      <Route path='/pricewatcher' element={<Pricewatcher/>}/>
      <Route path='/' element={<NavbarNew/>}/>
      <Route path='/Home' element={<Home/>}/>
    
    
    
    </Routes>
    </>

    
  )

};
  



export default App;