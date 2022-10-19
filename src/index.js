import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import Shop from './container/Shop/ShopCard';
import NoPage from './container/NoPage';
import Detail from './container/Detail/Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
     <BrowserRouter forceRefresh={true}  >
      <Routes  >
        
          <Route exact  path="/"  element={<Home />} />
          <Route exact  path="/shop" element={<Shop />} />
          <Route exact  path="/shop/:slug" element={<Detail />} />
       

          <Route exact path="*" element={<NoPage />} />

        
       
      </Routes>
    </BrowserRouter>
   
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
