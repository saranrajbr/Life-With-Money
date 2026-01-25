
import { Route,Router,Link, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
    </Routes>
  )
}

export default App
