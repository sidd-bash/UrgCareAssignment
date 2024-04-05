import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
