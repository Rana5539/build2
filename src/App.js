import React from 'react';
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom';
import Contactus from './Components/Contact/Contactus';
import Projectss from './Components/Projectss';
import Servs from './Components/Servs';

function App() {
  return (
    <>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contactus />} />
        <Route path='/project' element={<Projectss/>}/>
        <Route path='/service' element={<Servs/>}/>
        </Routes>
    </>
  );
}
export default App;
