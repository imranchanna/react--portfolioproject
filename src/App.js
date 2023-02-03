import React from 'react';
import Navbar from "./Component/Navbar";
import Product from "./Component/Product"
import AddProduct from "./Component/Add Product";
import UpdateProduct from './Component/updateproduct'
import LogoutProduct from './Component/Logoutproduct';
import ProfileProduct from './Component/Profileproduct';
import Home from './Component/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar />}/> */}
        <Route path='/Product' element={<Product />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/UpdateProduct" element={<UpdateProduct />} />
          <Route path="/logoutProduct" element={<LogoutProduct />} />
          <Route path="/profileProduct" element={<ProfileProduct />} />

          <Route path="/Home" element={<Home />} />
        
      </Routes>
    </Router>
      
  );
}

export default App;
