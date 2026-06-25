import React, { useState, useEffect } from 'react';
import { Users, Mail, Phone, Building, Tag, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service_interest?: string;
  message?: string;
  source: string;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  new: 'bg-brand-50 text-brand-500 border-brand-200',
  contacted: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  qualified: 'bg-green-50 text-green-700 border-green-200',
  closed: 'bg-surface text-ink-muted border-border',
};

const statusIcons: Record<string, typeof AlertCircle> = {
  new: AlertCircle,
  contacted: Clock,
  qualified: CheckCircle,
  closed: CheckCircle,
};

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    setLeads(data ?? []);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from('leads').update({ status }).eq('id', id);
    setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
  };

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-ink">Leads Pipeline</h1>
          <p className="text-sm text-ink-secondary">Manage incoming leads and proposals</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {['all', 'new', 'contacted', 'qualified', 'closed'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg border transition-colors capitalize ${
                filter === s
                  ? 'bg-brand-500 text-white border-transparent'
                  : 'border-border text-ink-secondary hover:bg-surface'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {['new', 'contacted', 'qualified', 'closed'].map((s) => {
          const count = leads.filter(l => l.status === s).length;
          const Icon = statusIcons[s];
          return (
            <div key={s} className="card p-4">
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-ink-muted" />
                <span className="text-xs font-medium text-ink-muted capitalize">{s}</span>
              </div>
              <div className="text-2xl font-bold text-ink">{count}</div>
            </div>
          );
        })}
      </div>

      {loading ? (
        <div className="text-center py-16 text-ink-secondary">Loading leads...</div>
      ) : filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <Users className="h-12 w-12 text-ink-muted mx-auto mb-4" />
          <p className="text-ink-secondary">No leads found.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((lead) => (
            <div key={lead.id} className="card p-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-ink">{lead.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border capitalize ${statusColors[lead.status] || statusColors.new}`}>
                      {lead.status}
                    </span>
                    {lead.source !== 'website' && (
                      <span className="label text-xs">{lead.source}</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-secondary">
                    <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{lead.email}</span>
                    {lead.phone && <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{lead.phone}</span>}
                    {lead.company && <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5" />{lead.company}</span>}
                    {lead.service_interest && <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" />{lead.service_interest}</span>}
                  </div>
                  {lead.message && (
                    <p className="mt-3 text-sm text-ink-secondary bg-surface p-3 rounded-lg">{lead.message}</p>
                  )}
                </div>
                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <span className="text-xs text-ink-muted">{new Date(lead.created_at).toLocaleDateString()}</span>
                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    className="text-xs border border-border rounded-lg px-2 py-1 bg-white text-ink focus:outline-none focus:ring-1 focus:ring-brand-500"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
