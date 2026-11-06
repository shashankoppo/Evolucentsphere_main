import { ShoppingCart, Users, Smartphone, TrendingDown, Package, Store } from 'lucide-react';
import IndustryLayout from '../../components/IndustryLayout';
import { getRelatedIndustries } from '../../lib/industries';

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description: 'Scalable, high-performance e-commerce platforms engineered for conversion and growth.',
    features: ['Online Store Development', 'Payment Gateway Integration', 'Inventory Management', 'Order Fulfillment Automation'],
  },
  {
    icon: Users,
    title: 'Customer Analytics & Personalization',
    description: 'Advanced behavioral analytics and AI-driven personalization that increase basket size and loyalty.',
    features: ['Customer Segmentation', 'Behavioral Analytics', 'Recommendation Engines', 'Loyalty Program Integration'],
  },
  {
    icon: Smartphone,
    title: 'Omnichannel Experience',
    description: 'Seamless, consistent customer experiences across web, mobile, social, and in-store touchpoints.',
    features: ['Mobile Commerce Apps', 'Social Commerce Integration', 'In-store Technology', 'Buy-Online-Pickup-In-Store'],
  },
];

const challenges = [
  {
    icon: ShoppingCart,
    title: 'Cart Abandonment',
    description: 'Losing revenue to complex checkout flows, unexpected shipping costs, and lack of preferred payment options.',
  },
  {
    icon: TrendingDown,
    title: 'Inventory Inefficiency',
    description: 'Stockouts and overstock situations that erode margins and damage customer satisfaction.',
  },
  {
    icon: Users,
    title: 'Fragmented Customer Data',
    description: 'Disconnected silos across channels that prevent a unified view of shopper behavior and preferences.',
  },
  {
    icon: Store,
    title: 'Channel Disconnection',
    description: 'Inconsistent experiences between online, mobile, and in-store touchpoints that break customer journeys.',
  },
];

const solutions = [
  {
    title: 'Frictionless Checkout Optimization',
    description: 'One-click payments, guest checkout, dynamic shipping, and abandoned cart recovery that reduce cart abandonment by up to 40%.',
  },
  {
    title: 'AI-Powered Inventory Management',
    description: 'Demand forecasting and real-time stock optimization that minimizes waste, prevents stockouts, and reduces inventory costs by 30%.',
  },
  {
    title: 'Unified Customer Data Platform',
    description: 'Single shopper profile that merges online and in-store behavior for true 360-degree personalization across every touchpoint.',
  },
  {
    title: 'True Omnichannel Commerce',
    description: 'Seamless buy-online-pickup-in-store, unified loyalty rewards, and consistent experiences across web, mobile, and physical stores.',
  },
];

const metrics = [
  { value: '40%', label: 'Less Cart Abandonment' },
  { value: '30%', label: 'Inventory Cost Reduction' },
  { value: '25%', label: 'Revenue Lift' },
  { value: '4x', label: 'Customer Retention' },
];

const faqs = [
  {
    question: 'What e-commerce platforms do you build on?',
    answer: 'We build on Shopify Plus, Magento, WooCommerce, BigCommerce, and custom headless commerce architectures using Next.js and commerce APIs. We recommend the best platform based on your catalog size, traffic, and integration needs.',
  },
  {
    question: 'Can you integrate our online store with our POS and ERP systems?',
    answer: 'Yes. We integrate e-commerce platforms with major POS systems (Square, Clover, Lightspeed) and ERP systems (SAP, Oracle, Microsoft Dynamics) to ensure real-time inventory sync, unified orders, and consistent pricing across channels.',
  },
  {
    question: 'How does your AI personalization work?',
    answer: 'Our recommendation engine analyzes browsing patterns, purchase history, and real-time behavior to surface relevant products, personalized search results, and targeted promotions. Clients typically see a 20-25% lift in average order value.',
  },
  {
    question: 'Do you support headless commerce architecture?',
    answer: 'Absolutely. We specialize in headless commerce using Shopify Hydrogen, Commerce.js, or custom API layers with Next.js frontends. This delivers sub-second page loads, infinite scalability, and full creative control over the storefront.',
  },
];

export default function Retail() {
  return (
    <IndustryLayout
      title="Retail & E-commerce"
      pageTitle="Retail & E-commerce Solutions | ELSxGlobal"
      description="Retail technology solutions including e-commerce platforms, customer analytics, AI personalization, and omnichannel commerce for modern retailers."
      keywords={['Retail Technology', 'E-commerce Solutions', 'Customer Analytics', 'Omnichannel Experience', 'Digital Commerce', 'Retail Analytics', 'Customer Experience', 'Headless Commerce', 'Inventory Management', 'Personalization AI']}
      heroImage="https://images.pexels.com/photos/12935042/pexels-photo-12935042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Digital point-of-sale system in a retail boutique"
      accentColor="rose"
      tagline="Create exceptional shopping experiences with AI-powered personalization, frictionless checkout, and true omnichannel commerce that turns browsers into loyal customers."
      services={services}
      challenges={challenges}
      solutions={solutions}
      metrics={metrics}
      faqs={faqs}
      relatedIndustries={getRelatedIndustries('/industries/retail')}
      ctaTitle="Revolutionize Your Retail Business"
      ctaDescription="Create exceptional customer experiences and drive growth with our retail and e-commerce technology solutions."
      ctaButtonText="Explore Retail Solutions"
      targetIndustry="Retail and E-commerce"
    />
  );
}
