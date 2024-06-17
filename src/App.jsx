import React, { Suspense, createContext, lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { WebContext } from './WebContext';

const LoadingPage = lazy(() => import('./pages/LoadingPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const PageNotFounded = lazy(() => import('./pages/PageNotFounded'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// const WebContext = createContext(null);

function App() {
  const [showBlogPopUp, setShowBlogPopUp] = useState(false);
  const [reloadData, setRelaodData] = useState(false);

  return (
    <WebContext.Provider value={{showBlogPopUp, setShowBlogPopUp, reloadData, setRelaodData}}>
      <div>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<PageNotFounded />} />
          </Routes>
        </Suspense>
      </div>
    </WebContext.Provider>
  )
}

export default App