
import React from 'react';
import { AdProps } from '../types.ts';

const AdSlot: React.FC<AdProps> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center justify-center bg-gray-50/20 border-2 border-dashed border-white/20 rounded-xl py-8 text-slate-500 text-sm overflow-hidden backdrop-blur-sm ${className}`}>
      <div className="text-center">
        <p className="font-bold uppercase tracking-widest text-[10px] mb-1">Sponsored Section</p>
        <p className="font-medium text-slate-700">{label}</p>
      </div>
    </div>
  );
};

export default AdSlot;
