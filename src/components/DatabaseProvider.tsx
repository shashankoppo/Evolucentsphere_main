import React, { createContext, useContext, useEffect, useState } from 'react';
import { pool } from '../lib/db';
import LoadingSpinner from './LoadingSpinner';

interface DatabaseContextType {
  isConnected: boolean;
  error: string | null;
  retry: () => Promise<void>;
}

const DatabaseContext = createContext<DatabaseContextType>({
  isConnected: false,
  error: null,
  retry: async () => {}
});

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkConnection = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Test connection by making a simple query
      await pool.query('SELECT 1');
      setIsConnected(true);
    } catch (err) {
      console.error('Database connection error:', err);
      setError('Unable to connect to the database. Please check your connection and try again.');
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  const retry = async () => {
    await checkConnection();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Database Connection Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="flex gap-4">
            <button
              onClick={retry}
              className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <DatabaseContext.Provider value={{ isConnected, error, retry }}>
      {children}
    </DatabaseContext.Provider>
  );
}