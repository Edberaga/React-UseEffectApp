import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from './context/TodoContext';

import Header from './components/Header';
import Home from './pages/Home';
import Note from './pages/Note';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';

import useLocalStorage from 'use-local-storage';

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  return (
  <TodoContext.Provider value={{ todos, setTodos }}>
    <BrowserRouter>
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/note'>
          <Route index element={<Note/>} />
          <Route path='add-note' element={<AddTodo/>} />
          <Route path='todo/:id' element={<EditTodo/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
    </main>
    </BrowserRouter>
  </TodoContext.Provider>
  
  )
}

export default App