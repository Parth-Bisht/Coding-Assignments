import './App.css';
import Button from './component/Buttons'

function App() {
  return (
    <div className="App">
        <Button name="Join Us" id="blue"/>
        <Button name="Settings" id="cadeBlue" />
        <Button name="Login" id="login"/>
        <Button name="Contact Us" id="contact" />
        <Button name="Search" id="search" />
        <Button name="Help" id="help"/>
        <Button name="Home" id="home" />
        <Button name="Download" id="download" />
    </div>
  );
}

export default App;
