import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Main = lazy(() => import('@/components/home'));
const BasicPage = lazy(() => import('@/components/page1/BasicPage'));

const renderLoader = () => <p>Loading</p>;

export default function Router() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='/basic' element={<BasicPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  );
}
