import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-cyber-blue relative overflow-hidden py-24 px-4">
      <div className="absolute top-10 left-10 w-32 h-32 bg-hot-pink border-4 border-black rotate-45 -z-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="brutal-card bg-white p-4 rotate-3">
              <div className="bg-black aspect-square flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform">
                <span className="text-7xl md:text-9xl">🕺</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 brutal-card bg-zap-green px-6 md:px-8 py-3 md:py-4 -rotate-6">
              <span className="brutal-heading text-2xl md:text-4xl">EST. 2024</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="funky-label">Who We Are</div>
            <h2 className="brutal-heading text-5xl md:text-8xl mb-8 leading-none">THE REBELS OF <br /> DESIGN.</h2>
            <p className="text-xl md:text-2xl font-bold mb-10 leading-tight">
              We’re the rule-breakers, the trend-makers, and the fun creators.
              Our mission? Make your brand unforgettable with wild ideas and bold moves.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="border-4 border-black shadow-brutal bg-hot-pink text-black px-4 py-2 font-bold rotate-1 text-sm md:text-base">100% FUNKY</span>
              <span className="border-4 border-black shadow-brutal bg-zap-green text-black px-4 py-2 font-bold -rotate-2 text-sm md:text-base">PURE ENERGY</span>
              <span className="border-4 border-black shadow-brutal bg-white text-black px-4 py-2 font-bold rotate-3 text-sm md:text-base">ZERO BORING</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

