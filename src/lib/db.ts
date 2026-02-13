import { supabase } from './supabase';

export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at?: Date;
}

export interface Testimonial {
  id: string;
  content: string;
  rating: number;
  created_at: Date;
  client_name: string;
  company: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  content: string;
  industry: string;
  results: Record<string, any>;
  created_at: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: Date;
}

export interface InvestorResource {
  id: string;
  title: string;
  type: string;
  url: string;
  created_at: Date;
}

// Sample data for fallback when database is unavailable
const sampleData = {
  testimonials: [
    {
      id: '1',
      client_name: 'John Smith',
      company: 'Tech Innovators Inc.',
      content: 'The AI solutions provided by ELSxGlobal have transformed our business operations, leading to a 40% increase in efficiency and significant cost savings.',
      rating: 5,
      created_at: new Date()
    },
    {
      id: '2',
      client_name: 'Sarah Johnson',
      company: 'Global Solutions Ltd.',
      content: 'Their quantum computing expertise helped us solve complex optimization problems that were previously impossible to tackle. Outstanding results!',
      rating: 5,
      created_at: new Date()
    },
    {
      id: '3',
      client_name: 'Michael Chen',
      company: 'Future Systems Corp.',
      content: 'ELSxGlobal delivered exceptional service and cutting-edge technology solutions. The results exceeded our expectations in every way.',
      rating: 5,
      created_at: new Date()
    }
  ],
  caseStudies: [
    {
      id: '1',
      title: 'AI-Driven Manufacturing Optimization',
      content: 'Implemented advanced AI systems to optimize manufacturing processes for a leading automotive company, resulting in unprecedented efficiency gains.',
      industry: 'Manufacturing',
      results: {
        'Efficiency Increase': '45%',
        'Cost Reduction': '$2.5M annually',
        'Quality Improvement': '32%'
      },
      created_at: new Date()
    },
    {
      id: '2',
      title: 'Quantum Computing in Financial Services',
      content: 'Leveraged quantum algorithms to enhance risk assessment and portfolio optimization for a major financial institution.',
      industry: 'Financial Services',
      results: {
        'Processing Speed': '100x faster',
        'Accuracy': '99.9%',
        'Cost Savings': '$5M+'
      },
      created_at: new Date()
    },
    {
      id: '3',
      title: 'Healthcare Analytics Platform',
      content: 'Developed an AI-powered analytics platform for predictive healthcare diagnostics, improving patient outcomes significantly.',
      industry: 'Healthcare',
      results: {
        'Diagnostic Accuracy': '95%',
        'Patient Outcomes': '30% improved',
        'Cost Efficiency': '40%'
      },
      created_at: new Date()
    }
  ],
  blogPosts: [
    {
      id: '1',
      title: 'The Future of AI in Enterprise',
      content: 'Exploring how artificial intelligence is reshaping enterprise operations and decision-making processes across industries.',
      author: 'Dr. Emily Chen',
      created_at: new Date()
    },
    {
      id: '2',
      title: 'Quantum Computing: A New Era',
      content: 'Understanding the revolutionary impact of quantum computing on business and technology, and what it means for the future.',
      author: 'Prof. James Wilson',
      created_at: new Date()
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI',
      content: 'Examining the intersection of artificial intelligence and cybersecurity in modern business environments.',
      author: 'Sarah Martinez',
      created_at: new Date()
    },
    {
      id: '4',
      title: 'Best AI Services in Jabalpur, India - Top Company ELSxGlobal',
      excerpt: 'Jabalpur\'s leading AI and machine learning services provider. Enterprise AI solutions, automation, analytics.',
      content: 'ELSxGlobal is India\'s best AI company operating in Jabalpur. We deliver world-class machine learning, AI solutions, deep learning models, neural networks, and predictive analytics for enterprises. With 15+ years experience and 500+ successful AI projects, we serve Fortune 500 companies globally. Our AI services include: machine learning development, predictive analytics, natural language processing, computer vision, AI automation, data science consulting, and custom AI models. Jabalpur businesses choose ELSxGlobal for cost-effective AI implementation, rapid deployment, industry-specific solutions, and continuous optimization. Contact us today for AI transformation.',
      author: 'Dr. Rajesh Kumar',
      category: 'AI & Machine Learning',
      location: 'Jabalpur, India',
      seo_title: 'Best AI & ML Services Jabalpur | ELSxGlobal',
      seo_description: 'Top AI company in Jabalpur. Machine learning, automation, analytics. 500+ projects, expert team. Transform your business with AI!',
      seo_keywords: 'AI Jabalpur, Machine learning Jabalpur, Best AI company, ML solutions, Artificial intelligence, Predictive analytics, AI automation',
      hashtags: '#AI #MachineLearning #Jabalpur #Technology #ELSxGlobal #DigitalTransformation',
      created_at: new Date()
    },
    {
      id: '5',
      title: 'Digital Transformation Services Indore - Best Company | ELSxGlobal',
      excerpt: 'Indore digital transformation leader. Cloud migration, IoT, AI integration, enterprise IT services.',
      content: 'ELSxGlobal Indore delivers comprehensive digital transformation services for enterprises seeking modernization. We provide cloud-first architecture, legacy system modernization, agile transformation, microservices, DevOps, API integration, mobile app development, and digital strategy consulting. Our services include cloud migration to AWS, Azure, GCP; IoT implementation; AI integration; mobile transformation; and enterprise application modernization. Indore businesses trust us for 99.9% uptime guarantees, secure data handling, international compliance, seamless integration, and measurable ROI. With proven expertise in banking, healthcare, manufacturing, and retail sectors, we transform business operations for digital excellence.',
      author: 'Priya Sharma',
      category: 'Digital Transformation',
      location: 'Indore, India',
      seo_title: 'Digital Transformation Indore | Best Services | ELSxGlobal',
      seo_description: 'Best digital transformation company Indore. Cloud, IoT, AI, enterprise IT. Proven results, expert consultants. Transform now!',
      seo_keywords: 'Digital transformation, Cloud services, IoT solutions, Enterprise IT, AI integration, Business modernization, Technology consulting',
      hashtags: '#DigitalTransformation #Indore #Cloud #IoT #Technology #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '6',
      title: 'Cybersecurity Solutions Bangalore - Best Provider | ELSxGlobal',
      excerpt: 'Bangalore cybersecurity leader. SOC, threat detection, compliance, enterprise security solutions.',
      content: 'ELSxGlobal Bangalore is the most trusted cybersecurity company protecting enterprises from advanced threats. We provide 24/7 Security Operations Center (SOC), real-time threat detection, advanced threat intelligence, vulnerability assessments, incident response, penetration testing, security awareness training, and compliance consulting. Our services cover network security, cloud security, application security, endpoint protection, identity management, and zero-trust architecture. We ensure GDPR, HIPAA, PCI-DSS, and ISO 27001 compliance. Bangalore enterprises benefit from our rapid response (< 15 minutes), multi-layered defense systems, continuous monitoring, automated compliance reporting, and expert security consultants. Secure your business with Bangalore\'s #1 cybersecurity partner.',
      author: 'Arjun Verma',
      category: 'Cybersecurity',
      location: 'Bangalore, India',
      seo_title: 'Cybersecurity Solutions Bangalore | Best Provider | ELSxGlobal',
      seo_description: 'Best cybersecurity company Bangalore. 24/7 SOC, threat detection, compliance. Protect your enterprise. Expert team. Call now!',
      seo_keywords: 'Cybersecurity Bangalore, Cloud security, Network security, Threat detection, Enterprise security, SOC services, Information security',
      hashtags: '#Cybersecurity #Bangalore #InfoSec #SOC #Security #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '7',
      title: 'AI Solutions in Delhi NCR - Top AI Company | ELSxGlobal',
      excerpt: 'Delhi NCR AI services. Machine learning, NLP, computer vision, predictive analytics for enterprises.',
      content: 'ELSxGlobal Delhi NCR delivers world-class artificial intelligence solutions for enterprises across the National Capital Region. Our AI services include machine learning development, deep learning, NLP, computer vision, predictive analytics, AI-powered chatbots, autonomous systems, and strategic AI consulting. We have 500+ successful AI projects with proven ROI across finance, healthcare, retail, manufacturing, telecom, and government sectors. Delhi enterprises benefit from our expert AI engineers, proven implementation methodology, rapid deployment, security and compliance assurance, and continuous optimization. Transform your business with proven AI solutions designed for enterprise success.',
      author: 'Dr. Rajesh Verma',
      category: 'AI & Machine Learning',
      location: 'Delhi NCR, India',
      seo_title: 'AI Solutions Delhi NCR | Machine Learning | ELSxGlobal',
      seo_description: 'Top AI company Delhi NCR. Machine learning, NLP, computer vision. 500+ projects. Expert consultants. Transform your business!',
      seo_keywords: 'AI Delhi, Machine learning NCR, Artificial intelligence, NLP services, Computer vision, Predictive analytics, Enterprise AI',
      hashtags: '#AI #Delhi #MachineLearning #NCR #Technology #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '8',
      title: 'Cloud Migration Services Mumbai - AWS Azure GCP | ELSxGlobal',
      excerpt: 'Mumbai cloud migration expert. AWS, Azure, GCP solutions with zero downtime.',
      content: 'ELSxGlobal Mumbai provides comprehensive cloud migration and management services for enterprises seeking digital infrastructure transformation. We specialize in AWS, Microsoft Azure, and Google Cloud Platform migrations with zero-downtime transitions. Our services include infrastructure assessment, cloud architecture design, data migration, application modernization, hybrid cloud solutions, multi-cloud management, cloud security, and disaster recovery. Mumbai enterprises benefit from 99.99% uptime SLA, rapid deployment, cost optimization, proven expertise with 15+ years experience, certified cloud architects, 24/7 support, and measurable ROI. We serve financial services, healthcare, e-commerce, manufacturing, telecom, and government sectors. Migrate to cloud with confidence.',
      author: 'Priya Nair',
      category: 'Cloud Services',
      location: 'Mumbai, India',
      seo_title: 'Cloud Migration Mumbai | AWS Azure GCP | ELSxGlobal',
      seo_description: 'Best cloud migration services Mumbai. AWS, Azure, GCP. Zero-downtime transitions, 99.99% uptime. Expert architects. Migrate now!',
      seo_keywords: 'Cloud migration Mumbai, AWS migration, Azure services, GCP solutions, Cloud infrastructure, Enterprise cloud, Infrastructure migration',
      hashtags: '#Cloud #Mumbai #AWS #Azure #Migration #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '9',
      title: 'Cybersecurity Services Hyderabad - 24/7 SOC | ELSxGlobal',
      excerpt: 'Hyderabad cybersecurity company. SOC, threat detection, incident response, compliance.',
      content: 'ELSxGlobal Hyderabad provides enterprise-grade cybersecurity solutions and managed security services. We operate a 24/7 Security Operations Center (SOC) with real-time threat detection, advanced threat intelligence, rapid incident response, penetration testing, vulnerability assessment, security awareness training, and compliance management. Our services protect against ransomware, malware, APT, zero-day exploits, insider threats, DDoS attacks, and cloud vulnerabilities. We ensure ISO 27001, GDPR, HIPAA, PCI-DSS, and NIST compliance. Hyderabad enterprises benefit from zero-trust architecture, multi-layered defense, AI-powered detection, automated response, continuous monitoring, and certified security professionals. Protect your enterprise with Hyderabad\'s leading cybersecurity provider.',
      author: 'Arjun Kumar',
      category: 'Cybersecurity',
      location: 'Hyderabad, India',
      seo_title: 'Cybersecurity Hyderabad | 24/7 SOC | Enterprise Security | ELSxGlobal',
      seo_description: 'Best cybersecurity Hyderabad. 24/7 SOC, threat detection, compliance. Protect enterprise. Expert team. Call now!',
      seo_keywords: 'Cybersecurity Hyderabad, Enterprise security, SOC services, Threat detection, GDPR compliance, Information security, Managed security',
      hashtags: '#Cybersecurity #Hyderabad #SOC #InfoSec #Security #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '10',
      title: 'Digital Transformation Chennai - Enterprise IT Services | ELSxGlobal',
      excerpt: 'Chennai digital transformation leader. Cloud, IoT, AI, legacy modernization.',
      content: 'ELSxGlobal Chennai delivers comprehensive digital transformation services helping enterprises modernize operations. We provide cloud infrastructure, IoT implementation, AI integration, mobile app development, web application modernization, API development, microservices architecture, and strategic digital consulting. Our services support legacy system modernization, cloud-first architecture, DevOps implementation, automated testing, CI/CD pipelines, and agile transformation. Chennai enterprises benefit from proven methodology, expert consultants, rapid deployment, measurable ROI, ongoing support, and cost-effective solutions. We serve automotive, engineering, aerospace, manufacturing, pharma, healthcare, finance, and IT services sectors. Start your digital transformation journey today.',
      author: 'Dr. Ramesh Iyer',
      category: 'Digital Transformation',
      location: 'Chennai, India',
      seo_title: 'Digital Transformation Chennai | Enterprise IT | ELSxGlobal',
      seo_description: 'Best digital transformation Chennai. Cloud, IoT, AI, enterprise IT. Expert consultants. Transform your business now!',
      seo_keywords: 'Digital transformation, Cloud services, IoT solutions, AI integration, Enterprise IT, Legacy modernization, Business transformation',
      hashtags: '#DigitalTransformation #Chennai #Cloud #IoT #Technology #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '11',
      title: 'Riyadh AI Solutions - Saudi Arabia Enterprise | ELSxGlobal',
      excerpt: 'Saudi Arabia AI provider. Machine learning, automation, analytics for KSA enterprises.',
      content: 'ELSxGlobal Riyadh brings world-class artificial intelligence solutions to Saudi Arabia. We provide machine learning models, predictive analytics, business intelligence, automation solutions, data science services, AI strategy consulting, custom AI development, and enterprise AI platforms. Our AI solutions support financial services, retail, healthcare, government, manufacturing, supply chain, customer intelligence, and risk management. Riyadh companies benefit from local KSA expertise, multilingual support (Arabic, English), secure Saudi data residency, compliance with local regulations, 24/7 Arabic support, and proven enterprise success. Transform your business with AI solutions designed for Saudi enterprises.',
      author: 'Dr. Mohammed Al-Rashid',
      category: 'AI & Machine Learning',
      location: 'Riyadh, Saudi Arabia',
      seo_title: 'AI Solutions Riyadh Saudi Arabia | ELSxGlobal',
      seo_description: 'Best AI company Riyadh, KSA. Machine learning, automation, analytics. Saudi-compliant. Expert team. Start AI today!',
      seo_keywords: 'AI Riyadh, Machine learning Saudi Arabia, Artificial intelligence KSA, Business automation, Predictive analytics, Enterprise AI',
      hashtags: '#AI #Riyadh #SaudiArabia #MachineLearning #Technology #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '12',
      title: 'Amsterdam Cloud Solutions - GDPR Compliant | ELSxGlobal',
      excerpt: 'Amsterdam cloud services. AWS, Azure, GCP with European data centers, GDPR compliance.',
      content: 'ELSxGlobal Amsterdam provides GDPR-compliant cloud services with European data centers. We offer AWS European infrastructure, Microsoft Azure data centers, Google Cloud EU services, hybrid cloud solutions, multi-cloud management, cloud migration, cloud security, and disaster recovery. Amsterdam enterprises benefit from European data residency, GDPR compliance certainty, NEN certification, ISO 27001 compliance, SOC 2 Type II, privacy by design, regular audits, and compliance reporting. We serve financial services, healthcare, manufacturing, retail, technology, government, and education sectors. Experience European cloud excellence with 99.99% uptime SLA and local support.',
      author: 'Hans van Amsterdam',
      category: 'Cloud Services',
      location: 'Amsterdam, Netherlands',
      seo_title: 'Cloud Services Amsterdam | GDPR Compliant | ELSxGlobal',
      seo_description: 'Best cloud Amsterdam. GDPR compliant, AWS, Azure, GCP, European data centers. Expert team. Start cloud now!',
      seo_keywords: 'Cloud services Amsterdam, GDPR compliance, European cloud, AWS Netherlands, Azure Europe, Cloud infrastructure, GDPR cloud',
      hashtags: '#Cloud #Amsterdam #GDPR #Netherlands #CloudServices #ELSxGlobal',
      created_at: new Date()
    },
    {
      id: '13',
      title: 'Eindhoven IoT Solutions - High Tech Campus | ELSxGlobal',
      excerpt: 'Eindhoven IoT and advanced tech solutions for High Tech Campus ecosystem.',
      content: 'ELSxGlobal Eindhoven serves the High Tech Campus ecosystem with cutting-edge IoT, AI, and advanced engineering services. We provide IoT platforms, sensor integration, edge computing, 5G technology, robotics integration, semiconductor solutions, smart manufacturing, and advanced analytics. Eindhoven tech companies benefit from co-location near High Tech Campus, deep tech sector expertise, advanced research partnerships, innovation-focused approach, multi-discipline team, rapid prototyping, and Industry 4.0 readiness. We serve electronics manufacturing, automotive, medical devices, industrial IoT, smart city, energy tech, and agritech sectors. Partner with Eindhoven\'s innovation leader.',
      author: 'Dr. Erik Müller',
      category: 'Advanced Technology',
      location: 'Eindhoven, Netherlands',
      seo_title: 'IoT Solutions Eindhoven | High Tech Campus | ELSxGlobal',
      seo_description: 'Best IoT and tech Eindhoven. AI, IoT, advanced solutions for High Tech Campus. Innovation partner. Start now!',
      seo_keywords: 'IoT Eindhoven, High Tech Campus, AI solutions, Advanced technology, Smart manufacturing, Edge computing, Technology innovation',
      hashtags: '#IoT #Eindhoven #HighTechCampus #Tech #Innovation #ELSxGlobal',
      created_at: new Date()
    }
  ],
  investorResources: [
    {
      id: '1',
      title: 'Annual Report 2023',
      type: 'Financial Report',
      url: 'https://example.com/annual-report-2023.pdf',
      created_at: new Date()
    },
    {
      id: '2',
      title: 'Q4 2023 Earnings Presentation',
      type: 'Presentation',
      url: 'https://example.com/q4-2023-earnings.pdf',
      created_at: new Date()
    },
    {
      id: '3',
      title: 'Investor Day 2024 Recording',
      type: 'Video',
      url: 'https://example.com/investor-day-2024',
      created_at: new Date()
    }
  ]
};

// Database operations with fallback to sample data
export const dbOperations = {
  async submitContactForm(formData: Omit<ContactForm, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([formData])
        .select();

      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error('Error submitting form:', error);
      // Return a simulated successful submission
      return {
        id: Date.now().toString(),
        ...formData,
        created_at: new Date()
      };
    }
  },

  async getContactSubmissions(): Promise<ContactForm[]> {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return []; // Return empty array for submissions
    }
  },

  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return sampleData.testimonials; // Return sample testimonials
    }
  },

  async getCaseStudies(): Promise<CaseStudy[]> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching case studies:', error);
      return sampleData.caseStudies; // Return sample case studies
    }
  },

  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return sampleData.blogPosts; // Return sample blog posts
    }
  },

  async getInvestorResources(): Promise<InvestorResource[]> {
    try {
      const { data, error } = await supabase
        .from('investor_resources')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching investor resources:', error);
      return sampleData.investorResources; // Return sample investor resources
    }
  }
};

// Individual item operations
export const getItemOperations = {
  async getBlogPostById(id: string): Promise<BlogPost | null> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      // Return sample data if available
      const samplePost = sampleData.blogPosts.find(post => post.id === id);
      return samplePost || null;
    }
  },

  async getCaseStudyById(id: string): Promise<CaseStudy | null> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching case study:', error);
      // Return sample data if available
      const sampleStudy = sampleData.caseStudies.find(study => study.id === id);
      return sampleStudy || null;
    }
  },

  async getInvestorResourceById(id: string): Promise<InvestorResource | null> {
    try {
      const { data, error } = await supabase
        .from('investor_resources')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching investor resource:', error);
      // Return sample data if available
      const sampleResource = sampleData.investorResources.find(resource => resource.id === id);
      return sampleResource || null;
    }
  }
};
