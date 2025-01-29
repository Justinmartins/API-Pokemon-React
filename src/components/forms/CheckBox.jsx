import React from 'react';

import React from 'react';

export function CheckBox({ checked, onChange, label, image }) {
  return (
    <label className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
      />
      <div className="flex items-center ml-2">
        {image && <img src={image} alt={label} className="w-6 h-6 mr-2" />}
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
    </label>
  );
}