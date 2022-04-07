import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        <li className='square'>Samsung</li>
        <li className='square'>HTC</li>
        <li>Micromax</li>
        <li className='circle' >Apple</li>
      </ul>
    </div>
  );
}

export default App;
