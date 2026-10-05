import React, { useState, useMemo } from 'react';
import { ClipboardList, ArrowRight, Loader2, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dbOperations } from '../lib/db';

type ProjectType = 'web-app' | 'mobile-app' | 'enterprise-software' | 'cloud-migration' | 'ai-ml' | 'website';
type Complexity = 'simple' | 'moderate' | 'complex' | 'enterprise';

const projectTypes: { id: ProjectType; label: string; baseHours: number }[] = [
  { id: 'website', label: 'Marketing Website', baseHours: 120 },
  { id: 'web-app', label: 'Web Application', baseHours: 600 },
  { id: 'mobile-app', label: 'Mobile App', baseHours: 800 },
  { id: 'enterprise-software', label: 'Enterprise Software', baseHours: 2000 },
  { id: 'cloud-migration', label: 'Cloud Migration', baseHours: 500 },
  { id: 'ai-ml', label: 'AI / ML Solution', baseHours: 1200 },
];

const complexities: { id: Complexity; label: string; multiplier: number; desc: string }[] = [
  { id: 'simple', label: 'Simple', multiplier: 1, desc: 'Basic features, standard integrations' },
  { id: 'moderate', label: 'Moderate', multiplier: 1.5, desc: 'Custom workflows, multiple integrations' },
  { id: 'complex', label: 'Complex', multiplier: 2.2, desc: 'Advanced features, real-time data, scalability' },
  { id: 'enterprise', label: 'Enterprise', multiplier: 3, desc: 'High-scale, compliance, multi-team' },
];

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState<ProjectType>('web-app');
  const [complexity, setComplexity] = useState<Complexity>('moderate');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const base = projectTypes.find(p => p.id === projectType)!.baseHours;
    const mult = complexities.find(c => c.id === complexity)!.multiplier;
    const totalHours = Math.round(base * mult);
    const hourlyRate = 45;
    const totalCost = totalHours * hourlyRate;
    const weeks = Math.ceil(totalHours / 40 / 3);
    const teamSize = complexity === 'simple' ? 2 : complexity === 'moderate' ? 3 : complexity === 'complex' ? 5 : 8;
    const phases = [
      { name: 'Discovery & Planning', pct: 0.15 },
      { name: 'Design', pct: 0.2 },
      { name: 'Development', pct: 0.45 },
      { name: 'Testing & QA', pct: 0.1 },
      { name: 'Deployment & Handoff', pct: 0.1 },
    ].map(p => ({ ...p, hours: Math.round(totalHours * p.pct) }));

    return { totalHours, totalCost, weeks, teamSize, phases };
  }, [projectType, complexity]);

  const fmt = (n: number) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });

  const handleSubmit = async () => {
    if (!email) return;
    setSubmitting(true);
    try {
      await dbOperations.submitToolSubmission({
        tool_type: 'project_estimator',
        inputs: { project_type: projectType, complexity },
        result: { total_hours: estimate.totalHours, total_cost: estimate.totalCost, weeks: estimate.weeks },
        email,
      });
      await dbOperations.submitLead({
        name: 'Project Estimator Lead',
        email,
        service_interest: projectTypes.find(p => p.id === projectType)!.label,
        message: `Project Estimator: ${projectTypes.find(p => p.id === projectType)!.label}, ${complexity} complexity. Estimate: ${fmt(estimate.totalCost)}, ${estimate.weeks} weeks, ${estimate.teamSize}-person team.`,
        source: 'project_estimator',
        tool_source: 'project_estimator',
        estimated_budget: fmt(estimate.totalCost),
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-white" />
          <h3 className="text-lg font-bold text-white">Project Estimator</h3>
        </div>
        <p className="text-sm text-slate-300 mt-1">Get a rough estimate for your project scope and budget.</p>
      </div>

      <div className="p-6">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Estimate Sent!</h4>
            <p className="text-sm text-gray-600 mb-4">We'll reach out with a detailed project plan and quote.</p>
            <Link to="/contact" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              Schedule a consultation →
            </Link>
          </div>
        ) : (
          <>
            {/* Project type */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Project Type</label>
              <div className="grid grid-cols-2 gap-2">
                {projectTypes.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setProjectType(p.id)}
                    className={`text-left p-3 rounded-lg border-2 transition-all ${projectType === p.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <span className={`text-sm font-semibold ${projectType === p.id ? 'text-blue-600' : 'text-gray-900'}`}>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Complexity</label>
              <div className="space-y-2">
                {complexities.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setComplexity(c.id)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all ${complexity === c.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${complexity === c.id ? 'text-blue-600' : 'text-gray-900'}`}>{c.label}</span>
                      <span className="text-xs text-gray-400">×{c.multiplier}</span>
                    </div>
                    <span className="text-xs text-gray-500">{c.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimate summary */}
            <div className="p-4 bg-slate-50 rounded-xl space-y-3">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <DollarSign className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-base font-bold text-slate-900">{fmt(estimate.totalCost)}</div>
                  <div className="text-xs text-slate-500">Est. Budget</div>
                </div>
                <div>
                  <Clock className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-base font-bold text-slate-900">{estimate.weeks} wks</div>
                  <div className="text-xs text-slate-500">Timeline</div>
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 mt-1">{estimate.teamSize}</div>
                  <div className="text-xs text-slate-500">Team Size</div>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-3 space-y-1.5">
                {estimate.phases.map(p => (
                  <div key={p.name} className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">{p.name}</span>
                    <span className="font-medium text-slate-900">{p.hours}h</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <input
                type="email"
                placeholder="Enter your work email for a detailed quote"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSubmit}
                disabled={!email || submitting}
                className="w-full mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 text-white text-sm font-semibold rounded-lg disabled:opacity-40 hover:bg-slate-900 transition-colors"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Detailed Quote <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center">Estimates are indicative. Final pricing depends on detailed requirements.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
