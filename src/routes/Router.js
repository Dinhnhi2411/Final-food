import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import DetailProduct from '../pages/DetailProduct';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

function Router() {
  let location = useLocation();
  let state = location.state;

  return (
   <>
   <Routes>
   <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>} />
          <Route path="/product/:product" element={<DetailProduct />} />
         
          <Route path="*" element={<NotFoundPage />} />
  </Route>
   </Routes>
   </>
  
  )
}

export default Router
