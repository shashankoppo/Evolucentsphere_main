import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BreadcrumbNav from './components/BreadcrumbNav';
import LiveChat from './components/LiveChat';
import WhatsAppConnect from './components/WhatsAppConnect';
import { AdminProvider } from './context/AdminContext';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

// Pages
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
import EdgeFeed from './pages/EdgeFeed';
import NotFound from './pages/NotFound';

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

// Industry Pages
import Banking from './pages/Industries/Banking';
import Healthcare from './pages/Industries/Healthcare';
import Manufacturing from './pages/Industries/Manufacturing';
import Retail from './pages/Industries/Retail';
import Insurance from './pages/Industries/Insurance';
import Government from './pages/Industries/Government';
import IndustriesIndex from './pages/Industries/Index';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminOverview from './pages/admin/AdminOverview';
import AdminBlog from './pages/admin/AdminBlog';
import AdminCaseStudies from './pages/admin/AdminCaseStudies';
import AdminContacts from './pages/admin/AdminContacts';
import AdminInvestorResources from './pages/admin/AdminInvestorResources';

function Layout({ children, hideFooter = false }: { children: React.ReactNode; hideFooter?: boolean }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow relative pt-16">
        <BreadcrumbNav />
        {children}
      </main>
      {!hideFooter && <Footer />}
      <LiveChat />
      <WhatsAppConnect />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AdminProvider>
        <Router>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/services" element={<Layout><Services /></Layout>} />
            <Route path="/technologies" element={<Layout><Technologies /></Layout>} />
            <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/investor-relations" element={<Layout><InvestorRelations /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/ai-lab" element={<Layout><AILab /></Layout>} />
            <Route path="/careers" element={<Layout><Careers /></Layout>} />
            <Route path="/search" element={<Layout><Search /></Layout>} />
            <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
            <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
            <Route path="/cookie-policy" element={<Layout><CookiePolicy /></Layout>} />
            <Route path="/sitemap" element={<Layout><Sitemap /></Layout>} />
            <Route path="/edgefeed" element={<Layout><EdgeFeed /></Layout>} />

            {/* Dynamic Detail Pages */}
            <Route path="/blog/:id" element={<Layout><BlogPostDetail /></Layout>} />
            <Route path="/case-studies/:id" element={<Layout><CaseStudyDetail /></Layout>} />
            <Route path="/investor-relations/:id" element={<Layout><InvestorResourceDetail /></Layout>} />

            {/* Division Routes */}
            <Route path="/it-services" element={<Layout><ITServices /></Layout>} />
            <Route path="/bpo-services" element={<Layout><BPOServices /></Layout>} />
            <Route path="/kpo-services" element={<Layout><KPOServices /></Layout>} />
            <Route path="/consultancy" element={<Layout><ConsultancyServices /></Layout>} />
            <Route path="/enterprise-it" element={<Layout><EnterpriseIT /></Layout>} />

            {/* ELSxTech Sub-Division Routes */}
            <Route path="/it-services/cloud-infrastructure" element={<Layout><CloudInfrastructure /></Layout>} />
            <Route path="/it-services/cybersecurity" element={<Layout><CybersecuritySolutions /></Layout>} />
            <Route path="/it-services/digital-transformation" element={<Layout><DigitalTransformation /></Layout>} />
            <Route path="/it-services/software-development" element={<Layout><SoftwareDevelopment /></Layout>} />
            <Route path="/it-services/ai-analytics" element={<Layout><DataAIAnalytics /></Layout>} />
            <Route path="/it-services/digital-marketing" element={<Layout><DigitalExperienceMarketing /></Layout>} />
            <Route path="/it-services/iot-emerging-tech" element={<Layout><IoTEmergingTechnologies /></Layout>} />
            <Route path="/it-services/managed-it" element={<Layout><ManagedITServices /></Layout>} />
            <Route path="/it-services/enterprise-software" element={<Layout><EnterpriseSoftwareSolutions /></Layout>} />

            {/* Industry Routes */}
            <Route path="/industries" element={<Layout><IndustriesIndex /></Layout>} />
            <Route path="/industries/banking" element={<Layout><Banking /></Layout>} />
            <Route path="/industries/healthcare" element={<Layout><Healthcare /></Layout>} />
            <Route path="/industries/manufacturing" element={<Layout><Manufacturing /></Layout>} />
            <Route path="/industries/retail" element={<Layout><Retail /></Layout>} />
            <Route path="/industries/insurance" element={<Layout><Insurance /></Layout>} />
            <Route path="/industries/government" element={<Layout><Government /></Layout>} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>}>
              <Route index element={<AdminOverview />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="case-studies" element={<AdminCaseStudies />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="investor-resources" element={<AdminInvestorResources />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </Router>
      </AdminProvider>
    </HelmetProvider>
  );
}
