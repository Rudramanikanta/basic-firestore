
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';



function App() {
  return (
   
    <div className="App">
      <Routes>
      <Route index path='/' element={<Login></Login>}></Route>
      <Route  path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
