import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

function App() {
  return (
    <Suspense fallback={<div className="Loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

// style={{ textAlign: 'center' }}
