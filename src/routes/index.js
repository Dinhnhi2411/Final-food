import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import BlankLayout from '../layouts/BlankLayout';
import MainLayout from '../layouts/MainLayout';
import AccountPage from '../pages/AccountPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import DetailProduct from '../pages/DetailProduct';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import OrderPage from '../pages/OrderPage';
import RegisterPage from '../pages/RegisterPage';
import StorePage from '../pages/StorePage';

function Router() {
  let location = useLocation();
  let state = location.state;

  return (
   <>
   <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/product/:id" element={<DetailProduct/>}/>
      <Route path="/store" element={<StorePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>

    </Route>

    <Route
    path='/'
    element={
      <AuthProvider>
        <MainLayout/>
      </AuthProvider>
    }
    >
   
            <Route index element={<HomePage />} />
            <Route path="/product/:id" element={<DetailProduct />} />
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/account" element={<AccountPage />}/>
      </Route>

          <Route element={<BlankLayout />}>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

   </Routes>
  
   </>
  
  )
}

export default Router
