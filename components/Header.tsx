'use client';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Navbar Strip */}
      <div className="p-2 md:p-6 bg-brutal-white border-b-4 border-black md:border-none md:bg-transparent backdrop-blur-sm md:backdrop-none pointer-events-auto">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="brutal-card bg-zap-green px-2 py-1 md:px-4 md:py-2 hover:rotate-3 transition-transform inline-block">
              <span className="brutal-heading text-lg md:text-3xl text-black">PRIME.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4">
            <a href="#services" className="brutal-card bg-white px-4 py-2 font-bold hover:bg-zap-green transition-colors text-black border-4 border-black">SKILLS</a>
            <a href="#about" className="brutal-card bg-white px-4 py-2 font-bold hover:bg-cyber-blue transition-colors text-black border-4 border-black">VIBE</a>
            <a href="#testimonials" className="brutal-card bg-white px-4 py-2 font-bold hover:bg-hot-pink hover:text-white transition-colors text-black border-4 border-black">LOVE</a>
            <a href="#contact" className="brutal-card bg-white px-4 py-2 font-bold hover:bg-neon-orange hover:text-white transition-colors text-black border-4 border-black">TALK</a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-4 border-black shadow-brutal bg-zap-green p-2 active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#ffffff] z-[100] md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
          } pointer-events-auto flex flex-col items-center justify-center`}
      >
        {/* Re-add Toggle inside menu to close easily if needed or just use the buttons */}
        <div className="absolute top-2 right-2 p-2">
          <button
            onClick={() => setIsOpen(false)}
            className="border-4 border-black shadow-brutal bg-zap-green p-2 active:scale-95 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-xs">
          <a onClick={() => setIsOpen(false)} href="#services" className="border-4 border-black shadow-brutal bg-zap-green text-black px-8 py-4 font-black text-2xl hover:translate-x-1 hover:translate-y-1 transition-all w-full text-center">SKILLS</a>
          <a onClick={() => setIsOpen(false)} href="#about" className="border-4 border-black shadow-brutal bg-cyber-blue text-black px-8 py-4 font-black text-2xl hover:translate-x-1 hover:translate-y-1 transition-all w-full text-center">VIBE</a>
          <a onClick={() => setIsOpen(false)} href="#testimonials" className="border-4 border-black shadow-brutal bg-hot-pink text-white px-8 py-4 font-black text-2xl hover:translate-x-1 hover:translate-y-1 transition-all w-full text-center">LOVE</a>
          <a onClick={() => setIsOpen(false)} href="#contact" className="border-4 border-black shadow-brutal bg-black text-white px-8 py-4 font-black text-2xl hover:translate-x-1 hover:translate-y-1 transition-all w-full text-center">TALK</a>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-8 border-4 border-black shadow-brutal bg-brutal-white text-black px-12 py-3 font-black text-xl active:scale-95 transition-transform"
          >
            CLOSE MENU
          </button>
        </div>
      </div>
    </header>
  );
}
