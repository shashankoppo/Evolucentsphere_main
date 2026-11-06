import { Shield, BarChart, FileText, Users, Clock, AlertTriangle, TrendingDown } from 'lucide-react';
import IndustryLayout from '../../components/IndustryLayout';
import { getRelatedIndustries } from '../../lib/industries';

const services = [
  {
    icon: Shield,
    title: 'Claims Processing Automation',
    description: 'AI-powered claims management with intelligent triage, document processing, and fraud detection.',
    features: ['Automated Claims Triage', 'Fraud Detection AI', 'Document Processing', 'Settlement Optimization'],
  },
  {
    icon: BarChart,
    title: 'Underwriting Analytics',
    description: 'Data-driven risk assessment and dynamic pricing models that improve loss ratios.',
    features: ['Predictive Risk Scoring', 'Dynamic Pricing Models', 'Portfolio Analytics', 'Loss Ratio Optimization'],
  },
  {
    icon: FileText,
    title: 'Regulatory Compliance',
    description: 'Automated compliance monitoring and reporting for Solvency II, IFRS 17, and NAIC requirements.',
    features: ['Solvency II Compliance', 'IFRS 17 Reporting', 'Audit Trail Management', 'Policy Lifecycle Tracking'],
  },
  {
    icon: Users,
    title: 'Digital Customer Experience',
    description: 'Digital-first insurance engagement with self-service portals and automated renewals.',
    features: ['Omnichannel Engagement', 'Self-Service Portals', 'Policy Management', 'Renewal Automation'],
  },
];

const challenges = [
  {
    icon: Clock,
    title: 'Slow Claims Processing',
    description: 'Manual, paper-based claims handling that delays settlements and frustrates policyholders at their moment of need.',
  },
  {
    icon: AlertTriangle,
    title: 'Fraud Losses',
    description: 'Sophisticated fraud schemes that drain billions annually and drive up premiums for honest customers.',
  },
  {
    icon: TrendingDown,
    title: 'Underwriting Inefficiency',
    description: 'Reliance on historical data and manual risk assessment that leads to inaccurate pricing and lost competitiveness.',
  },
  {
    icon: Users,
    title: 'Customer Churn',
    description: 'Poor digital experiences and slow service that drive policyholders to competitors at renewal time.',
  },
];

const solutions = [
  {
    title: 'AI-Powered Claims Automation',
    description: 'Intelligent claims triage and document processing that settles simple claims in minutes, not weeks — boosting policyholder satisfaction and reducing adjuster workload by 60%.',
  },
  {
    title: 'Real-Time Fraud Detection',
    description: 'Machine learning models that flag suspicious claims instantly using pattern recognition, network analysis, and behavioral scoring — reducing fraud losses by up to 60%.',
  },
  {
    title: 'Predictive Underwriting Engine',
    description: 'Data-driven risk scoring with hundreds of variables — including telematics, IoT, and alternative data — that enables precise, competitive pricing in real time.',
  },
  {
    title: 'Digital Customer Engagement',
    description: 'Omnichannel self-service portals with personalized policy management, automated renewal outreach, and instant claims status — driving 85% customer satisfaction.',
  },
];

const metrics = [
  { value: '60%', label: 'Faster Claims Processing' },
  { value: '60%', label: 'Fraud Loss Reduction' },
  { value: '40%', label: 'Lower Operating Costs' },
  { value: '85%', label: 'Customer Satisfaction' },
];

const faqs = [
  {
    question: 'How does your AI claims automation handle different claim types?',
    answer: 'Our AI triage engine classifies claims by complexity and routes them appropriately. Simple claims (e.g., minor auto damage) can be auto-settled with photo AI. Complex claims are routed to specialized adjusters with AI-assisted documentation and fraud scoring.',
  },
  {
    question: 'What insurance regulations do your compliance tools support?',
    answer: 'We support Solvency II, IFRS 17, NAIC statutory reporting, GDPR, and state-specific requirements. The compliance engine automatically generates regulatory filings, maintains audit trails, and alerts teams to regulatory changes.',
  },
  {
    question: 'Can your underwriting AI integrate with our existing policy administration system?',
    answer: 'Yes. Our underwriting engine integrates with major policy administration systems including Guidewire, Duck Creek, and custom platforms via REST APIs. Risk scores and pricing recommendations flow directly into your existing workflows.',
  },
  {
    question: 'How quickly can you deploy a digital customer portal?',
    answer: 'Our configurable digital portal can be deployed in 8-12 weeks, including branding, policy management, claims submission, and payment integration. The portal is white-labeled and integrates with your existing backend systems.',
  },
];

export default function Insurance() {
  return (
    <IndustryLayout
      title="Insurance"
      pageTitle="Insurance Industry Solutions | ELSxGlobal"
      description="AI-powered insurance solutions including claims automation, underwriting analytics, fraud detection, and regulatory compliance for insurers."
      keywords={['Insurance Technology', 'Claims Automation', 'Underwriting AI', 'InsurTech', 'Risk Analytics', 'Fraud Detection', 'Solvency II Compliance', 'Policy Administration', 'Digital Insurance', 'Customer Engagement']}
      heroImage="https://images.pexels.com/photos/7734574/pexels-photo-7734574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Signing an insurance policy document"
      accentColor="sky"
      tagline="Modernize insurance operations with AI-driven claims automation, predictive underwriting, real-time fraud detection, and seamless digital customer experiences."
      services={services}
      challenges={challenges}
      solutions={solutions}
      metrics={metrics}
      faqs={faqs}
      relatedIndustries={getRelatedIndustries('/industries/insurance')}
      ctaTitle="Ready to Transform Your Insurance Operations?"
      ctaDescription="Let us help you modernize claims, underwriting, fraud detection, and customer engagement with AI-powered solutions."
      ctaButtonText="Schedule a Consultation"
      targetIndustry="Insurance"
    />
  );
}
