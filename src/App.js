import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Projectss from './Components/Projectss';
import Servs from './Components/Servs';
import Pagechangescroll from './Components/Pagechangescroll'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus/Aboutus'
import Contactus from './Components/Contact/Contactus'

function App() {
  return (
    <>
    <Pagechangescroll/>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path='/project' element={<Projectss />} />
        <Route path='/service' element={<Servs />} />
        <Route path='/about' element={<Aboutus />} />
        
    </Routes>
     </>
  
  );
}
export default App;