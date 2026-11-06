import { Heart, Shield, Brain, Lock, AlertCircle, Clock, Activity } from 'lucide-react';
import IndustryLayout from '../../components/IndustryLayout';
import { getRelatedIndustries } from '../../lib/industries';

const services = [
  {
    icon: Heart,
    title: 'Healthcare IT Solutions',
    description: 'Comprehensive digital health platforms spanning EHR, telemedicine, and patient engagement.',
    features: ['Electronic Health Records', 'Telemedicine Platforms', 'Patient Portals', 'Healthcare Analytics'],
  },
  {
    icon: Brain,
    title: 'Medical AI & Diagnostics',
    description: 'AI-powered diagnostic tools and predictive analytics that enhance clinical decision-making.',
    features: ['Medical Imaging AI', 'Predictive Diagnostics', 'Drug Discovery Support', 'Clinical Decision Support'],
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance & Security',
    description: 'End-to-end healthcare data security and compliance management for HIPAA, HITECH, and GDPR.',
    features: ['HIPAA Compliance Automation', 'End-to-End Encryption', 'Audit Trail Management', 'Privacy Protection'],
  },
];

const challenges = [
  {
    icon: Lock,
    title: 'Data Privacy & HIPAA',
    description: 'Protecting sensitive patient health records from breaches while maintaining compliance with HIPAA, HITECH, and GDPR across all systems.',
  },
  {
    icon: AlertCircle,
    title: 'Interoperability Gaps',
    description: 'Siloed EHR systems and medical devices that prevent seamless data exchange across care teams and facilities.',
  },
  {
    icon: Clock,
    title: 'Administrative Burden',
    description: 'Excessive paperwork and manual processes that reduce clinician time with patients and drive burnout.',
  },
  {
    icon: Activity,
    title: 'Rising Care Costs',
    description: 'Containing healthcare costs while improving outcomes amid growing patient volumes and chronic disease management.',
  },
];

const solutions = [
  {
    title: 'HIPAA-Compliant Data Platform',
    description: 'End-to-end encrypted health data management with audit trails, role-based access controls, and automated compliance reporting that reduces audit prep time by 70%.',
  },
  {
    title: 'FHIR-Based Interoperability',
    description: 'Standards-based health data exchange using HL7 FHIR that connects EHRs, devices, and applications across the entire care continuum.',
  },
  {
    title: 'Clinical Workflow Automation',
    description: 'AI-powered documentation, medical coding, and scheduling that reduces administrative overhead by up to 50% and gives clinicians time back with patients.',
  },
  {
    title: 'Predictive Care Analytics',
    description: 'Machine learning models that identify high-risk patients, optimize treatment pathways, and reduce 30-day readmissions by 35%.',
  },
];

const metrics = [
  { value: '99.9%', label: 'HIPAA Compliance' },
  { value: '50%', label: 'Less Administrative Work' },
  { value: '35%', label: 'Lower Readmission Rates' },
  { value: '4x', label: 'Faster Data Exchange' },
];

const faqs = [
  {
    question: 'Are your healthcare solutions HIPAA compliant?',
    answer: 'Yes. All our healthcare platforms are built HIPAA-compliant from the ground up, with end-to-end encryption, role-based access controls, full audit trails, and automated compliance reporting. We also support HITECH and GDPR requirements.',
  },
  {
    question: 'Can your systems integrate with our existing EHR?',
    answer: 'We use HL7 FHIR standards to integrate with all major EHR systems including Epic, Cerner, Allscripts, and Athenahealth. Our interoperability layer ensures bi-directional data exchange across EHRs, devices, and third-party applications.',
  },
  {
    question: 'How does your medical AI improve diagnostics?',
    answer: 'Our AI models analyze medical images, lab results, and patient history to flag abnormalities, suggest differential diagnoses, and prioritize urgent cases. Clinical decision support tools help physicians make faster, more accurate decisions without replacing their judgment.',
  },
  {
    question: 'Do you offer telemedicine solutions for rural clinics?',
    answer: 'Yes. Our telemedicine platform is designed for low-bandwidth environments and includes remote consultation, e-prescribing, and remote patient monitoring — ideal for expanding access to care in underserved and rural communities.',
  },
];

export default function Healthcare() {
  return (
    <IndustryLayout
      title="Healthcare"
      pageTitle="Healthcare IT Solutions | ELSxGlobal"
      description="Healthcare technology solutions including EHR systems, telemedicine, medical AI diagnostics, and HIPAA-compliant data platforms for hospitals and clinics."
      keywords={['Healthcare IT', 'Medical Technology', 'Electronic Health Records', 'Telemedicine', 'Healthcare Analytics', 'Medical AI', 'HIPAA Compliance', 'FHIR Interoperability', 'Clinical Decision Support', 'Patient Engagement']}
      heroImage="https://images.pexels.com/photos/6129679/pexels-photo-6129679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Healthcare worker operating modern medical infusion pump in hospital"
      accentColor="blue"
      tagline="Revolutionize patient care with HIPAA-compliant health platforms, AI-powered diagnostics, and interoperable systems that connect every point in the care continuum."
      services={services}
      challenges={challenges}
      solutions={solutions}
      metrics={metrics}
      faqs={faqs}
      relatedIndustries={getRelatedIndustries('/industries/healthcare')}
      ctaTitle="Modernize Your Healthcare Operations"
      ctaDescription="Enhance patient care, reduce administrative burden, and achieve full regulatory compliance with our healthcare technology solutions."
      ctaButtonText="Schedule Healthcare Consultation"
      targetIndustry="Healthcare"
    />
  );
}
