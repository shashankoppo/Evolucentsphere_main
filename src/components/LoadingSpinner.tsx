import React from 'react';

interface Props {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function LoadingSpinner({ size = 'medium', className = '' }: Props) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}