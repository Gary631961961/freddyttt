
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import DownloadForm from './components/DownloadForm.tsx';
import AdSlot from './components/AdSlot.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <main className="flex-grow relative z-10">
        {/* Top Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <AdSlot label="Top Banner" className="h-24 glass-card border-dashed" />
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4">
          <Hero />
        </div>

        {/* Form Section */}
        <div className="max-w-7xl mx-auto px-4">
          <DownloadForm />
        </div>

        {/* Below Input Ad */}
        <div className="max-w-3xl mx-auto px-4 mt-16">
          <AdSlot label="Premium Partner" className="h-32 glass-card border-dashed" />
        </div>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 mt-28 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 glass-card rounded-[2rem] hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-blue-400/20 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-inner">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ultra Fast</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                High-speed extraction servers for instantaneous media fetching.
              </p>
            </div>
            
            <div className="text-center p-8 glass-card rounded-[2rem] hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-indigo-400/20 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-inner">
                <i className="fa-solid fa-lock"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Encrypted</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Your downloads are processed over secure SSL connections with privacy.
              </p>
            </div>
            
            <div className="text-center p-8 glass-card rounded-[2rem] hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-sky-400/20 text-sky-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-inner">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">HQ Quality</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Always fetches the maximum resolution source files for crystal clear media.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <AdSlot label="Bottom Ad" className="h-32 glass-card border-dashed" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
