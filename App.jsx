import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './Login'
import User from './User'
import Tutorials from './components/Tutorials'
import Comments from './components/Comments'

function App() {
  

  return (
    <>

      <ul>

        <li>

          <Link to="/">
              Registration
          </Link>


        </li>

        <li>

<Link to="/login">
    Login
</Link>


</li>

      </ul>

      <Routes>

        <Route path='/' element={<Registration></Registration>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/User' element={<User></User>}/>
        <Route path='/Tutorials' element={<Tutorials></Tutorials>}/>
        <Route path='/Comments' element={<Comments></Comments>}/>
      
      </Routes>
     
    </>
  )
}

export default App
