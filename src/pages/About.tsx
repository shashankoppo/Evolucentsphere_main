import React from 'react';
import { Users, Award, Globe, Target, Rocket, Shield, Brain, Code } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function About() {
  return (
    <div className="pt-20">
      <SEOHead 
        title="About Us"
        description="Learn about Tenebris Navitas - pioneers in AI and quantum computing solutions transforming businesses worldwide."
        keywords={['About Tenebris Navitas', 'AI Company', 'Technology Innovation', 'Digital Transformation']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pioneering the Future of Business Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At Tenebris Navitas, we combine cutting-edge AI technology with quantum computing expertise 
              to transform businesses and drive unprecedented growth. Our innovative solutions are shaping 
              the future of enterprise technology.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">$2B+</div>
                <div className="text-gray-600">Client ROI Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-gray-600">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">People First</h3>
              <p className="text-gray-600">
                We believe in empowering our people and clients through continuous learning and growth,
                fostering a culture of innovation and excellence.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, setting the highest standards in the industry
                and delivering exceptional results.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-gray-600">
                Our solutions create lasting positive impact across industries and borders, driving
                sustainable growth and innovation.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to deliver innovative solutions for complex challenges,
                staying ahead of technological trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Rocket className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Think Big</h3>
              <p className="text-gray-600">
                We encourage bold thinking and ambitious goals, pushing the boundaries of what's possible
                in technology and business transformation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Build Trust</h3>
              <p className="text-gray-600">
                We maintain the highest standards of integrity and transparency, building lasting
                relationships with our clients and partners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Brain className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Learn & Adapt</h3>
              <p className="text-gray-600">
                We embrace continuous learning and adaptation, staying ahead of technological
                advancements and market changes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Deliver Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering exceptional results that exceed expectations and
                drive measurable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower organizations worldwide with transformative technology solutions that 
                drive efficiency, innovation, and sustainable growth. We're committed to delivering 
                exceptional value through our expertise in AI, quantum computing, and advanced analytics,
                helping businesses navigate and thrive in the digital age.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in technological innovation and business transformation, 
                setting new standards for excellence and creating lasting positive impact for our 
                clients, employees, and communities. We envision a future where advanced technology
                solutions are accessible and transformative for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Join the ranks of industry leaders who have revolutionized their operations with our
              innovative solutions.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 transition-colors font-medium">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}