import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
  return (
    <>
      <Navigation />

      {/* Push content below fixed navbar */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profiles" element={<Profiles />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
    </>
  );
}
