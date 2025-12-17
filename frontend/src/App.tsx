import {Outlet, Routes, Route } from 'react-router-dom';

import { Login } from './assets/components/loginHome/Login';
import Home from './assets/components/home/Home';


function PublicLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

function PrivateLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default function App() {
  return (

    <Routes>

      {/* 🌐 RUTAS PÚBLICAS */}
      <Route element={<PublicLayout />}>
        <Route path='/' element={<Login />} />
      </Route>

      {/* 🔒 RUTAS PRIVADAS */}
      <Route element={<PrivateLayout />}>
        <Route path='/home' element={<Home />} />
      </Route>


    </Routes>



  );
}
