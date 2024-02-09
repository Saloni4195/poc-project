import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import SideNavBar from './components/SideNavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Addition from './components/Addition.jsx';
import Continuation from './components/Continuation.jsx';
import Query from './components/Query.jsx';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <div className="main-container">
          <SideNavBar />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/add-details" element={<Addition />} />
              <Route path="/edit-details" element={<Continuation />} />
              <Route path="/add-query" element={<Query />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
