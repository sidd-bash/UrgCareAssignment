import React from 'react';
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
