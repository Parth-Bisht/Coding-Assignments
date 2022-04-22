
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';
import { useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext)
  console.log(theme);
  return (
    <div className="App">
      <Navbar/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
