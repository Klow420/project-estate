import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';

export default function App() {
  const [cookieConsent, setCookieConsent] = useState(localStorage.getItem('cookieConsent'));

  const handleConsentAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent('true');
  };

  useEffect(() => {
    if (!cookieConsent) {
      const script = document.createElement('script');
      script.id = 'cookieyes';
      script.type = 'text/javascript';
      script.src = 'https://cdn-cookieyes.com/client_data/07b5adf00d50b5cd943d04f1/script.js';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [cookieConsent]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>
      </Routes>
      {/* Le composant CookieConsentBanner est maintenant intégré directement dans le useEffect */}
      {/* Il n'est plus nécessaire de l'afficher conditionnellement ici */}
    </BrowserRouter>
  );
}
