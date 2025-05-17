import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';


const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));

// const LoginPage = lazy(() => import('../pages/LoginPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
//const PrivateRoutes = () => {}
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage.jsx'));
 function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id/details" element={<DetailsPage />} />
            <Route path="/*" element={<NotFoundPage/>}></Route>
        </Routes>
    </Suspense>
  )
}

export default AppRoutes;