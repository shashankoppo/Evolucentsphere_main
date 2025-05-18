import React from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: 'Innovation Excellence',
    organization: 'Global Tech Awards',
    year: '2024'
  },
  {
    icon: Award,
    title: 'Best AI Solutions Provider',
    organization: 'Enterprise Technology Review',
    year: '2023'
  },
  {
    icon: Medal,
    title: 'Top Quantum Computing Consultant',
    organization: 'Industry Leaders Forum',
    year: '2023'
  },
  {
    icon: Star,
    title: 'Excellence in Digital Transformation',
    organization: 'Digital Future Summit',
    year: '2023'
  }
];

export default function Awards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
          <p className="text-xl text-gray-600">Celebrating excellence in technology innovation</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center">
              <award.icon className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.organization}</p>
              <p className="text-purple-600 font-medium">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}