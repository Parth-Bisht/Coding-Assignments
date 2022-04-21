import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import { AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';

function App() {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <div>
      <Navbar/>
      <div className="App">
      {isLoggedIn?<Home/>:<LoginForm/>}    
      </div>
    </div>
  );
}

export default App;
