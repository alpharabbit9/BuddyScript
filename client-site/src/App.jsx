import Lenis from 'lenis';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';

import Feed from './Pages/Feed/Feed';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import PageLoader from './components/PageLoader';
import { useAuthStore } from './store/useAuthStore';

const App = () => {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  // Initialize Lenis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Feed /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!authUser ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
