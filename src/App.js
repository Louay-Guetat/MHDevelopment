import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css'
import Layout from './hocs/Layout';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound';
import ConceptionImpression from './pages/services/ConceptionImpression';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import Shooting from './pages/services/Shooting';
import DeveloppementWeb from './pages/services/DeveloppementWeb';
import ReferencementWeb from './pages/services/ReferencementWeb';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Layout> <Home /> </Layout>} />
          <Route path='/conception_et_impression' element={<Layout> <ConceptionImpression /></Layout>} />
          <Route path='/social_media' element={<Layout> <SocialMediaMarketing /></Layout>} />
          <Route path='/shooting' element={<Layout> <Shooting /></Layout>} />
          <Route path='/dev_web' element={<Layout> <DeveloppementWeb /></Layout>} />
          <Route path='/ref_web' element={<Layout> <ReferencementWeb /></Layout>} />
          <Route path='/contact' element={<Layout> <Contact /></Layout>} />

          {/* 404 not found */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Router>
  );
}

export default App;
