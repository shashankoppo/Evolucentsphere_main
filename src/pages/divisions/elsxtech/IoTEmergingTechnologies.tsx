import React from 'react';
import { Network, Cpu, Eye, Zap, Globe, Settings, Bot, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Network,
    title: 'IoT Solutions',
    description: 'Comprehensive Internet of Things solutions and platforms',
    features: ['Device Connectivity', 'Data Collection', 'Real-time Monitoring', 'Predictive Maintenance']
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Distributed computing solutions at the network edge',
    features: ['Edge Analytics', 'Local Processing', 'Reduced Latency', 'Bandwidth Optimization']
  },
  {
    icon: Eye,
    title: 'AR/VR Solutions',
    description: 'Immersive augmented and virtual reality applications',
    features: ['AR Applications', 'VR Training', 'Mixed Reality', '3D Visualization']
  },
  {
    icon: Bot,
    title: 'Blockchain & DLT',
    description: 'Distributed ledger technologies and blockchain solutions',
    features: ['Smart Contracts', 'Cryptocurrency', 'Supply Chain', 'Digital Identity']
  }
];

const benefits = [
  { metric: '50%', label: 'Operational Efficiency' },
  { metric: '70%', label: 'Cost Reduction' },
  { metric: '90%', label: 'Data Accuracy' },
  { metric: '24/7', label: 'Monitoring Coverage' }
];

export default function IoTEmergingTechnologies() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="IoT & Emerging Technologies | ELSxTech - EvolucentSphere"
        description="Internet of Things, blockchain, AR/VR, edge computing, robotics, and cutting-edge technology solutions for Industry 4.0, smart cities, and digital transformation."
        keywords={[
          'Internet of Things', 'IoT', 'Industrial IoT', 'Smart Devices', 'Sensor Networks',
          'Edge Computing', 'Blockchain', 'Distributed Ledger', 'Smart Contracts', 'Cryptocurrency',
          'Augmented Reality', 'Virtual Reality', 'Mixed Reality', 'AR/VR Applications',
          'Quantum Computing', 'Robotics', 'Automation', '5G Technology', 'Wearable Technology',
          'Smart Cities', 'Connected Vehicles', 'Digital Twins', 'Industry 4.0',
          'Machine Learning', 'Artificial Intelligence', 'Predictive Analytics', 'Real-time Monitoring'
        ]}
        serviceCategory="tech"
        targetIndustries={['Manufacturing', 'Smart Cities', 'Healthcare', 'Automotive']}
        relatedServices={['IoT Development', 'Blockchain Solutions', 'AR/VR Applications', 'Edge Computing']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              IoT & Emerging Technologies
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Harness the power of emerging technologies including IoT, blockchain, AR/VR, 
              and edge computing to drive innovation and digital transformation.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-2xl font-bold text-cyan-600">{benefit.metric}</div>
                  <div className="text-gray-600">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Emerging Technology Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-cyan-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technology Platforms & Tools
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT Platforms</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  AWS IoT Core
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Azure IoT Hub
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Google Cloud IoT
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  ThingWorx & PTC
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Ethereum & Solidity
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Hyperledger Fabric
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Polygon & BSC
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Web3.js & Truffle
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AR/VR</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Unity & Unreal Engine
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  ARKit & ARCore
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Oculus & HoloLens
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  WebXR & A-Frame
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Edge Computing</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  AWS Greengrass
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Azure IoT Edge
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  NVIDIA Jetson
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  OpenFog & EdgeX
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Manufacturing</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Industrial IoT Sensors
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Predictive Maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Digital Twins
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Quality Control AR
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Cities</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Traffic Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Environmental Monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Smart Lighting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Waste Management
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare IoT</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Remote Patient Monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Wearable Devices
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Medical AR Training
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-cyan-600 rounded-full mr-2"></span>
                  Asset Tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Embrace the Future of Technology</h2>
            <p className="text-xl mb-8">
              Transform your business with cutting-edge IoT, blockchain, and emerging technology solutions.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Explore Emerging Tech
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}