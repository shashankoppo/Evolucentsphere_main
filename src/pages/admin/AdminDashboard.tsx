import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import {
  LayoutDashboard, FileText, BookOpen, Users, TrendingUp,
  LogOut, Menu, X, ChevronRight, Globe
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, exact: true },
  { name: 'Blog Posts', path: '/admin/blog', icon: BookOpen },
  { name: 'Case Studies', path: '/admin/case-studies', icon: TrendingUp },
  { name: 'Contact Submissions', path: '/admin/contacts', icon: Users },
  { name: 'Investor Resources', path: '/admin/investor-resources', icon: FileText },
];

export default function AdminDashboard() {
  const { user, signOut } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SEOHead title="Admin Dashboard | ELSxGlobal" noindex={true} />

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
          <Menu className="h-6 w-6" />
        </button>
        <span className="font-bold text-gray-900">Admin Panel</span>
        <div className="w-6" />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-gray-900">Admin Panel</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <SidebarNav isActive={isActive} onSignOut={handleSignOut} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:bg-white lg:border-r lg:border-gray-200 lg:flex lg:flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg">ELSxGlobal</span>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>
        </div>
        <SidebarNav isActive={isActive} onSignOut={handleSignOut} />
      </aside>

      {/* Main content */}
      <div className="lg:pl-64 pt-14 lg:pt-0">
        <header className="hidden lg:flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Website</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-900 font-medium">Admin</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="text-sm text-red-600 hover:text-red-700 flex items-center"
            >
              <LogOut className="h-4 w-4 mr-1" /> Sign Out
            </button>
          </div>
        </header>

        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SidebarNav({ isActive, onSignOut }: { isActive: (path: string, exact?: boolean) => boolean; onSignOut: () => void }) {
  return (
    <nav className="flex-1 p-4 space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            isActive(item.path, item.exact)
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <item.icon className="h-5 w-5 mr-3" />
          {item.name}
        </Link>
      ))}
      <div className="pt-4 mt-4 border-t border-gray-200">
        <Link to="/" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          <Globe className="h-5 w-5 mr-3" /> View Website
        </Link>
        <button
          onClick={onSignOut}
          className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 mr-3" /> Sign Out
        </button>
      </div>
    </nav>
  );
}
