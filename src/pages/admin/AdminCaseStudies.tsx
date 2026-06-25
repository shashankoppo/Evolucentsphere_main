import React, { useState, useEffect } from 'react';
import { TrendingUp, Plus, Trash2, CreditCard as Edit } from 'lucide-react';
import { dbOperations } from '../../lib/db';
import type { CaseStudy } from '../../lib/db';

export default function AdminCaseStudies() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudies();
  }, []);

  const loadStudies = async () => {
    setLoading(true);
    const data = await dbOperations.getCaseStudies();
    setStudies(data);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-ink">Case Studies</h1>
        <button className="btn-secondary text-sm">
          <Plus className="h-4 w-4 mr-2" /> New Case Study
        </button>
      </div>

      {loading ? (
        <div className="text-center section-padding text-ink-secondary">Loading...</div>
      ) : studies.length === 0 ? (
        <div className="card p-12 text-center">
          <TrendingUp className="h-12 w-12 text-ink-muted mx-auto mb-4" />
          <p className="text-ink-secondary">No case studies yet.</p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead className="surface border-b">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Title</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Industry</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Date</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {studies.map((study) => (
                <tr key={study.id} className="hover:bg-surface">
                  <td className="px-6 py-4">
                    <div className="font-medium text-ink">{study.title}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-ink-secondary">{study.industry}</td>
                  <td className="px-6 py-4 text-sm text-ink-muted">
                    {new Date(study.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1.5 text-ink-muted hover:text-blue-600"><Edit className="h-4 w-4" /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
