import React from 'react';
import { Globe, Monitor, Layers, Zap, CheckCircle, ArrowRight, Users, Award, Clock, Shield, ChevronDown, MapPin, Star, Code, Palette, Database, Cloud, Smartphone, Search, ShoppingCart, Settings, Headphones as HeadphonesIcon, Rocket, Workflow, Globe as Globe2, Link2, Lock, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Globe,
    title: 'Corporate Website Development',
    description: 'Professional corporate websites that establish your brand identity and drive business growth with modern design and functionality',
    features: ['Custom Design & Development', 'Responsive Layouts', 'CMS Integration', 'SEO Optimization', 'Performance Optimization', 'Multi-language Support'],
    keywords: ['corporate website development', 'business website design', 'company website development', 'corporate web design', 'professional website development', 'enterprise website', 'corporate website builders', 'business web development']
  },
  {
    icon: Palette,
    title: 'Custom Website Design',
    description: 'Unique, visually stunning websites tailored to your brand with cutting-edge UX/UI design principles',
    features: ['Brand-Led Design', 'User Experience (UX)', 'User Interface (UI)', 'Wireframing & Prototyping', 'Motion Design', 'Accessibility (WCAG)'],
    keywords: ['custom website design', 'unique website design', 'bespoke website development', 'custom web design services', 'tailored website solutions', 'creative website design', 'custom built websites']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Website Development',
    description: 'High-converting online stores with secure payment integration, inventory management, and seamless checkout experiences',
    features: ['WooCommerce Development', 'Shopify Development', 'Custom E-commerce', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking Systems'],
    keywords: ['ecommerce website development', 'online store development', 'shopping website design', 'ecommerce web development', 'online shop development', 'e-commerce website builders', 'ecommerce website cost', 'best ecommerce development']
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description: 'Mobile-first websites that deliver flawless experiences across all devices and screen sizes',
    features: ['Mobile-First Approach', 'Cross-Browser Compatible', 'Adaptive Images', 'Touch-Friendly Interfaces', 'Progressive Web Apps', 'Accelerated Mobile Pages'],
    keywords: ['responsive website design', 'mobile friendly website', 'mobile first web design', 'responsive web development', 'cross device website', 'mobile responsive design', 'adaptive web design']
  },
  {
    icon: Search,
    title: 'SEO-Optimized Websites',
    description: 'Websites built from the ground up for search engine visibility, traffic, and ranking success',
    features: ['Technical SEO', 'Core Web Vitals', 'Schema Markup', 'Site Architecture', 'Speed Optimization', 'Local SEO Setup'],
    keywords: ['SEO friendly website development', 'search engine optimized website', 'SEO web design', 'website SEO optimization', 'search engine friendly websites', 'SEO ready website', 'SEO optimized web development']
  },
  {
    icon: Workflow,
    title: 'CMS Website Development',
    description: 'Content management system websites with easy-to-use admin panels for non-technical users',
    features: ['WordPress Development', 'Drupal Development', 'Headless CMS', 'Custom CMS Development', 'Content Migration', 'Admin Training'],
    keywords: ['CMS website development', 'content management system', 'WordPress website development', 'Drupal development', 'custom CMS development', 'headless CMS', 'website content management']
  },
  {
    icon: Link2,
    title: 'Landing Page Development',
    description: 'High-converting landing pages designed for lead generation, marketing campaigns, and product launches',
    features: ['Conversion-Focused Design', 'A/B Testing Ready', 'Lead Capture Forms', 'Analytics Integration', 'Fast Loading', 'Call-to-Action Optimization'],
    keywords: ['landing page development', 'conversion landing pages', 'lead generation pages', 'marketing landing pages', 'product landing pages', 'high converting landing pages', 'landing page design services']
  },
  {
    icon: Cloud,
    title: 'Web Application Development',
    description: 'Complex web applications and portals with database integration, user authentication, and advanced functionality',
    features: ['Single Page Applications', 'Progressive Web Apps', 'User Authentication', 'Database Integration', 'API Development', 'Real-time Features'],
    keywords: ['web application development', 'web portal development', 'complex web applications', 'database driven websites', 'functional web applications', 'custom web application development']
  }
];

const benefits = [
  { metric: '1,000+', label: 'Websites Delivered', icon: Globe },
  { metric: '98%', label: 'Client Satisfaction', icon: Award },
  { metric: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { metric: '50%+', label: 'Faster Load Times', icon: Zap },
  { metric: '200+', label: 'Expert Developers', icon: Users },
  { metric: '24/7', label: 'Support Available', icon: HeadphonesIcon }
];

const techStack = {
  cms: ['WordPress', 'Drupal', 'Joomla', 'Shopify', 'WooCommerce', 'Webflow', 'Ghost', 'Strapi', 'Contentful', 'Sanity'],
  frontend: ['React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'HTML5', 'CSS3', 'Sass/SCSS', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', 'PHP', 'Python', 'Django', 'Laravel', 'Express.js', '.NET', 'Ruby on Rails', 'Go', 'Java'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'Supabase', 'Redis', 'MariaDB'],
  hosting: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'DigitalOcean', 'Cloudflare', 'SiteGround', 'WP Engine'],
  tools: ['Figma', 'Adobe XD', 'Sketch', 'Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Lighthouse', 'SEMrush']
};

const websiteTypes = [
  { name: 'Business Websites', desc: 'Professional websites for small, medium, and large businesses', features: ['About & Services', 'Contact Forms', 'Blog/News', 'Team Pages', 'Testimonials', 'Portfolios'] },
  { name: 'E-commerce Stores', desc: 'Full-featured online shopping platforms with payment processing', features: ['Product Catalogs', 'Shopping Cart', 'Payment Gateways', 'Order Management', 'Customer Accounts', 'Shipping Integration'] },
  { name: 'Portfolio Websites', desc: 'Creative showcases for professionals, agencies, and freelancers', features: ['Project Galleries', 'Case Studies', 'Client Testimonials', 'Contact Integration', 'Social Links', 'Resume/CV'] },
  { name: 'Blog/Magazine Sites', desc: 'Content-rich websites for publishers and content creators', features: ['Article Management', 'Categories & Tags', 'Author Profiles', 'Comment Systems', 'Newsletter Integration', 'Social Sharing'] },
  { name: 'Membership Sites', desc: 'Gated content and subscription-based membership platforms', features: ['User Registration', 'Subscription Management', 'Content Restriction', 'Member Dashboard', 'Payment Processing', 'Community Features'] },
  { name: 'Directory Websites', desc: 'Listings and directory platforms for various industries', features: ['Listing Management', 'Search & Filters', 'User Reviews', 'Map Integration', 'Premium Listings', 'Claim Listings'] }
];

const faqs = [
  {
    question: 'How much does website development cost?',
    answer: 'Website development costs vary based on type, complexity, and features. Basic business websites typically range from $2,500 to $10,000, e-commerce sites from $8,000 to $50,000, and enterprise web applications from $25,000 to $200,000+. We provide detailed project estimates after understanding your specific requirements through a free consultation.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Development timelines depend on project scope. Simple business websites: 2-4 weeks. Medium complexity websites: 4-8 weeks. E-commerce stores: 6-12 weeks. Complex web applications: 3-6+ months. We follow Agile methodology with regular progress updates and demos throughout the development.'
  },
  {
    question: 'Do you provide website hosting and domain services?',
    answer: 'Yes, we offer comprehensive hosting solutions including cloud hosting (AWS, Google Cloud, Azure), managed WordPress hosting, VPS hosting, and dedicated servers. We also assist with domain registration, SSL certificates, DNS management, and email setup as part of our end-to-end web development services.'
  },
  {
    question: 'Will my website be mobile-friendly and SEO optimized?',
    answer: 'Absolutely! All our websites are built mobile-first with responsive design that adapts to all screen sizes. We implement SEO best practices including clean code structure, fast loading times, schema markup, meta optimization, Core Web Vitals optimization, and proper site architecture for search engine visibility.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes, we specialize in website redesign services. We analyze your current website, identify areas for improvement, and create a modern, high-performing redesign while preserving your existing content and SEO rankings. We ensure smooth migration with minimal downtime.'
  },
  {
    question: 'Do you offer website maintenance services?',
    answer: 'Yes, we provide comprehensive website maintenance packages including security updates, content updates, performance monitoring, backups, bug fixes, and feature enhancements. Our maintenance plans start from $100/month and ensure your website remains secure and up-to-date.'
  }
];

const countries = [
  { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'San Francisco', 'Seattle', 'Denver', 'Boston', 'Atlanta', 'Miami', 'Detroit', 'Minneapolis', 'Las Vegas', 'Portland', 'Orlando', 'Nashville', 'Charlotte', 'Raleigh', 'Tampa', 'Baltimore', 'St. Louis', 'Cleveland', 'Pittsburgh'] },
  { name: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Edinburgh', 'Sheffield', 'Bristol', 'Newcastle', 'Nottingham', 'Leicester', 'Brighton', 'Cardiff', 'Belfast', 'Reading', 'Leeds', 'Oxford', 'Cambridge', 'Southampton'] },
  { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Nagpur', 'Indore', 'Bhopal', 'Chandigarh', 'Noida', 'Gurgaon', 'Coimbatore', 'Kochi', 'Mysore', 'Vadodara', 'Visakhapatnam', 'Goa', 'Thiruvananthapuram'] },
  { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City', 'Hamilton', 'Halifax', 'Victoria', 'Waterloo', 'London', 'Mississauga', 'Brampton', 'Surrey', 'Burnaby', 'Ottawa'] },
  { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Hobart', 'Darwin', 'Newcastle', 'Wollongong', 'Geelong', 'Cairns', 'Sunshine Coast', 'Central Coast'] },
  { name: 'Germany', cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Stuttgart', 'Dusseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Heidelberg'] },
  { name: 'Singapore', cities: ['Singapore City', 'Jurong', 'Woodlands', 'Tampines', 'Bedok', 'Bukit Batok', 'Choa Chu Kang', 'Ang Mo Kio', 'Hougang', 'Punggol'] },
  { name: 'UAE', cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain', 'Jebel Ali'] },
  { name: 'Netherlands', cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen', 'Arnhem', 'Haarlem', 'Zwolle'] },
  { name: 'France', cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims'] },
  { name: 'New Zealand', cities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin', 'Palmerston North', 'Napier', 'Nelson', 'Rotorua'] },
  { name: 'South Africa', cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'East London', 'Nelspruit', 'Polokwane', 'Kimberley'] }
];

const processSteps = [
  { step: '01', title: 'Discovery & Planning', icon: Settings, desc: 'Understanding your business goals, target audience, competitors, and technical requirements' },
  { step: '02', title: 'Design & Wireframing', icon: Palette, desc: 'Creating visual concepts, wireframes, and UI/UX design prototypes for approval' },
  { step: '03', title: 'Development', icon: Code, desc: 'Building your website with clean code, responsive design, and SEO best practices' },
  { step: '04', title: 'Content Integration', icon: Database, desc: 'Adding and optimizing content, images, and multimedia elements' },
  { step: '05', title: 'Testing & Launch', icon: Rocket, desc: 'Quality assurance, performance testing, and website deployment' },
  { step: '06', title: 'Maintenance & Support', icon: HeadphonesIcon, desc: 'Ongoing updates, security patches, and technical support' }
];

export default function WebDevelopment() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Website Development Services | Web Design & Development Company - ELSxTech"
        description="Professional website development company offering custom website design, corporate websites, ecommerce development, WordPress development, responsive web design, and SEO-optimized websites. Expert web developers serving businesses across USA, UK, India, Canada, Australia, Germany, Singapore, UAE, and worldwide. Get a free website consultation today."
        keywords={[
          'Website Development', 'Web Development', 'Website Design', 'Web Design', 'Website Development Company',
          'Web Development Services', 'Custom Website Development', 'Professional Website Design',
          'Corporate Website Development', 'Business Website Design', 'Company Website Development',
          'Ecommerce Website Development', 'Online Store Development', 'Shopping Website Development',
          'WordPress Website Development', 'CMS Website Development', 'Drupal Development',
          'Responsive Website Design', 'Mobile Friendly Website', 'Mobile First Web Design',
          'Website Development Near Me', 'Website Developers Near Me', 'Web Design Company Near Me',
          'Website Development Cost', 'How Much Does A Website Cost', 'Website Development Price',
          'Small Business Website', 'Startup Website Development', 'Enterprise Website Development',
          'Website Development New York', 'Website Development London', 'Website Development Mumbai',
          'Website Development Bangalore', 'Website Development Toronto', 'Website Development Sydney',
          'Website Development Dubai', 'Website Development Singapore', 'Website Development Berlin',
          'Website Development Chicago', 'Website Development San Francisco', 'Website Development Austin',
          'Website Development Seattle', 'Website Development Boston', 'Website Development Los Angeles',
          'Website Development Houston', 'Website Development Atlanta', 'Website Development Miami',
          'Website Development Dallas', 'Website Development Phoenix', 'Website Development Denver',
          'Website Redesign', 'Website Revamp', 'Website Migration', 'Website Maintenance',
          'SEO Friendly Website Development', 'SEO Optimized Website Design', 'Search Engine Friendly Website',
          'Fast Loading Website', 'High Performance Website', 'SEO Web Development',
          'Custom Website Design', 'Unique Website Design', 'Bespoke Website Development',
          'Website Development Agency', 'Web Design Agency', 'Website Development Firm',
          'Affordable Website Development', 'Best Website Development Company', 'Top Web Developers',
          'Web Application Development', 'Progressive Web Apps', 'Single Page Application Development',
          'Landing Page Development', 'Lead Generation Websites', 'Marketing Website Development',
          'Hotel Website Development', 'Restaurant Website Development', 'Real Estate Website Development',
          'Healthcare Website Development', 'Education Website Development', 'Nonprofit Website Development',
          'Portfolio Website Development', 'Blog Website Development', 'Directory Website Development'
        ]}
        serviceCategory="tech"
        targetIndustries={['Technology', 'Financial Services', 'Healthcare', 'E-commerce', 'Real Estate', 'Hospitality', 'Education', 'Legal', 'Manufacturing', 'Retail', 'Automotive', 'Non-Profit', 'Media', 'Travel']}
        relatedServices={['Website Design', 'E-commerce Development', 'WordPress Development', 'Web Application Development', 'Landing Pages', 'Website Maintenance', 'SEO Services', 'Website Hosting']}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="label-solid mb-4 inline-block">1,000+ Websites Launched</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Website Development Services
              <span className="block text-blue-600">Professionally Designed, Expertly Built</span>
            </motion.h1>

            <motion.p
              className="text-xl text-ink-secondary mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Custom website development for businesses of all sizes. From corporate websites and e-commerce
              stores to web applications and landing pages. Mobile-responsive, SEO-optimized, and built to convert.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="btn-primary btn-lg">
                Get Free Website Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/case-studies" className="btn-secondary btn-lg">
                View Our Portfolio
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
                  <benefit.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-blue-600">{benefit.metric}</div>
                  <div className="text-xs text-ink-secondary">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Types Quick Links */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm font-semibold text-gray-600 mr-2">Website Types:</span>
            {['Corporate', 'E-commerce', 'WordPress', 'Portfolio', 'Landing Pages', 'Web Apps', 'Membership', 'Directory', 'Blog'].map((type) => (
              <span key={type} className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors">
                {type} Website
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Complete Website Development Services
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              From concept to launch and beyond, we provide end-to-end website development services
              tailored to your business objectives and target audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-xl transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-ink mb-2">{service.title}</h3>
                <p className="text-ink-secondary mb-4 text-sm">{service.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {service.features.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-ink-secondary">
                      <CheckCircle className="h-3.5 w-3.5 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {service.keywords.slice(0, 3).map((kw, idx) => (
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
            <span className="section-label">Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Modern Web Development Technologies
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="card-flat p-6">
                <h3 className="text-lg font-bold text-ink mb-4 capitalize flex items-center">
                  {category === 'cms' && <Database className="h-5 w-5 text-blue-600 mr-2" />}
                  {category === 'frontend' && <Code className="h-5 w-5 text-blue-600 mr-2" />}
                  {category === 'backend' && <Server className="h-5 w-5 text-blue-600 mr-2" />}
                  {category === 'database' && <Database className="h-5 w-5 text-blue-600 mr-2" />}
                  {category === 'hosting' && <Cloud className="h-5 w-5 text-blue-600 mr-2" />}
                  {category === 'tools' && <Settings className="h-5 w-5 text-blue-600 mr-2" />}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Website Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Websites for Every Business Need
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              Specialized website solutions designed for your specific industry and business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((type, index) => (
              <div key={index} className="card-flat p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-ink mb-2">{type.name}</h3>
                <p className="text-sm text-ink-secondary mb-4">{type.desc}</p>
                <ul className="space-y-1.5">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-ink-secondary">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Streamlined Website Development Process
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              We follow a proven development process ensuring your website is delivered on time, on budget, and beyond expectations.
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
                <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100">
                  {step.step}
                </div>
                <step.icon className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-secondary">{step.desc}</p>
              </motion.div>
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
              Website Development FAQs
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card-flat p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-ink pr-4">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0 group-open:rotate-180 transition-transform" />
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
            <span className="section-label">Global Reach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Website Development Services Worldwide
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              We serve clients globally with localized website development solutions tailored to regional market needs.
            </p>
          </div>

          {countries.map((country, countryIdx) => (
            <div key={countryIdx} className="mb-8 last:mb-0">
              <h3 className="text-xl font-bold text-ink mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                Website Development in {country.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {country.cities.map((city, cityIdx) => (
                  <span
                    key={cityIdx}
                    className="text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
                  >
                    Website Development {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guideline */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Pricing Guide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Website Development Investment Guide
            </h2>
            <p className="text-ink-secondary max-w-3xl mx-auto">
              Transparent pricing based on website type, features, and complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-sm font-semibold text-blue-600 mb-2">Simple Informational</div>
              <div className="text-2xl font-bold text-ink mb-3">$2,500 - $8,000</div>
              <ul className="space-y-2 text-sm text-ink-secondary text-left mb-4">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />5-10 Pages</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Responsive Design</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Contact Form</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Basic SEO Setup</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full text-sm">Get Quote</Link>
            </div>

            <div className="card p-6 text-center">
              <div className="text-sm font-semibold text-blue-600 mb-2">Professional Business</div>
              <div className="text-2xl font-bold text-ink mb-3">$8,000 - $20,000</div>
              <ul className="space-y-2 text-sm text-ink-secondary text-left mb-4">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />15-30 Pages</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Custom Design</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />CMS Integration</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Advanced SEO</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full text-sm">Get Quote</Link>
            </div>

            <div className="card p-6 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                POPULAR
              </div>
              <div className="text-sm font-semibold text-blue-600 mb-2">E-commerce Store</div>
              <div className="text-2xl font-bold text-ink mb-3">$15,000 - $50,000</div>
              <ul className="space-y-2 text-sm text-ink-secondary text-left mb-4">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Product Catalog</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Payment Integration</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Inventory System</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Customer Accounts</li>
              </ul>
              <Link to="/contact" className="btn-primary w-full text-sm">Get Quote</Link>
            </div>

            <div className="card p-6 text-center">
              <div className="text-sm font-semibold text-blue-600 mb-2">Custom Web App</div>
              <div className="text-2xl font-bold text-ink mb-3">$25,000 - $150K+</div>
              <ul className="space-y-2 text-sm text-ink-secondary text-left mb-4">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Custom Features</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />User System</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />API Integration</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Scalable Architecture</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full text-sm">Get Quote</Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            * Pricing is indicative and varies based on specific requirements, features, and complexity.
            Contact us for a detailed project assessment and customized quote.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your New Website?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free website consultation and quote. Let's discuss your project requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-blue-700 hover:bg-gray-100">
                Get Free Website Quote
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

      {/* SEO-Rich Footer Content */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-main">
          <div className="prose prose-invert prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-center">Complete Website Development Solutions</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Business Websites</h3>
                <ul className="space-y-1 text-sm">
                  <li>Small Business Websites</li>
                  <li>Corporate Websites</li>
                  <li>Professional Portfolios</li>
                  <li>Company Landing Pages</li>
                  <li>Startup Website Development</li>
                  <li>Entrepreneur Websites</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">E-commerce Solutions</h3>
                <ul className="space-y-1 text-sm">
                  <li>Online Store Development</li>
                  <li>WooCommerce Development</li>
                  <li>Shopify Development</li>
                  <li>Custom E-commerce</li>
                  <li>Marketplace Development</li>
                  <li>Payment Integration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">CMS Development</h3>
                <ul className="space-y-1 text-sm">
                  <li>WordPress Websites</li>
                  <li>Drupal Development</li>
                  <li>Headless CMS</li>
                  <li>Custom CMS Solutions</li>
                  <li>Content Integration</li>
                  <li>Admin Training</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Web Applications</h3>
                <ul className="space-y-1 text-sm">
                  <li>Single Page Applications</li>
                  <li>Progressive Web Apps</li>
                  <li>Web Portals</li>
                  <li>Dashboard Development</li>
                  <li>SaaS Applications</li>
                  <li>Real-time Web Apps</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Serving Clients Worldwide</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We provide professional website development services to businesses across United States (New York, Los Angeles, Chicago, San Francisco, Seattle, Austin, Boston, Miami, Denver, Atlanta), United Kingdom (London, Manchester, Birmingham, Leeds, Glasgow, Liverpool, Edinburgh), India (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur), Canada (Toronto, Vancouver, Montreal, Calgary, Ottawa), Australia (Sydney, Melbourne, Brisbane, Perth), Germany (Berlin, Munich, Frankfurt, Hamburg), Singapore, UAE (Dubai, Abu Dhabi), Netherlands (Amsterdam, Rotterdam, Eindhoven), France (Paris, Lyon), New Zealand (Auckland, Wellington), South Africa (Johannesburg, Cape Town), and 50+ countries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}
