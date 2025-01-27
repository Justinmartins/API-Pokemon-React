import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500"></div>
      <span className="ml-4 text-white font-medium">En cours de chargement...</span>
    </div>
  );
}