import './App.css';
import JoinUs from './components/JoinUs';
import Setting from './components/Setting';
import Login from './components/Login';
import Contact from './components/Contact';
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';

function App() {
  return (
    <div className="App">
      <JoinUs/>  <Setting/>
      <Login/> <Contact/>
      <Search/> <Help/>
      <Home/> <Download/>
    </div>
  );
}

export default App;
