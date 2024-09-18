import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';
import RequireAuth from './components/RequireAuth';

function App() {
  const [token, setToken] = useState(null);

  return (
  <AuthContext.Provider value={{ token, setToken }}>
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<RequireAuth><Dashboard/></RequireAuth>} path='dashboard'/>
        </Routes>
      </Container>
    </BrowserRouter>
  </AuthContext.Provider>
  )
}

export default App
