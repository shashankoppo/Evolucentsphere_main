import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useToast } from '../hooks/useToast';

export default function ToastContainer() {
  const { toasts, remove } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type} animate-fade-in`}
          onClick={() => remove(toast.id)}
          role="alert"
        >
          <div className="flex items-center gap-2">
            {toast.type === 'success' && <CheckCircle className="w-4 h-4" />}
            {toast.type === 'error' && <XCircle className="w-4 h-4" />}
            {toast.type === 'info' && <AlertCircle className="w-4 h-4" />}
            <span>{toast.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
