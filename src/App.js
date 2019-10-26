import React from 'react';
import ContextProvider from './ContextProvider';
import Carousel from './components/Carousel';

import './App.css';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Carousel />
      </div>
    </ContextProvider>
  );
}

export default App;
