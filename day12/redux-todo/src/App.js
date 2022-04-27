
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SingleTodo from './Components/SingleTodo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Todos/>}></Route> 
    <Route path="/todo/:id" element={<SingleTodo/>}></Route>   
      </Routes>
    </div>
  );
}

export default App;
