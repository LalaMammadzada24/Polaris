import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Landing from './pages/Landing'
import Login from './pages/Login'
import Mentors from './pages/Mentors'
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import BecomeMentor from './pages/BecomeMentor';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/mentors' element={<Mentors/>}></Route>
            <Route path='/account' element={<Account/>}></Route>
            <Route path='/becomementor' element={<BecomeMentor/>}></Route>
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App