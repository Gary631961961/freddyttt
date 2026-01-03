
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/10 backdrop-blur-md mt-20 py-16 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-slate-900 p-2 rounded-xl shadow-lg">
                <i className="fa-solid fa-cloud-arrow-down text-white"></i>
              </div>
              <span className="font-black text-2xl text-slate-900 tracking-tight">SnapStream</span>
            </div>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed font-medium">
              The world's premium tool for high-quality social media archiving. 
              Built for speed, privacy, and ease of use.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-indigo-500 hover:text-white transition-all"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-indigo-500 hover:text-white transition-all"><i className="fa-brands fa-facebook-f text-sm"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-indigo-500 hover:text-white transition-all"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.2em]">Quick Tools</h4>
            <ul className="space-y-4 text-slate-600 font-semibold">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Reels Pro</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Video Saver</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Story Archive</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Profile HQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-slate-600 font-semibold">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQ Hub</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Legal Terms</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Direct Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-[11px] text-slate-500/80 max-w-2xl uppercase tracking-wider font-bold leading-relaxed">
            SnapStream is an independent utility and is not affiliated with Instagram, Meta, or any social networks.
          </div>
          <p className="text-xs text-slate-600 font-bold whitespace-nowrap">
            &copy; 2024 SNAPSTREAM MEDIA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
