
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Reels Downloader', href: '#reels' },
    { name: 'Story Downloader', href: '#story' },
    { name: 'Private Downloader', href: '#private' },
    { name: 'Privacy', href: '#privacy' },
  ];

  // American Date Format: Month DD, YYYY
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <nav className="glass-nav text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-indigo-500/80 backdrop-blur-sm p-1.5 rounded-lg shadow-inner">
                <i className="fa-solid fa-cloud-arrow-down text-xl"></i>
              </div>
              <span className="font-bold text-xl tracking-tight text-white/95">SnapStream</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all active:scale-95"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Today's Date in US Format - BOLD LETTERING */}
            <div className="pl-6 border-l border-white/20 hidden lg:block">
              <span className="text-sm font-black uppercase tracking-tighter text-blue-200 drop-shadow-sm">
                {today}
              </span>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <span className="text-[11px] font-black text-blue-200 uppercase tracking-tighter drop-shadow-sm">
              {today}
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
