// App.js
import "./App.css";
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Customers from './components/pages/Customers';
import SignIn from './components/pages/SignIn';
import React from "react";
import Layout from './components/Layout';
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Accounts from "./components/pages/Accounts";
import Services from"./components/pages/Services";
import SignUp from './components/pages/SignUp';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/' element={<Layout />}>
          {/* Public link */}
          <Route path='/sign-in' element = {<SignIn />} />

          {/* Protected link */}
          <Route element={<RequireAuth />}>
            <Route path='/customers' element ={<Customers />} />
            <Route path='/products' element ={<Products />} />      
            <Route path='/accounts' element={<Accounts/> }/>
            <Route path='/services' element = {<Services />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}