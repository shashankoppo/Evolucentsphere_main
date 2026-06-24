import React, { useState, useEffect } from 'react';
import { Users, Mail, Phone, Building } from 'lucide-react';
import { dbOperations } from '../../lib/db';
import type { ContactForm } from '../../lib/db';

export default function AdminContacts() {
  const [submissions, setSubmissions] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    const data = await dbOperations.getContactSubmissions();
    setSubmissions(data);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink mb-6">Contact Submissions</h1>

      {loading ? (
        <div className="text-center section-padding text-ink-secondary">Loading...</div>
      ) : submissions.length === 0 ? (
        <div className="card p-12 text-center">
          <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-ink-secondary">No contact submissions yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div key={sub.id} className="card">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-ink">{sub.name}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-ink-secondary">
                    <span className="flex items-center"><Mail className="h-4 w-4 mr-1" />{sub.email}</span>
                    {sub.company && <span className="flex items-center"><Building className="h-4 w-4 mr-1" />{sub.company}</span>}
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {sub.created_at ? new Date(sub.created_at).toLocaleDateString() : ''}
                </span>
              </div>
              <p className="mt-4 text-ink-secondary surface p-4 rounded-lg">{sub.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
