import React, { useState, useMemo } from 'react';
import { Calculator, TrendingDown, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dbOperations } from '../lib/db';

interface ROICalculatorProps {
  type: 'bpo' | 'ai';
}

export default function ROICalculator({ type }: ROICalculatorProps) {
  const [agents, setAgents] = useState(type === 'bpo' ? 10 : 5);
  const [avgSalary, setAvgSalary] = useState(type === 'bpo' ? 35000 : 75000);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const calc = useMemo(() => {
    const annualInHouse = agents * avgSalary;
    const overheadRate = 0.3;
    const overhead = annualInHouse * overheadRate;
    const totalInHouse = annualInHouse + overhead;

    const outsourcingRate = type === 'bpo' ? 0.6 : 0.5;
    const outsourcedCost = totalInHouse * outsourcingRate;
    const annualSavings = totalInHouse - outsourcedCost;
    const savingsPct = Math.round((annualSavings / totalInHouse) * 100);
    const monthlySavings = Math.round(annualSavings / 12);
    const setupCost = Math.round(outsourcedCost * 0.05);
    const paybackMonths = setupCost > 0 ? Math.max(1, Math.ceil(setupCost / monthlySavings)) : 1;

    return {
      totalInHouse: Math.round(totalInHouse),
      outsourcedCost: Math.round(outsourcedCost),
      annualSavings: Math.round(annualSavings),
      savingsPct,
      monthlySavings,
      setupCost,
      paybackMonths,
    };
  }, [agents, avgSalary, type]);

  const fmt = (n: number) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });

  const handleSubmit = async () => {
    if (!email) return;
    setSubmitting(true);
    try {
      await dbOperations.submitToolSubmission({
        tool_type: `roi_calculator_${type}`,
        inputs: { agents, avg_salary: avgSalary },
        result: calc,
        email,
      });
      await dbOperations.submitLead({
        name: 'ROI Calculator Lead',
        email,
        service_interest: type === 'bpo' ? 'BPO Services' : 'AI & Analytics',
        message: `ROI Calculator: ${agents} agents, ${fmt(avgSalary)} avg salary. Projected ${calc.savingsPct}% savings (${fmt(calc.annualSavings)}/yr).`,
        source: `roi_calculator_${type}`,
        tool_source: `roi_calculator_${type}`,
        estimated_budget: fmt(calc.outsourcedCost),
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const label = type === 'bpo' ? 'FTEs / Agents' : 'Data Analysts';
  const title = type === 'bpo' ? 'BPO Savings Calculator' : 'AI ROI Calculator';
  const desc = type === 'bpo'
    ? 'Estimate your annual savings from outsourcing business processes vs. keeping them in-house.'
    : 'Estimate the financial impact of replacing manual analytics with AI-powered automation.';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-white" />
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-blue-100 mt-1">{desc}</p>
      </div>

      <div className="p-6">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Results Sent!</h4>
            <p className="text-sm text-gray-600 mb-4">We'll follow up with a detailed cost breakdown.</p>
            <Link to="/contact" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              Talk to our team →
            </Link>
          </div>
        ) : (
          <>
            {/* Sliders */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Number of {label}</label>
                  <span className="text-sm font-bold text-blue-600">{agents}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={type === 'bpo' ? 100 : 50}
                  value={agents}
                  onChange={e => setAgents(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Avg. Annual Salary / Person</label>
                  <span className="text-sm font-bold text-blue-600">{fmt(avgSalary)}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="150000"
                  step="5000"
                  value={avgSalary}
                  onChange={e => setAvgSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Results */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">In-house annual cost</span>
                <span className="text-sm font-semibold text-gray-900">{fmt(calc.totalInHouse)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Outsourced cost</span>
                <span className="text-sm font-semibold text-gray-900">{fmt(calc.outsourcedCost)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Estimated annual savings</span>
                  <span className="text-lg font-bold text-green-600">{fmt(calc.annualSavings)}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-600">{calc.savingsPct}% cost reduction</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-500">Payback in ~{calc.paybackMonths} months</span>
                </div>
              </div>
            </div>

            {/* Email capture */}
            <div className="mt-5">
              <input
                type="email"
                placeholder="Enter your work email for a detailed breakdown"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSubmit}
                disabled={!email || submitting}
                className="w-full mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg disabled:opacity-40 hover:bg-blue-700 transition-colors"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Detailed Report <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center">No spam. We'll only send your ROI breakdown.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
