import { lazy, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

const Main = lazy(() => import('@/pages/main'));
const CatViewer = lazy(() => import('@/pages/CatViewer'));
const WorkingHours = lazy(() => import('@/pages/WorkingHours'));

const renderLoader = () => <p>Loading</p>;

export default function Router() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='cat-viewer' element={<CatViewer />} />
        <Route path='working-hour' element={<WorkingHours />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  );
}
