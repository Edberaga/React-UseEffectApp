import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import useLocalStorage from 'use-local-storage';
import { TodoContext } from './context/TodoContext';

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  return (
  <TodoContext.Provider value={{ todos, setTodos }}>
    <BrowserRouter>
    <main>
      <Header/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
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