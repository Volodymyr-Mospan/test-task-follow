import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
