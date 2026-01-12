import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="sm:col-span-2">
            <div className="brutal-card bg-zap-green px-4 py-2 rotate-[-2deg] inline-block mb-6">
              <span className="brutal-heading text-3xl md:text-4xl text-black">PRIME.</span>
            </div>
            <p className="text-xl md:text-2xl font-bold max-w-sm mb-8">
              Making chaos into clarity, one business at a time. No corporate BS, just real results.
            </p>
            <div className="flex gap-4">
              {['TW', 'IG', 'LI'].map((social) => (
                <div key={social} className="brutal-card bg-white text-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black hover:bg-hot-pink hover:text-white transition-colors cursor-pointer text-sm">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="brutal-heading text-xl md:text-2xl mb-6 text-cyber-blue">RESOURCES</h4>
            <nav className="flex flex-col gap-4 font-bold text-lg">
              <a href="#services" className="hover:text-zap-green transition-colors">SKILLS</a>
              <a href="#about" className="hover:text-zap-green transition-colors">VIBE</a>
              <a href="#process" className="hover:text-zap-green transition-colors">WORKFLOW</a>
            </nav>
          </div>

          <div>
            <h4 className="brutal-heading text-xl md:text-2xl mb-6 text-hot-pink">CONNECT</h4>
            <nav className="flex flex-col gap-4 font-bold text-lg">
              <a href="mailto:hello@primeclarity.com" className="hover:text-zap-green transition-colors">SAY HELLO</a>
              <a href="#contact" className="hover:text-zap-green transition-colors">START RUCKUS</a>
            </nav>
          </div>
        </div>

        <div className="border-t-4 border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="font-bold text-base md:text-lg">
            © {new Date().getFullYear()} PRIME CLARITY. KEEPING IT REAL.
          </div>
          <div className="flex gap-8 font-black uppercase tracking-tighter text-sm md:text-base">
            <a href="#" className="hover:line-through">Privacy</a>
            <a href="#" className="hover:line-through">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


