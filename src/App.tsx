import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './components/pages/home/Home';
import { Posts } from "./components/pages/Posts/Posts";
import { Users } from './components/pages/users/Users';
import { Layout } from './components/layout/Layout';
import { NotFound } from './components/pages/notFound/NotFound';
import { LoginPage } from './components/pages/login/LoginPage';
import { RequireAuth } from './components/hoc/RequireAuth';
import './App.css';
import { AuthProvider } from './components/hoc/AuthProvider';
import { Rent } from './components/pages/Rent/Rent'
import { Jets } from './components/pages/Jets/Jets'
import { Heli } from './components/pages/Heli/Heli'
import { FAQ } from './components/pages/Faq/FAQ'


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />  
          <Route path="Home" element={ <Home/> } />
          <Route path="Rent" element={ <Rent/> } />
          <Route path="Jets" element={ <Jets/> } />
          <Route path="Heli" element={ <Heli/> } />
          <Route path="Faq" element={ <FAQ/> } />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
