import { Outlet, Routes, Route } from 'react-router-dom';

import { Login } from './assets/components/loginHome/Login';
import Home from './assets/components/home/Home';

function Layout() {
  return (
    <div>
      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  );
}
