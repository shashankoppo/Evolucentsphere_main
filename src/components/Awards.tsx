import React, { useEffect, useState } from 'react';
import { Award, Star, Trophy, Medal, Loader2 } from 'lucide-react';
import { dbOperations } from '../lib/db';
import type { Award as AwardType } from '../lib/db';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Award,
  Medal,
  Star,
};

const fallbackAwards = [
  { icon: 'Trophy', title: 'Innovation Excellence', organization: 'Global Tech Awards', year: '2024' },
  { icon: 'Award', title: 'Best AI Solutions Provider', organization: 'Enterprise Technology Review', year: '2023' },
  { icon: 'Medal', title: 'Top Quantum Computing Consultant', organization: 'Industry Leaders Forum', year: '2023' },
  { icon: 'Star', title: 'Excellence in Digital Transformation', organization: 'Digital Future Summit', year: '2023' },
];

export default function Awards() {
  const [awards, setAwards] = useState<AwardType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await dbOperations.getAwards();
        if (data && data.length > 0) {
          setAwards(data);
        }
      } catch {
        // fallback below
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const display = awards.length > 0
    ? awards.map(a => ({ icon: iconMap[a.icon] || Award, title: a.title, organization: a.organization || '', year: a.year || '' }))
    : fallbackAwards.map(a => ({ icon: iconMap[a.icon] || Award, title: a.title, organization: a.organization, year: a.year }));

  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="section-label">Recognition</span>
          <h2 className="text-4xl font-bold text-ink mb-4">Recognition & Awards</h2>
          <p className="text-xl text-ink-secondary">Celebrating excellence in technology innovation</p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 text-brand-500 animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-8">
            {display.map((award, index) => {
              const Icon = award.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-16 w-16 text-brand-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-ink mb-2">{award.title}</h3>
                  <p className="text-ink-secondary">{award.organization}</p>
                  <span className="label mt-2 inline-block">{award.year}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
