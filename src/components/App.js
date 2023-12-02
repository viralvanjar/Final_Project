// Importing required dependency
import './App.css';
import './color.css';
import Nav from './Nav';
import Style from './Style';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import FeedBackModal from './FeedBackModal';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';

// main function
function App() {
  return (
    <BrowserRouter>
      {/* navigation bar */}
      <Nav/>
      {/* Theme */}
      <Style/>
      {/* Feedback */}
      <FeedBackModal/>
    <Routes>
      {/* Pages */}
      <Route path="/" element={<Navigate to="/home" /> }/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
