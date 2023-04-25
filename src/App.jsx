import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = lazy(() => import('./pages/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

const Loading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

function App() {
  return (
    <Suspense fallback={<Loading>Loading...</Loading>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
