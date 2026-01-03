
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center py-12 px-4">
      <div className="inline-block p-5 bg-white/40 backdrop-blur-md rounded-3xl mb-8 shadow-xl shadow-blue-500/5 border border-white/50">
        <i className="fa-solid fa-water text-4xl text-blue-600 animate-pulse"></i>
      </div>
      <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
        Snap<span className="text-blue-600">Stream</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-700/80 max-w-2xl mx-auto font-medium leading-relaxed">
        The crystal-clear way to download Instagram media. 
        High-fidelity, lightning fast, and fluid experience.
      </p>
    </div>
  );
};

export default Hero;
