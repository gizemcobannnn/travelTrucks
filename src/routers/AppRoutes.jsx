import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));

// const LoginPage = lazy(() => import('../pages/LoginPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
//const PrivateRoutes = () => {}
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage.jsx'));
 function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id/details" element={<DetailsPage />} />
        </Routes>
    </Suspense>
  )
}

export default AppRoutes;