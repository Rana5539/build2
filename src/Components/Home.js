import Navbar from './Navbar/Navbar';
import Responsive from './Navbar/Responsive';
import Jumbotron from './Jumbotron/Jumbotron';
import Projects from './Projects/Projects';
import Sells from './We deal in/Sells'
import Scrolltop from './Scrolltop'
import Main from './What we offer/Main';
import Partners from './Partners/Partners';
import Footer from './Footer/Footer';
import Deal from './We deal/Deal'
import { Box } from '@mui/material';
import './not.css'

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
     <Deal/>
     <Partners/>
         <Footer/>
         
      </>
    );
  }
  export default App;
  