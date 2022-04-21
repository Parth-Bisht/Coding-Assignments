import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Mens from './pages/Mens';
import Womens from './pages/Womens';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="home" element={<Home/>}></Route>
    <Route path="aboutus" element={<AboutUs/>}></Route>
    <Route path="contactus" element={<ContactUs/>}></Route>
    <Route path="faq" element={<Faq/>}></Route>
    <Route path="men" element={<Mens/>}></Route>
    <Route path="women" element={<Womens/>}></Route>
    <Route path="kids" element={<Kids/>}></Route>
    </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
