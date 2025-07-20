import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Hero from './pages/Hero';
import CallToAction from './pages/CallToAction';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import CodingProfiles from './pages/CodingProfiles';
import Achievements from './pages/Achievements';
import SocialLinks from './pages/SocialLinks';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/cta" element={<CallToAction />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/coding-profiles" element={<CodingProfiles />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/social" element={<SocialLinks />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;