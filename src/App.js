import React from 'react';
import Home from "../src/Routes/Home/index"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
