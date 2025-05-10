import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/'));

const PublicRoutes = () => {

}
const PrivateRoutes = () => {

}

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="" element={
                <PublicRoutes>
                    <HomePage />
                </PublicRoutes>}>
            </Route>
            <Route>
                
            </Route>
        </Routes>
    </Suspense>
  )
}
