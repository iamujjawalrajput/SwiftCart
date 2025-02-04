import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserRegister from './views/UserRegister';
import UserLogin from './views/UserLogin';
import 'rsuite/dist/rsuite.min.css';
import { DataProvider } from './store/StoreData';
import MainSection from './components/MainComponet/MainSection';
function App() {
return (
    <>
       <DataProvider> 
        <BrowserRouter>
          <Routes>
            <Route exact path='/login' element={<UserLogin />} />
            <Route exact path='/signup' element={<UserRegister />} />
            <Route exact path='/' element={<MainSection/>} />
          </Routes>
        </BrowserRouter>
       </DataProvider> 
    </>
  );
}

export default App;