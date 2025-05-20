import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import WhatsAppConnect from './components/WhatsAppConnect';
import Home from './pages/Home';
import About from './pages/About';
import Services from './components/Services';
import Technologies from './pages/Technologies';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import InvestorRelations from './pages/InvestorRelations';
import Contact from './components/Contact';
import AILab from './pages/AILab';
import Careers from './pages/Careers';

// Division Pages
import ELSxTech from './pages/divisions/ELSxTech';
import ELSxBPO from './pages/divisions/ELSxBPO';
import ELSxKPO from './pages/divisions/ELSxKPO';
import ELSxConsultancy from './pages/divisions/ELSxConsultancy';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow relative pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/investor-relations" element={<InvestorRelations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai-lab" element={<AILab />} />
              <Route path="/careers" element={<Careers />} />

              {/* Division Routes */}
              <Route path="/tech" element={<ELSxTech />} />
              <Route path="/bpo" element={<ELSxBPO />} />
              <Route path="/kpo" element={<ELSxKPO />} />
              <Route path="/consultancy" element={<ELSxConsultancy />} />
            </Routes>
          </main>
          <Footer />
          <LiveChat />
          <WhatsAppConnect />
        </div>
      </Router>
    </HelmetProvider>
  );
}