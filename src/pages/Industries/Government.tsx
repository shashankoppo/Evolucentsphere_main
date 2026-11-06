import { Building, Shield, Database, Users, Lock, AlertCircle, FileText } from 'lucide-react';
import IndustryLayout from '../../components/IndustryLayout';
import { getRelatedIndustries } from '../../lib/industries';

const services = [
  {
    icon: Database,
    title: 'Digital Government Services',
    description: 'Citizen-facing digital platforms and e-governance solutions that improve service delivery.',
    features: ['Online Service Portals', 'Digital Identity Management', 'E-Procurement Systems', 'Citizen Engagement Platforms'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Government-grade security with zero-trust architecture and continuous threat monitoring.',
    features: ['Zero Trust Architecture', 'Data Sovereignty Controls', 'FedRAMP Compliance', 'Security Operations Center'],
  },
  {
    icon: Building,
    title: 'Smart City Infrastructure',
    description: 'IoT-enabled urban management and public safety systems for modern cities.',
    features: ['Traffic Management AI', 'Public Safety Monitoring', 'Utility Optimization', 'Environmental Analytics'],
  },
  {
    icon: Users,
    title: 'Workforce Modernization',
    description: 'Digital transformation of government workforce operations and citizen services.',
    features: ['HR Automation', 'Training Platforms', 'Collaboration Tools', 'Process Digitization'],
  },
];

const challenges = [
  {
    icon: Lock,
    title: 'Legacy System Risk',
    description: 'Aging IT infrastructure that creates security vulnerabilities and prevents modern citizen service delivery.',
  },
  {
    icon: AlertCircle,
    title: 'Citizen Service Gaps',
    description: 'Slow, paper-based processes that frustrate citizens and create long wait times for essential services.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Threats',
    description: 'Nation-state attacks and ransomware targeting sensitive government data and critical public infrastructure.',
  },
  {
    icon: FileText,
    title: 'Regulatory Complexity',
    description: 'Overwhelming compliance requirements across federal, state, and local jurisdictions with limited resources.',
  },
];

const solutions = [
  {
    title: 'Secure Cloud Modernization',
    description: 'FedRAMP-compliant cloud migration that replaces legacy systems with scalable, resilient government platforms — reducing infrastructure costs by 35%.',
  },
  {
    title: 'Digital Citizen Service Portal',
    description: 'Self-service e-government platform that handles applications, permits, and payments online 24/7 — cutting service delivery times by 50%.',
  },
  {
    title: 'Zero-Trust Government Security',
    description: 'Defense-grade cybersecurity with continuous monitoring, threat hunting, and automated incident response — reducing security incidents by 40%.',
  },
  {
    title: 'Automated Compliance Management',
    description: 'Centralized compliance tracking and reporting that streamlines audits across all regulatory frameworks — cutting compliance overhead by 60%.',
  },
];

const metrics = [
  { value: '99.9%', label: 'System Uptime' },
  { value: '50%', label: 'Faster Service Delivery' },
  { value: '40%', label: 'Security Incident Reduction' },
  { value: '60%', label: 'Less Compliance Overhead' },
];

const faqs = [
  {
    question: 'Are your government solutions FedRAMP compliant?',
    answer: 'Yes. We build on FedRAMP-authorized cloud platforms and follow FedRAMP security controls throughout development. Our solutions also support FISMA, NIST 800-53, and state-specific compliance frameworks.',
  },
  {
    question: 'Can you help us migrate legacy government systems to the cloud?',
    answer: 'Absolutely. We specialize in legacy modernization for government agencies, using a phased migration approach that maintains operational continuity. We handle data sovereignty, security clearance requirements, and zero-downtime cutover.',
  },
  {
    question: 'Do you build smart city solutions for municipalities?',
    answer: 'Yes. Our smart city platform includes IoT-enabled traffic management, public safety monitoring, utility optimization, and environmental analytics. We work with cities of all sizes, from small towns to major metropolitan areas.',
  },
  {
    question: 'How do you ensure data sovereignty for government data?',
    answer: 'All government data is stored in jurisdiction-specific, sovereign cloud environments with encryption at rest and in transit. We implement data residency controls, access logging, and audit trails to meet the strictest government data protection requirements.',
  },
];

export default function Government() {
  return (
    <IndustryLayout
      title="Government"
      pageTitle="Government & Public Sector Solutions | ELSxGlobal"
      description="Digital government solutions including e-governance platforms, smart city infrastructure, cybersecurity compliance, and workforce modernization for public sector agencies."
      keywords={['Government Technology', 'E-Governance', 'Smart City', 'GovTech', 'Digital Government', 'Public Sector IT', 'FedRAMP Compliance', 'Zero Trust Security', 'Citizen Services', 'Cloud Modernization']}
      heroImage="https://images.pexels.com/photos/32358146/pexels-photo-32358146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Government building representing public sector infrastructure"
      accentColor="slate"
      tagline="Empower public sector digital transformation with secure, scalable, citizen-centric technology — from e-governance platforms to smart city infrastructure."
      services={services}
      challenges={challenges}
      solutions={solutions}
      metrics={metrics}
      faqs={faqs}
      relatedIndustries={getRelatedIndustries('/industries/government')}
      ctaTitle="Ready to Modernize Government Services?"
      ctaDescription="Let us help you build secure, efficient, citizen-centric digital infrastructure that serves the public better."
      ctaButtonText="Schedule a Consultation"
      targetIndustry="Government"
    />
  );
}
