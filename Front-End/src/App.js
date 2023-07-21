import React from 'react'
import './App.css'
import ContactList from './components/ContactList';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {AddContact}  from './components/AddContact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <div className='container'>
          <Routes>
          <Route path='/contact' Component={ContactList}></Route>
          <Route path="*" element={<Navigate to="/contact" replace />} />
          <Route path='/addcontact' Component={AddContact}></Route>
          <Route path='/edit/${contact.id}' Component={AddContact}></Route>
          </Routes>
      </div>
     
     <Footer/>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
