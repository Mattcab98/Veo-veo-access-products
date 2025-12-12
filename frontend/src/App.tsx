import { Outlet, Routes, Route } from 'react-router-dom';

import { Login } from './assets/components/home/Login';

function Layout() {
  return (
    <div>
      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
}

function Home() {
  return (
    <>
      <Login />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
