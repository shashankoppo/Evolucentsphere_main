import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <SEOHead title="Page Not Found" noindex={true} />
      <div className="text-center px-6 max-w-md mx-auto">
        <AlertTriangle className="h-16 w-16 text-brand-200 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-ink mb-4">Page Not Found</h1>
        <p className="text-lg text-ink-secondary mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
