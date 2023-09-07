import React from 'react'
import './App.css'
import ContactList from './components/ContactList';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {AddContact}  from './components/AddContact';
import Update from './components/Update';
import "./image/back.css"
import { useState } from 'react';
import { useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Registration';


function App() {
  const[isLoggedIn,setLoggedIn] = useState(false);

  useEffect(() =>{
    const userToken = localStorage.getItem('userToken');
    if(userToken){
      setLoggedIn(true);
    }
  },[]);
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
      <div className='container'>
          <Routes>
          <Route path='/contact' Component={ContactList}></Route>
          <Route path="*" element={<Navigate to="/contact" replace />} />
          <Route path='/addcontact' Component={AddContact}></Route>
          <Route path ='/register' Component={Register}></Route>
          <Route path='/login' Component={Login} ></Route>
          <Route path='/edit/:id' Component={Update}></Route>
          </Routes>
      </div>
     
     {/* <Footer/> */}
     </BrowserRouter>
      
    </div>
  );
}

export default App;
