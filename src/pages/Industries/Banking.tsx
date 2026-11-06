import { Shield, BarChart, Zap, Lock, TrendingDown, Users } from 'lucide-react';
import IndustryLayout from '../../components/IndustryLayout';
import { getRelatedIndustries } from '../../lib/industries';

const services = [
  {
    icon: Shield,
    title: 'Digital Banking Platforms',
    description: 'Secure, scalable mobile and online banking experiences built for modern financial institutions.',
    features: ['Mobile Banking Apps', 'Internet Banking Portals', 'Payment Gateway Integration', 'Real-time Fraud Detection'],
  },
  {
    icon: BarChart,
    title: 'Risk & Compliance Management',
    description: 'AI-driven risk assessment and automated regulatory reporting across Basel III, Dodd-Frank, and MiFID II.',
    features: ['Credit Risk Analytics', 'Market Risk Modeling', 'Operational Risk Monitoring', 'Automated Regulatory Filing'],
  },
  {
    icon: Zap,
    title: 'Fintech Innovation',
    description: 'Next-generation financial products including blockchain payments, robo-advisory, and embedded finance.',
    features: ['Blockchain Payment Rails', 'AI-Powered Robo-Advisory', 'RegTech Automation', 'Open Banking APIs'],
  },
];

const challenges = [
  {
    icon: Shield,
    title: 'Regulatory Complexity',
    description: 'Navigating evolving regulations like Basel III, Dodd-Frank, and MiFID II across multiple jurisdictions with limited compliance resources.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Threats',
    description: 'Defending against sophisticated financial fraud, data breaches, and ransomware targeting customer assets and trust.',
  },
  {
    icon: TrendingDown,
    title: 'Legacy Core Systems',
    description: 'Outdated core banking infrastructure that drives up maintenance costs and blocks rapid feature delivery.',
  },
  {
    icon: Users,
    title: 'Rising Customer Expectations',
    description: 'Meeting demands for real-time, seamless, personalized digital banking across every channel and device.',
  },
];

const solutions = [
  {
    title: 'Automated Compliance Engine',
    description: 'AI-driven regulatory monitoring and reporting that ensures continuous compliance across all jurisdictions with real-time alerts and audit-ready documentation.',
  },
  {
    title: 'Zero-Trust Security Framework',
    description: 'Multi-layered fraud detection and threat prevention with behavioral analytics, encrypted transaction monitoring, and automated incident response.',
  },
  {
    title: 'Cloud-Native Core Modernization',
    description: 'Microservices-based core banking migration that eliminates legacy debt, reduces maintenance costs by 45%, and enables weekly feature releases.',
  },
  {
    title: 'Omnichannel Digital Banking',
    description: 'Unified mobile, web, and API-first banking experiences with instant payments, personalized financial insights, and seamless onboarding.',
  },
];

const metrics = [
  { value: '99.9%', label: 'Regulatory Compliance Rate' },
  { value: '60%', label: 'Faster Fraud Detection' },
  { value: '45%', label: 'Cost Reduction' },
  { value: '3x', label: 'Faster Time-to-Market' },
];

const faqs = [
  {
    question: 'What banking regulations do your solutions support?',
    answer: 'Our compliance automation covers Basel III, Dodd-Frank, MiFID II, PCI DSS, SOX, and AML/KYC requirements. The engine adapts to jurisdiction-specific rules and updates automatically as regulations evolve.',
  },
  {
    question: 'Can you modernize our core banking system without downtime?',
    answer: 'Yes. We use a strangler-fig migration approach that incrementally replaces legacy components with cloud-native microservices, allowing old and new systems to run in parallel until full cutover.',
  },
  {
    question: 'How does your fraud detection system work?',
    answer: 'Our AI models analyze transaction patterns, device fingerprints, geolocation, and behavioral biometrics in real time. Suspicious transactions are flagged or blocked within milliseconds, reducing fraud losses by up to 60%.',
  },
  {
    question: 'Do you offer solutions for neobanks and digital-only banks?',
    answer: 'Absolutely. Our cloud-native banking platform is ideal for neobanks — it provides core banking, payments, KYC/AML, and customer onboarding out of the box, launchable in weeks rather than months.',
  },
];

export default function Banking() {
  return (
    <IndustryLayout
      title="Banking & Finance"
      pageTitle="Banking & Financial Services Solutions | ELSxGlobal"
      description="Digital banking platforms, risk management, fintech innovation, and regulatory compliance services for banks and financial institutions."
      keywords={['Digital Banking', 'Financial Services', 'Risk Management', 'Fintech Solutions', 'Banking Technology', 'Financial Compliance', 'Payment Processing', 'Fraud Detection', 'Core Banking Modernization', 'Open Banking API']}
      heroImage="https://images.pexels.com/photos/11363562/pexels-photo-11363562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Credit and debit cards representing digital banking technology"
      accentColor="green"
      tagline="Transform your financial institution with secure digital banking platforms, AI-driven risk management, and innovative fintech solutions built for the regulatory realities of modern banking."
      services={services}
      challenges={challenges}
      solutions={solutions}
      metrics={metrics}
      faqs={faqs}
      relatedIndustries={getRelatedIndustries('/industries/banking')}
      ctaTitle="Transform Your Financial Services"
      ctaDescription="Partner with us to modernize your banking operations, enhance customer experiences, and stay ahead of regulatory demands."
      ctaButtonText="Schedule Consultation"
      targetIndustry="Banking and Finance"
    />
  );
}
