import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { breadcrumbConfig, getIndustryForService, getRelatedServices } from '../lib/navigation';
import { injectSchema } from '../lib/schema';

export default function BreadcrumbNav() {
  const location = useLocation();
  const pathname = location.pathname;

  const defaultBreadcrumbs = breadcrumbConfig[pathname];

  const getBreadcrumbs = (): Array<{ label: string; path: string }> => {
    if (defaultBreadcrumbs) {
      return defaultBreadcrumbs.map((label, idx, arr) => ({
        label,
        path: idx === 0 ? '/' : `/${arr.slice(0, idx + 1).join('/')}`
      }));
    }

    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, idx) => ({
      label: segment.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
      path: '/' + segments.slice(0, idx + 1).join('/')
    }));
  };

  const breadcrumbs = getBreadcrumbs();

  useEffect(() => {
    if (breadcrumbs.length > 0) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.label,
          item: `${window.location.origin}${crumb.path}`
        }))
      };
      injectSchema(schema);
    }
  }, [breadcrumbs]);

  if (breadcrumbs.length === 0) return null;

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="breadcrumb">
      <div className="container mx-auto px-4 sm:px-6">
        <ol className="flex items-center space-x-1 text-sm">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
          </li>

          {breadcrumbs.map((breadcrumb, idx) => (
            <li key={idx} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              {idx === breadcrumbs.length - 1 ? (
                <span className="text-gray-600 font-medium">{breadcrumb.label}</span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
