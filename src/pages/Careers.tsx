import React from 'react';
import { Briefcase, Users, Star, Award, Globe, ArrowRight, BookOpen, Heart, Coffee, Sun } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const jobCategories = [
  {
    title: 'Technology',
    positions: [
      'Senior Software Engineer',
      'AI/ML Engineer',
      'Cloud Architect',
      'DevOps Engineer',
      'Full Stack Developer'
    ]
  },
  {
    title: 'Operations',
    positions: [
      'Operations Manager',
      'Process Analyst',
      'Quality Assurance Lead',
      'Team Leader',
      'Project Coordinator'
    ]
  },
  {
    title: 'Customer Experience',
    positions: [
      'Customer Success Manager',
      'Technical Support Specialist',
      'Account Manager',
      'Customer Experience Lead',
      'Support Team Lead'
    ]
  },
  {
    title: 'Business & Strategy',
    positions: [
      'Business Analyst',
      'Strategy Consultant',
      'Product Manager',
      'Digital Marketing Specialist',
      'Market Research Analyst'
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Comprehensive health insurance',
      'Mental health support',
      'Fitness allowance',
      'Wellness programs'
    ]
  },
  {
    icon: BookOpen,
    title: 'Learning & Growth',
    items: [
      'Professional development',
      'Certification support',
      'Training programs',
      'Career mentorship'
    ]
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    items: [
      'Flexible work hours',
      'Remote work options',
      'Paid time off',
      'Parental leave'
    ]
  },
  {
    icon: Sun,
    title: 'Perks & Benefits',
    items: [
      'Performance bonuses',
      'Stock options',
      'Team events',
      'Travel opportunities'
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Careers | Join Our Team"
        description="Join EvolucentSphere and be part of a team shaping the future of technology and business transformation."
        keywords={['Careers', 'Jobs', 'Technology Jobs', 'IT Careers', 'Business Jobs']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Future With Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join a team of innovators, problem-solvers, and thought leaders shaping the future 
              of technology and business transformation.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">30+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">4.8/5</div>
                <div className="text-gray-600">Employee Rating</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">#1</div>
                <div className="text-gray-600">Best Place to Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.positions.map((position, idx) => (
                    <div key={idx} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-gray-700 group-hover:text-purple-600">{position}</span>
                      <ArrowRight className="h-4 w-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  View All Positions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Join Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <benefit.icon className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 mb-12">
              We foster an environment of innovation, collaboration, and continuous learning where 
              every team member can grow and make an impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and embrace new ideas to solve complex challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  We work together across teams and borders to achieve exceptional results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">
                  We invest in our people's development and celebrate their success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8">
              Explore our open positions and take the next step in your career journey.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              View All Positions
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}