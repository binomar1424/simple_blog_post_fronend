import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LoadingPage = lazy(() => import('./pages/LoadingPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const PageNotFounded = lazy(() => import('./pages/PageNotFounded'));

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<PageNotFounded />} />
          {/* <Route path='/' element={<LandingPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App