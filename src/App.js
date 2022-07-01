import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import ToDo from './Pages/To-Do/ToDo';
import TaskList from './Pages/Home/TaskList/TaskList';
import CompleteLists from './Pages/CompleteList/CompleteLists';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index path='taskList' element={<TaskList></TaskList>}></Route>
          <Route path='complete' element={<CompleteLists></CompleteLists>}></Route>
        </Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
