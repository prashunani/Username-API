import React from 'react';
import { BrowserRouter , Routes ,Route, Link } from 'react-router-dom';
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Userdetail from './Components/UserDetails/Userdetail';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id"  element={<Userdetail/>}/>
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;