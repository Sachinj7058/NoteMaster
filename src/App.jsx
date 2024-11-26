import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';

const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element = {<Home/>} />
      <Route path='/login' exact element = {<Login/>} />
      <Route path='/Signup' exact element = {<SignUp/>} />
      <Route path='*' element = {<PageNotFound/>} />

    </Routes>
  </Router>
)

const App = () => {

  return (
    <>
    <div>{routes}</div>
    </>
  )
}

export default App