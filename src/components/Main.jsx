import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Contact from '../components/Contact';
import TermsAndConditions from '../components/TermsAndConditions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../scripts/i18n';
import ReactGA from 'react-ga';
import TrackPageView from '../components/TrackPageView.jsx';
import ScrollToTop from '../components/Scroll.jsx';
import Ecommerces from './Ecommerce.jsx';

ReactGA.initialize('G-723MZSLEXC');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <TrackPageView />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/ecommerces' element={<Ecommerces />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/termsandconditions' element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
