import React from 'react';
import { Code, Smartphone, Globe, Database, Cpu, Zap, Settings, BarChart, CheckCircle, ArrowRight, Users, Award, Clock, Shield, ChevronDown, Building, MapPin, Star, Layers, GitBranch, Rocket, Target, Workflow, Laptop, Server, Cloud, Lock, Headphones as HeadphonesIcon, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications using cutting-edge technologies for businesses of all sizes',
    features: ['React/Angular/Vue.js Development', 'Node.js/Python/Java Backend', 'Progressive Web Apps (PWA)', 'RESTful API Integration', 'Real-time Applications', 'E-commerce Platforms'],
    keywords: ['web application development', 'custom web development', 'web app developers', 'responsive web design', 'progressive web apps', 'single page applications', 'SPA development', 'web portal development']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms',
    features: ['iOS Native (Swift/SwiftUI)', 'Android Native (Kotlin)', 'React Native Development', 'Flutter Cross-Platform Apps', 'App Store Optimization', 'Mobile Backend Services'],
    keywords: ['mobile app development', 'iOS app development', 'Android app development', 'React Native developers', 'Flutter development', 'mobile application developers', 'cross-platform mobile apps', 'native mobile development']
  },
  {
    icon: Database,
    title: 'Enterprise Software Solutions',
    description: 'Scalable enterprise-grade software solutions for large organizations and corporations',
    features: ['ERP Systems Development', 'CRM Solutions', 'Workflow Management Systems', 'Business Intelligence Tools', 'Document Management Systems', 'Enterprise Portals'],
    keywords: ['enterprise software development', 'ERP development', 'CRM software development', 'enterprise application development', 'business software solutions', 'enterprise system integration', 'corporate software development']
  },
  {
    icon: Cpu,
    title: 'API Development & Integration',
    description: 'Robust API development and seamless third-party system integration services',
    features: ['RESTful API Development', 'GraphQL API Services', 'Microservices Architecture', 'Third-party API Integration', 'API Gateway Setup', 'Documentation & Testing'],
    keywords: ['API development', 'RESTful API services', 'GraphQL development', 'microservices architecture', 'API integration services', 'third-party API integration', 'API gateway development']
  },
  {
    icon: Layers,
    title: 'Legacy System Modernization',
    description: 'Transform outdated systems into modern, efficient, and maintainable applications',
    features: ['Legacy Code Refactoring', 'System Migration Services', 'Database Migration', 'UI/UX Modernization', 'Cloud Migration', 'Performance Optimization'],
    keywords: ['legacy system modernization', 'software modernization', 'legacy application migration', 'system refactoring', 'legacy code upgrade', 'application modernization services']
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Development',
    description: 'Build cloud-native applications designed for scalability and high availability',
    features: ['AWS Development', 'Azure Application Services', 'Google Cloud Platforms', 'Serverless Architecture', 'Container Orchestration', 'Cloud DevOps'],
    keywords: ['cloud native development', 'AWS development services', 'Azure application development', 'Google Cloud development', 'serverless application development', 'cloud application developers']
  }
];

const benefits = [
  { metric: '500+', label: 'Applications Delivered', icon: Rocket },
  { metric: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { metric: '50%', label: 'Faster Development', icon: Zap },
  { metric: '24/7', label: 'Support & Maintenance', icon: HeadphonesIcon },
  { metric: '150+', label: 'Expert Developers', icon: Users },
  { metric: '12+', label: 'Years Experience', icon: Clock }
];

const techStack = {
  frontend: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS', 'Redux', 'Nuxt.js'],
  backend: ['Node.js', 'Python', 'Django', 'Java', 'Spring Boot', '.NET', 'C#', 'PHP', 'Laravel', 'Express.js', 'FastAPI', 'Go'],
  mobile: ['React Native', 'Flutter', 'Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Ionic', 'Xamarin'],
  database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'Elasticsearch', 'DynamoDB', 'Oracle', 'SQL Server'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Heroku', 'Vercel', 'Netlify', 'Cloudflare'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus']
};

const industries = [
  { name: 'Banking & Finance', icon: Building, services: ['Trading Platforms', 'Banking Apps', 'Payment Gateways', 'Financial Dashboards'] },
  { name: 'Healthcare', icon: Shield, services: ['Patient Portals', 'Telemedicine Apps', 'EHR Systems', 'Health Monitoring'] },
  { name: 'E-commerce & Retail', icon: BarChart, services: ['Online Marketplaces', 'Inventory Systems', 'POS Integration', 'Customer Apps'] },
  { name: 'Manufacturing', icon: Settings, services: ['ERP Systems', 'Production Tracking', 'Quality Control', 'Supply Chain'] },
  { name: 'Education', icon: Users, services: ['Learning Platforms', 'Student Portals', 'LMS Development', 'EdTech Apps'] },
  { name: 'Logistics', icon: Globe, services: ['Fleet Management', 'Route Optimization', 'Tracking Systems', 'Warehouse Apps'] }
];

const faqs = [
  {
    question: 'How much does custom software development cost?',
    answer: 'Software development costs vary based on project complexity, features, and technology stack. Basic web applications start from $10,000, while enterprise solutions can range from $50,000 to $500,000+. We provide detailed project estimates after understanding your specific requirements. Contact us for a free consultation and customized quote.'
  },
  {
    question: 'How long does it take to develop custom software?',
    answer: 'Development timelines depend on project scope. Simple web applications: 2-3 months. Medium complexity applications: 4-6 months. Enterprise solutions: 6-12+ months. We follow Agile methodology with regular sprints and deliverables, ensuring transparency throughout the development process.'
  },
  {
    question: 'Do you provide software development services for startups?',
    answer: 'Absolutely! We specialize in MVP development for startups, helping transform ideas into market-ready products. Our startup packages include rapid prototyping, scalable architecture design, and post-launch support. We\'ve helped 100+ startups successfully launch their digital products.'
  },
  {
    question: 'What is your software development methodology?',
    answer: 'We follow Agile/Scrum methodology with 2-week sprints. This ensures regular deliverables, continuous feedback integration, and flexible scope management. Our process includes discovery, design, development, testing, deployment, and ongoing support phases.'
  },
  {
    question: 'Do you offer software maintenance and support services?',
    answer: 'Yes, we provide comprehensive post-development support including bug fixes, feature enhancements, security updates, performance monitoring, and 24/7 technical support. We offer flexible maintenance packages tailored to your business needs.'
  },
  {
    question: 'Can you work with our existing development team?',
    answer: 'We offer flexible engagement models including team augmentation, dedicated development teams, and project-based collaboration. Our developers seamlessly integrate with your existing workflows and development processes.'
  }
];

const countries = [
  { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'San Francisco', 'Seattle', 'Denver', 'Boston', 'Atlanta', 'Miami', 'Detroit', 'Minneapolis', 'Las Vegas'] },
  { name: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Edinburgh', 'Sheffield', 'Bristol', 'Newcastle', 'Nottingham', 'Leicester', 'Brighton', 'Cardiff', 'Belfast'] },
  { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Nagpur', 'Indore', 'Bhopal', 'Chandigarh', 'Noida', 'Gurgaon', 'Coimbatore', 'Kochi', 'Mysore'] },
  { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City', 'Hamilton', 'Halifax'] },
  { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Hobart', 'Darwin'] },
  { name: 'Germany', cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Stuttgart', 'Dusseldorf', 'Dortmund', 'Essen', 'Leipzig'] },
  { name: 'Singapore', cities: ['Singapore City', 'Jurong', 'Woodlands', 'Tampines', 'Bedok', 'Bukit Batok', 'Choa Chu Kang'] },
  { name: 'UAE', cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'] },
  { name: 'Netherlands', cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen'] }
];

const processSteps = [
  { step: '01', title: 'Discovery & Analysis', icon: Target, desc: 'Understanding your business goals, technical requirements, and market needs' },
  { step: '02', title: 'Architecture & Design', icon: Layers, desc: 'Creating scalable system architecture and intuitive UI/UX design' },
  { step: '03', title: 'Agile Development', icon: Code, desc: 'Iterative development with regular sprints and continuous delivery' },
  { step: '04', title: 'Quality Assurance', icon: CheckCircle, desc: 'Comprehensive testing including unit, integration, and performance testing' },
  { step: '05', title: 'Deployment & Launch', icon: Rocket, desc: 'Production deployment with CI/CD pipeline and monitoring setup' },
  { step: '06', title: 'Support & Maintenance', icon: HeadphonesIcon, desc: 'Ongoing support, updates, and feature enhancements' }
];

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Software Development Services | Custom Software Development Company - ELSxTech"
        description="Leading software development company offering custom software development, web application development, mobile app development, enterprise software solutions, API development, and cloud-native applications. Expert software developers for startups, SMEs, and enterprises across USA, UK, India, Canada, Australia, Germany, Singapore, UAE, and 50+ countries. Get a free consultation today."
        keywords={[
          'Software Development', 'Custom Software Development', 'Software Development Company', 'Software Development Services',
          'Web Application Development', 'Mobile App Development', 'iOS App Development', 'Android App Development',
          'React Native Development', 'Flutter Development', 'Enterprise Software Development', 'ERP Development',
          'CRM Development', 'API Development', 'Microservices Development', 'Cloud Application Development',
          'Software Developers', 'Software Development Agency', 'Custom Application Development',
          'Full Stack Development', 'Frontend Development', 'Backend Development', 'Database Development',
          'Software Outsourcing', 'Offshore Software Development', 'Software Development Outsourcing',
          'Software Development Near Me', 'Software Development Company Near Me',
          'Agile Software Development', 'DevOps Services', 'Software Testing', 'QA Services',
          'Legacy System Modernization', 'Software Migration', 'Application Modernization',
          'SaaS Development', 'Product Development', 'MVP Development', 'Startup Software Development',
          'Software Development Cost', 'Software Development Timeline', 'Software Development Quote',
          'Software Development New York', 'Software Development London', 'Software Development Mumbai',
          'Software Development Bangalore', 'Software Development Toronto', 'Software Development Sydney',
          'Software Development Dubai', 'Software Development Singapore', 'Software Development Berlin',
          'Software Development Chicago', 'Software Development San Francisco', 'Software Development Austin',
          'Software Development Seattle', 'Software Development Boston', 'Software Development Los Angeles',
          'Software Development Houston', 'Software Development Atlanta', 'Software Development Miami',
          'Software Development Dallas', 'Software Development Phoenix', 'Software Development Denver',
          'React Development', 'Angular Development', 'Vue.js Development', 'Node.js Development',
          'Python Development', 'Java Development', '.NET Development', 'PHP Development',
          'Laravel Development', 'Django Development', 'Spring Boot Development', 'Express.js Development',
          'AWS Development', 'Azure Development', 'Google Cloud Development', 'Cloud Native Development',
          'E-commerce Development', 'Fintech Development', 'Healthcare Software', 'EdTech Development',
          'Logistics Software Development', 'Manufacturing Software Development', 'Retail Software Development',
          'Best Software Development Company', 'Top Software Development Companies', 'Leading Software Developers',
          'Affordable Software Development', 'Professional Software Development', 'Enterprise Software Solutions'
        ]}
        serviceCategory="tech"
        targetIndustries={['Technology', 'Financial Services', 'Banking', 'Healthcare', 'E-commerce', 'Manufacturing', 'Retail', 'Education', 'Logistics', 'Automotive', 'Real Estate', 'Government', 'Insurance', 'Media', 'Energy']}
        relatedServices={['Custom Development', 'Mobile Apps', 'Web Applications', 'API Integration', 'Cloud Native', 'Enterprise Software', 'Legacy Modernization', 'DevOps', 'SaaS Development', 'Product Development']}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-green-50 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="label-solid mb-4 inline-block">Trusted by 500+ Companies Worldwide</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Custom Software Development
              <span className="block text-green-600">Transforming Ideas into Reality</span>
            </motion.h1>

            <motion.p
              className="text-xl text-ink-secondary mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Leading software development company delivering custom web applications, mobile apps,
              enterprise software solutions, and cloud-native applications. Expert developers for
              startups, SMEs, and Fortune 500 companies across 50+ countries.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="btn-primary btn-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/case-studies" className="btn-secondary btn-lg">
                View Case Studies
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                >
                  <benefit.icon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-green-600">{benefit.metric}</div>
                  <div className="text-xs text-ink-secondary">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Quick Links */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm font-semibold text-gray-600 mr-2">Industries We Serve:</span>
            {['Banking & Finance', 'Healthcare', 'E-commerce', 'Manufacturing', 'Education', 'Logistics', 'Real Estate', 'Automotive'].map((industry) => (
              <span key={industry} className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-green-50 hover:border-green-300 cursor-pointer transition-colors">
                {industry} Software
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Comprehensive Software Development Services
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              Full-cycle software development services from ideation to deployment and ongoing support.
              We build scalable, secure, and high-performance applications tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card-flat hover:shadow-xl transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <service.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
                <p className="text-ink-secondary mb-4 text-sm">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-ink-secondary">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">Keywords:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.keywords.slice(0, 4).map((kw, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Technology Excellence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Full-Stack Technology Expertise
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              Our expert developers leverage the latest technologies and frameworks to build
              modern, scalable, and performant software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="card-flat p-6">
                <h3 className="text-lg font-bold text-ink mb-4 capitalize flex items-center">
                  {category === 'frontend' && <Layers className="h-5 w-5 text-green-600 mr-2" />}
                  {category === 'backend' && <Server className="h-5 w-5 text-green-600 mr-2" />}
                  {category === 'mobile' && <Smartphone className="h-5 w-5 text-green-600 mr-2" />}
                  {category === 'database' && <Database className="h-5 w-5 text-green-600 mr-2" />}
                  {category === 'cloud' && <Cloud className="h-5 w-5 text-green-600 mr-2" />}
                  {category === 'devops' && <GitBranch className="h-5 w-5 text-green-600 mr-2" />}
                  {category.charAt(0).toUpperCase() + category.slice(1)} Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-green-50 hover:border-green-300 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Agile Software Development Process
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              We follow a proven Agile/Scrum methodology ensuring transparency, flexibility,
              and continuous delivery throughout the development lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-xl transition-all relative p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-green-100">
                  {step.step}
                </div>
                <step.icon className="h-10 w-10 text-green-600 mb-3" />
                <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Industry Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Software Solutions for Every Industry
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              Domain expertise across multiple industries ensuring solutions that meet
              specific regulatory, compliance, and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="card-flat p-6 hover:shadow-md transition-all">
                <industry.icon className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-ink mb-3">{industry.name} Software Development</h3>
                <ul className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm text-ink-secondary">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              Common questions about our software development services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card-flat p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-ink pr-4">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-ink-secondary mt-4 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence - Location-Based SEO */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Worldwide Delivery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Software Development Services Worldwide
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              With development centers and clients across the globe, we deliver software solutions
              tailored to local market needs with 24/7 support coverage.
            </p>
          </div>

          {countries.map((country, countryIdx) => (
            <div key={countryIdx} className="mb-8 last:mb-0">
              <h3 className="text-xl font-bold text-ink mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-green-600 mr-2" />
                Software Development in {country.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {country.cities.map((city, cityIdx) => (
                  <span
                    key={cityIdx}
                    className="text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-green-50 hover:border-green-300 cursor-pointer transition-colors"
                  >
                    Software Development {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Indicators */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Investment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Software Development Investment Guide
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              Transparent pricing based on project scope, complexity, and engagement model
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-sm font-semibold text-green-600 mb-2">Startup & MVP</div>
              <div className="text-3xl font-bold text-ink mb-4">$10K - $50K</div>
              <ul className="space-y-2 text-sm text-ink-secondary text-left mb-6">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />MVP Development</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Core Feature Set</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />3-6 Month Timeline</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Startup Advisory</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full">Get Quote</Link>
            </div>

            <div className="card p-8 text-center border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-green-600 mb-2">SME & Growth</div>
              <div className="text-3xl font-bold text-ink mb-4">$50K - $200K</div>
              <ul className="space-y-2 text-sm text-ink-secondary text-left mb-6">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Full-Featured Application</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Scalable Architecture</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />6-12 Month Timeline</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />DevOps & CI/CD</li>
              </ul>
              <Link to="/contact" className="btn-primary w-full">Get Quote</Link>
            </div>

            <div className="card p-8 text-center">
              <div className="text-sm font-semibold text-green-600 mb-2">Enterprise</div>
              <div className="text-3xl font-bold text-ink mb-4">$200K+</div>
              <ul className="space-y-2 text-sm text-ink-secondary text-left mb-6">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Enterprise Solutions</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Complex Integrations</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />12+ Month Timeline</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Dedicated Team</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full">Get Quote</Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            * Pricing is indicative and varies based on project complexity, technology stack, and specific requirements.
            Contact us for a detailed project assessment and customized quote.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Next Software Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your software development needs. Get a free consultation and project estimate from our expert team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-green-700 hover:bg-gray-100">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+917247558873" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                Call: +91 72475 58873
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich Content Footer */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-main">
          <div className="prose prose-invert prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-center">Comprehensive Software Development Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Web Development</h3>
                <ul className="space-y-1 text-sm">
                  <li>Custom Web Application Development</li>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Single Page Applications (SPA)</li>
                  <li>E-commerce Website Development</li>
                  <li>Content Management Systems</li>
                  <li>Web Portal Development</li>
                  <li>Real-time Web Applications</li>
                  <li>API-First Web Development</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Mobile Development</h3>
                <ul className="space-y-1 text-sm">
                  <li>iOS App Development</li>
                  <li>Android App Development</li>
                  <li>React Native Development</li>
                  <li>Flutter App Development</li>
                  <li>Cross-Platform Mobile Apps</li>
                  <li>Native Mobile Development</li>
                  <li>Mobile Backend Services</li>
                  <li>App Store Optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Enterprise Solutions</h3>
                <ul className="space-y-1 text-sm">
                  <li>ERP System Development</li>
                  <li>CRM Software Development</li>
                  <li>Business Process Automation</li>
                  <li>Enterprise Integration</li>
                  <li>Legacy System Modernization</li>
                  <li>Data Migration Services</li>
                  <li>Enterprise Portals</li>
                  <li>Workflow Management Systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Cloud Development</h3>
                <ul className="space-y-1 text-sm">
                  <li>AWS Development Services</li>
                  <li>Azure Application Development</li>
                  <li>Google Cloud Development</li>
                  <li>Serverless Architecture</li>
                  <li>Cloud Migration Services</li>
                  <li>Cloud-Native Applications</li>
                  <li>Container Orchestration</li>
                  <li>Multi-Cloud Solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">API & Integration</h3>
                <ul className="space-y-1 text-sm">
                  <li>RESTful API Development</li>
                  <li>GraphQL API Services</li>
                  <li>Microservices Architecture</li>
                  <li>API Gateway Development</li>
                  <li>Third-Party API Integration</li>
                  <li>Webhook Development</li>
                  <li>API Documentation</li>
                  <li>API Testing & Security</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">DevOps & Support</h3>
                <ul className="space-y-1 text-sm">
                  <li>CI/CD Pipeline Setup</li>
                  <li>Infrastructure as Code</li>
                  <li>Containerization (Docker)</li>
                  <li>Kubernetes Management</li>
                  <li>Monitoring & Logging</li>
                  <li>Performance Optimization</li>
                  <li>24/7 Technical Support</li>
                  <li>Maintenance & Updates</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Serving Businesses Worldwide</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We provide software development services to clients across United States (New York, Los Angeles, Chicago, Houston, Phoenix, San Francisco, Seattle, Boston, Austin, Denver), United Kingdom (London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Liverpool), India (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur), Canada (Toronto, Vancouver, Montreal, Calgary, Ottawa), Australia (Sydney, Melbourne, Brisbane, Perth), Germany (Berlin, Munich, Frankfurt, Hamburg), Singapore, UAE (Dubai, Abu Dhabi), Netherlands (Amsterdam, Rotterdam, Eindhoven), and 50+ countries globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>

      {/* Schema.org structured data for Local Business and Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'Software Development Services - ELSxTech',
        'description': 'Leading software development company offering custom software development, web application development, mobile app development, enterprise software solutions, and API development services worldwide.',
        'url': 'https://elsxglobal.tech/software-development',
        'provider': {
          '@type': 'Organization',
          'name': 'ELSxTech - A Division of EvolucentSphere Pvt. Ltd.',
          'url': 'https://elsxglobal.tech',
          'logo': 'https://elsxglobal.tech/logo.png',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '3223/4A Tech Park',
            'addressLocality': 'Jabalpur',
            'addressRegion': 'Madhya Pradesh',
            'postalCode': '482001',
            'addressCountry': 'IN'
          },
          'contactPoint': [
            {
              '@type': 'ContactPoint',
              'telephone': '+91-724-755-8873',
              'contactType': 'Sales',
              'areaServed': 'Worldwide',
              'availableLanguage': 'English'
            },
            {
              '@type': 'ContactPoint',
              'telephone': '+91-877-042-2622',
              'contactType': 'Customer Service',
              'areaServed': 'Worldwide',
              'availableLanguage': 'English'
            }
          ]
        },
        'areaServed': 'Worldwide',
        'serviceType': ['Software Development', 'Web Development', 'Mobile App Development', 'Enterprise Software', 'API Development'],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Software Development Services',
          'itemListElement': services.map(s => ({
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': s.title,
              'description': s.description
            }
          }))
        }
      })}} />
    </div>
  );
}
