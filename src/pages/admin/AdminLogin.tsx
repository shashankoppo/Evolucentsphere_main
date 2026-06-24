import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, AlertCircle, ArrowLeft, UserPlus, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

export default function AdminLogin() {
  const { signIn, signUp } = useAdmin();
  const navigate = useNavigate();

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await signIn(email, password);
    if (authError) {
      setError(authError);
      setLoading(false);
      return;
    }

    navigate('/admin');
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const { error: authError } = await signUp(email, password);
    if (authError) {
      setError(authError);
      setLoading(false);
      return;
    }

    setSuccess('Account created! You can now sign in.');
    setMode('signin');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center py-12 px-4">
      <SEOHead title="Admin Portal | ELSxGlobal" noindex={true} />
      <div className="w-full max-w-md">
        <div className="card">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-brand-500 text-white mb-4 shadow-lg">
              {mode === 'signup' ? <UserPlus className="h-8 w-8" /> : <Lock className="h-8 w-8" />}
            </div>
            <h1 className="text-2xl font-bold text-ink">
              {mode === 'signup' ? 'Create Account' : 'Admin Portal'}
            </h1>
            <p className="text-ink-secondary mt-2">
              {mode === 'signup'
                ? 'Set up your admin credentials'
                : 'Sign in to manage website content'}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{success}</span>
            </div>
          )}

          {mode === 'signup' ? (
            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">Admin Email</label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="admin@elsxglobal.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">Password (min 6 chars)</label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Create a secure password"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Admin Account'}
              </button>
              <p className="text-center text-sm text-ink-secondary">
                Already have an account?{' '}
                <button type="button" onClick={() => setMode('signin')} className="text-brand-500 hover:underline font-medium">
                  Sign in
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">Email</label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="admin@elsxglobal.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">Password</label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
              <p className="text-center text-sm text-ink-secondary">
                No account yet?{' '}
                <button type="button" onClick={() => setMode('signup')} className="text-brand-500 hover:underline font-medium">
                  Create one
                </button>
              </p>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <Link to="/" className="text-sm text-ink-secondary hover:text-blue-600 flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
