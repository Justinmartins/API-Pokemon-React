import React from 'react';
import { CheckBox } from './forms/CheckBox';
import { TYPES } from '../data/types';

export function TypeFilter({ selectedTypes, onTypeChange }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Types</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {TYPES.map((type) => (
          <CheckBox
            key={type.id}
            checked={selectedTypes.includes(type.name)}
            onChange={() => onTypeChange(type.name)}
            label={type.name}
            image={type.image}
          />
        ))}
      </div>
    </div>
  );
}