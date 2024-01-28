import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Responsive from './Components/Navbar/Responsive';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Projects from './Components/Projects/Projects';
import Sells from './Components/We deal in/Sells'
import Scrolltop from './Components/Scrolltop'
import Main from './Components/What we offer/Main';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    
    <Responsive/>
    <Navbar/>
    <Jumbotron/>
    <Projects/>
    <Sells/>
   <Scrolltop/>
   <Main/>
   <Partners/>
   <Footer/>
    </>
  );
}
export default App;
