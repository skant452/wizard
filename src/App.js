import React from 'react'
import './App.css'
import Home from './Component/Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nftshop from './Component/Pages/Nftshop';
import Nftecosystem from './Component/Pages/Nftecosystem';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Nftshop" element={<Nftshop />}/>
        <Route path="/Nftecosystem" element={<Nftecosystem />}/>
        
        
        </Routes>
  
    </BrowserRouter>
    </div>
  )
}

export default App;
