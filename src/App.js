import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import ToDo from './Pages/To-Do/ToDo';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
