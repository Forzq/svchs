
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/aboutUs.jsx';
import Ideas from './pages/Ideasaddition.jsx';
import ErrorPage from './Components/error404/errorComp.jsx';
import Redooxiki from './pages/redooxiki.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/About" element = {<AboutUs/>}/>
        <Route path="/Ideas" element = {<Ideas/>}/>
        <Route path="/Redooxiki" element = {<Redooxiki/>}/>
        <Route path="*" element = {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );

}
export default App;
