import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));

// const LoginPage = lazy(() => import('../pages/LoginPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
//const PrivateRoutes = () => {}

 function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
    </Suspense>
  )
}

export default AppRoutes;