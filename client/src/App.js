import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { ModalProvider } from './Contexts/ModalContext';
function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Home/>
      </ModalProvider>
    </div>
  );
}

export default App;
