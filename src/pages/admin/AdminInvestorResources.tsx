import React, { useState, useEffect } from 'react';
import { FileText, Plus, Trash2, CreditCard as Edit, Download } from 'lucide-react';
import { dbOperations } from '../../lib/db';
import type { InvestorResource } from '../../lib/db';

export default function AdminInvestorResources() {
  const [resources, setResources] = useState<InvestorResource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    setLoading(true);
    const data = await dbOperations.getInvestorResources();
    setResources(data);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-ink">Investor Resources</h1>
        <button className="btn-secondary text-sm">
          <Plus className="h-4 w-4 mr-2" /> New Resource
        </button>
      </div>

      {loading ? (
        <div className="text-center section-padding text-ink-secondary">Loading...</div>
      ) : resources.length === 0 ? (
        <div className="card p-12 text-center">
          <FileText className="h-12 w-12 text-ink-muted mx-auto mb-4" />
          <p className="text-ink-secondary">No investor resources yet.</p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead className="surface border-b">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Title</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Type</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Date</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {resources.map((resource) => (
                <tr key={resource.id} className="hover:bg-surface">
                  <td className="px-6 py-4">
                    <div className="font-medium text-ink">{resource.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="label">{resource.type}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-ink-muted">
                    {new Date(resource.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="p-1.5 text-ink-muted hover:text-blue-600"><Download className="h-4 w-4" /></a>
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
