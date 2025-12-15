import { Outlet, Routes, Route } from 'react-router-dom';

import { Login } from './assets/components/home/Login';
import Products from './assets/components/products/Products';

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
        <Route path='products' element={<Products />} />
      </Route>
    </Routes>
  );
}
