import './App.css';
import { Routes, Route } from "react-router-dom";
import MoviesList from './components/MovieList';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import HeaderNav from './components/HeaderNav';
import { useState } from 'react';
function App() {
 
  return (
    <div className="App">
      <HeaderNav />
       <Routes>
        <Route path="/" element={<MoviesList />}></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
