import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Responsive from './Components/Navbar/Responsive';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Projects from './Components/Projects/Projects';
import Sells from './Components/We deal in/Sells'
import Scrolltop from './Components/Scrolltop'
import Main from './Components/What we offer/Main';
import Socialicons from './Components/Socialicons'
function App() {
  return (
    <>
    <Socialicons/>
    <Responsive/>
    <Navbar/>
    <Jumbotron/>
    <Projects/>
    <Sells/>
   <Scrolltop/>
   <Main/>
    </>
  );
}
export default App;
