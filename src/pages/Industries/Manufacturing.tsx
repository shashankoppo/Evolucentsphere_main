import { Cog, Bot, BarChart, AlertTriangle, Eye, Network, TrendingDown } from 'lucide-react';
import IndustryLayout from '../../components/IndustryLayout';
import { getRelatedIndustries } from '../../lib/industries';

const services = [
  {
    icon: Cog,
    title: 'Smart Manufacturing',
    description: 'Industry 4.0 solutions connecting machines, sensors, and analytics for intelligent production.',
    features: ['IoT Sensor Integration', 'Predictive Maintenance', 'Automated Quality Control', 'Production Optimization'],
  },
  {
    icon: Bot,
    title: 'Industrial Automation',
    description: 'Robotic process automation and intelligent systems for manufacturing operations.',
    features: ['Robotic Systems Integration', 'Process Automation', 'Quality Assurance AI', 'Safety Systems'],
  },
  {
    icon: BarChart,
    title: 'Manufacturing Analytics',
    description: 'Data-driven insights that optimize OEE, reduce waste, and maximize yield.',
    features: ['Production Analytics', 'Supply Chain Optimization', 'Performance Monitoring', 'Cost Analysis'],
  },
];

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Unplanned Downtime',
    description: 'Unexpected equipment failures that halt production lines and cost thousands per hour in lost output.',
  },
  {
    icon: Eye,
    title: 'Quality Control Gaps',
    description: 'Manual inspection processes that miss defects, drive rework costs, and damage brand reputation.',
  },
  {
    icon: Network,
    title: 'Disconnected Operations',
    description: 'Isolated machines and systems that prevent real-time visibility into production performance and supply chains.',
  },
  {
    icon: TrendingDown,
    title: 'Rising Input Costs',
    description: 'Volatility in raw material and energy prices squeezing margins on every production run.',
  },
];

const solutions = [
  {
    title: 'Predictive Maintenance AI',
    description: 'IoT sensor analytics that predict equipment failures before they occur, reducing unplanned downtime by 50% and extending asset lifespan.',
  },
  {
    title: 'Computer Vision Quality Inspection',
    description: 'AI-powered defect detection on production lines with 99% accuracy and 24/7 real-time monitoring, replacing manual inspection entirely.',
  },
  {
    title: 'Connected Factory Platform',
    description: 'Unified IoT data layer that provides real-time visibility across machines, lines, and entire facilities — accessible from a single dashboard.',
  },
  {
    title: 'Resource Optimization Engine',
    description: 'AI-driven production planning that minimizes waste, optimizes energy use, and maximizes yield per run, reducing production costs by 30%.',
  },
];

const metrics = [
  { value: '50%', label: 'Less Unplanned Downtime' },
  { value: '99%', label: 'Defect Detection Accuracy' },
  { value: '30%', label: 'Lower Production Costs' },
  { value: '25%', label: 'Higher OEE' },
];

const faqs = [
  {
    question: 'What is Industry 4.0 and how do your solutions fit in?',
    answer: 'Industry 4.0 refers to the fourth industrial revolution — the integration of IoT, AI, cloud computing, and big data into manufacturing. Our smart manufacturing platform connects your machines, analyzes production data in real time, and uses AI to optimize every aspect of operations.',
  },
  {
    question: 'Can you integrate with our existing factory equipment?',
    answer: 'Yes. Our IoT platform supports legacy equipment through retrofit sensors, PLC integration, and industrial protocols like OPC-UA, MQTT, and Modbus. You do not need to replace existing machinery to benefit from smart manufacturing.',
  },
  {
    question: 'How quickly can we see ROI from predictive maintenance?',
    answer: 'Most clients see measurable ROI within 3-6 months. By preventing a single major equipment failure, the system typically pays for itself. Over the first year, clients average 50% reduction in unplanned downtime and 20% lower maintenance costs.',
  },
  {
    question: 'Do you support both discrete and process manufacturing?',
    answer: 'Yes. Our platform handles both discrete manufacturing (automotive, electronics, consumer goods) and process manufacturing (chemicals, pharmaceuticals, food and beverage) with industry-specific analytics and compliance modules.',
  },
];

export default function Manufacturing() {
  return (
    <IndustryLayout
      title="Manufacturing"
      pageTitle="Smart Manufacturing & Industry 4.0 Solutions | ELSxGlobal"
      description="Industry 4.0 smart manufacturing solutions including IoT integration, industrial automation, predictive maintenance, and manufacturing analytics for operational excellence."
      keywords={['Smart Manufacturing', 'Industry 4.0', 'Industrial IoT', 'Manufacturing Automation', 'Predictive Maintenance', 'Quality Control AI', 'Production Optimization', 'Connected Factory', 'OEE Optimization', 'Computer Vision Inspection']}
      heroImage="https://images.pexels.com/photos/36423820/pexels-photo-36423820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Industrial machinery in an operational factory"
      accentColor="orange"
      tagline="Transform your factory with Industry 4.0 solutions — IoT-connected machines, AI-powered quality inspection, and predictive maintenance that eliminates unplanned downtime."
      services={services}
      challenges={challenges}
      solutions={solutions}
      metrics={metrics}
      faqs={faqs}
      relatedIndustries={getRelatedIndustries('/industries/manufacturing')}
      ctaTitle="Modernize Your Manufacturing Operations"
      ctaDescription="Embrace Industry 4.0 with our smart manufacturing, IoT, and automation solutions designed to boost OEE and cut costs."
      ctaButtonText="Explore Manufacturing Solutions"
      targetIndustry="Manufacturing"
    />
  );
}
