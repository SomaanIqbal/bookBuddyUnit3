import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Navigations from './components/Navigations'



function App() {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <>
    <div id='container'>
      <div id='navbar'>
        <Link to={'/books'}>Home</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/account'}>Account</Link>
        <Link to={'/navigations'}>Navigations</Link>
      </div>
      <div id='main-section'>
        <Routes>
          <Route path='/books' element={<Books setSelectedBookId={setSelectedBookId} />}/>
          <Route path='/books/:id' element={<SingleBook setSelectedBookId={setSelectedBookId} />} />
          <Route path='/register' element={<Register token ={token} setToken={setToken} />} />
          <Route path='/login' element={<Login token={token} setToken={setToken} />} />
          <Route path='/account' element={<Account token={token} setToken={setToken}/>} />
          <Route path='/navigations' element={<Navigations/>} />
        </Routes>
      </div>
    </div>
      
    </>
  )
}

export default App
