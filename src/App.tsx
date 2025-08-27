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
import Search from './pages/Search';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Sitemap from './pages/Sitemap';
import BlogPostDetail from './pages/BlogPostDetail';
import CaseStudyDetail from './pages/CaseStudyDetail';
import InvestorResourceDetail from './pages/InvestorResourceDetail';

// Division Pages
import ITServices from './pages/divisions/ITServices';
import BPOServices from './pages/divisions/BPOServices';
import KPOServices from './pages/divisions/KPOServices';
import ConsultancyServices from './pages/divisions/ConsultancyServices';
import EnterpriseIT from './pages/divisions/EnterpriseIT';

// ELSxTech Sub-Division Pages
import CloudInfrastructure from './pages/divisions/elsxtech/CloudInfrastructure';
import CybersecuritySolutions from './pages/divisions/elsxtech/CybersecuritySolutions';
import DigitalTransformation from './pages/divisions/elsxtech/DigitalTransformation';
import SoftwareDevelopment from './pages/divisions/elsxtech/SoftwareDevelopment';
import DataAIAnalytics from './pages/divisions/elsxtech/DataAIAnalytics';
import DigitalExperienceMarketing from './pages/divisions/elsxtech/DigitalExperienceMarketing';
import IoTEmergingTechnologies from './pages/divisions/elsxtech/IoTEmergingTechnologies';
import ManagedITServices from './pages/divisions/elsxtech/ManagedITServices';
import EnterpriseSoftwareSolutions from './pages/divisions/elsxtech/EnterpriseSoftwareSolutions';

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
              <Route path="/search" element={<Search />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* Dynamic Detail Pages */}
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
              <Route path="/investor-relations/:id" element={<InvestorResourceDetail />} />

              {/* Division Routes */}
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/bpo-services" element={<BPOServices />} />
              <Route path="/kpo-services" element={<KPOServices />} />
              <Route path="/consultancy" element={<ConsultancyServices />} />
              <Route path="/enterprise-it" element={<EnterpriseIT />} />

              {/* ELSxTech Sub-Division Routes */}
              <Route path="/it-services/cloud-infrastructure" element={<CloudInfrastructure />} />
              <Route path="/it-services/cybersecurity" element={<CybersecuritySolutions />} />
              <Route path="/it-services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/it-services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/it-services/ai-analytics" element={<DataAIAnalytics />} />
              <Route path="/it-services/digital-marketing" element={<DigitalExperienceMarketing />} />
              <Route path="/it-services/iot-emerging-tech" element={<IoTEmergingTechnologies />} />
              <Route path="/it-services/managed-it" element={<ManagedITServices />} />
              <Route path="/it-services/enterprise-software" element={<EnterpriseSoftwareSolutions />} />
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