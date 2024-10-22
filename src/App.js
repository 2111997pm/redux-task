// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter, Link } from 'react-router-dom';
import  {useSelector}  from 'react-redux';
import Login from './components/Login';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth);
  console.log(isAuthenticated,'test for token')

  return (

    <>
  <h1>The heading</h1>
    <BrowserRouter>
    <Link to="/add-product">
    Add Product
    </Link>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/products" /> : <Login />} />      
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={isAuthenticated ? <ProductList /> : <Navigate to="/login" />} />
         <Route path="/add-product" element={isAuthenticated ? <AddProduct /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
