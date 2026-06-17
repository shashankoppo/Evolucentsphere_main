import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, AlertCircle, ArrowLeft, UserPlus, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

export default function AdminLogin() {
  const { signIn, signUp, hasUsers } = useAdmin();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Show setup form only if we haven't confirmed users exist
  const showSetup = hasUsers === false || hasUsers === null;
  const isLocked = hasUsers === true;

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

  const handleSetup = async (e: React.FormEvent) => {
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

    setSuccess('Admin account created! You can now sign in.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <SEOHead title="Admin Portal | ELSxGlobal" noindex={true} />
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-blue-600 text-white mb-4">
              {showSetup && !isLocked ? <UserPlus className="h-7 w-7" /> : <Lock className="h-7 w-7" />}
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {showSetup && !isLocked ? 'Initial Setup' : 'Admin Portal'}
            </h1>
            <p className="text-gray-600 mt-2">
              {showSetup && !isLocked
                ? 'Create your admin account to get started'
                : 'Sign in to manage your website content'}
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

          {showSetup && !isLocked ? (
            <form onSubmit={handleSetup} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="admin@elsxglobal.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password (min 6 characters)</label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Create a secure password"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Re-enter password"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Create Admin Account'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="admin@elsxglobal.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
