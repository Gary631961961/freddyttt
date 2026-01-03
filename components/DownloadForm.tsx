
import React, { useState } from 'react';
import { analyzeInstagramUrl } from '../services/geminiService.ts';
import { DownloadResult } from '../types.ts';

const DownloadForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const [error, setError] = useState('');

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please paste a valid Instagram URL');
      return;
    }

    setError('');
    setIsLoading(true);
    setResult(null);

    try {
      const analysis = await analyzeInstagramUrl(url);
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (url.includes('instagram.com')) {
        setResult({
          type: analysis.type || 'post',
          thumbnail: 'https://picsum.photos/seed/insta/400/500',
          title: 'Instagram Media Content',
          url: '#',
          id: Math.random().toString(36).substr(2, 9)
        });
      } else {
        setError('The URL provided does not seem to be from Instagram.');
      }
    } catch (err) {
      setError('An error occurred while processing the link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 w-full">
      <form onSubmit={handleDownload} className="space-y-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <i className="fa-brands fa-instagram text-blue-500 text-2xl group-focus-within:scale-110 transition-transform"></i>
          </div>
          <input
            type="text"
            className="block w-full pl-14 pr-6 py-6 text-lg border border-white/60 rounded-[2rem] bg-white/40 backdrop-blur-xl shadow-2xl focus:ring-8 focus:ring-blue-400/10 focus:border-blue-400 focus:bg-white/60 transition-all outline-none text-slate-900 placeholder-slate-500 font-medium"
            placeholder="Paste Instagram link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {error && (
          <div className="flex items-center gap-3 text-red-600 bg-white/40 backdrop-blur-md border border-red-200/50 p-5 rounded-2xl text-sm shadow-lg animate-in fade-in zoom-in-95">
            <i className="fa-solid fa-circle-exclamation text-lg"></i>
            <span className="font-bold tracking-tight">{error}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-5">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-blue-500/30 backdrop-blur-md transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 text-lg uppercase tracking-wider"
          >
            {isLoading ? (
              <>
                <i className="fa-solid fa-spinner animate-spin"></i>
                Processing
              </>
            ) : (
              <>
                <i className="fa-solid fa-circle-arrow-down"></i>
                Fetch Media
              </>
            )}
          </button>
          
          <button
            type="button"
            className="flex-[0.6] bg-white/20 hover:bg-white/40 text-blue-900 border border-white/60 font-black py-5 px-8 rounded-2xl shadow-xl backdrop-blur-xl transition-all flex items-center justify-center gap-3 active:scale-95 text-lg uppercase tracking-wider"
          >
            <i className="fa-solid fa-rocket text-blue-500"></i>
            Pro App
          </button>
        </div>
      </form>

      {/* Result Display */}
      {result && (
        <div className="mt-16 glass-card rounded-[3rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-5/12 aspect-[4/5] bg-blue-100/30 rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/50">
              <img src={result.thumbnail} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-xl text-white text-[11px] tracking-[0.2em] font-black px-5 py-2 rounded-full uppercase shadow-lg">
                {result.type}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-3 block">Extraction Successful</span>
                <h3 className="text-4xl font-black text-slate-900 mb-4 leading-none">Your Content is Ready.</h3>
                <p className="text-slate-700/70 leading-relaxed font-semibold text-lg">The {result.type} was captured in its original high-definition format.</p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-[0.98] uppercase tracking-widest">
                  <i className="fa-solid fa-cloud-arrow-down text-xl"></i>
                  Download Now
                </button>
                <button className="w-full bg-white/30 border border-white/80 text-blue-900 py-4 rounded-2xl font-black hover:bg-white/50 transition-all active:scale-[0.98] uppercase tracking-widest text-sm">
                  Save HQ Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadForm;
