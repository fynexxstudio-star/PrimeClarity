import React from 'react';

export default function CTA() {
  return (
    <section id="cta-section" className="bg-white border-y-5 border-black py-20 px-4 md:py-32">
      <div className="container mx-auto px-4">
        <div className="brutal-card bg-zap-green p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-hot-pink border-l-4 border-b-4 border-black -rotate-12 translate-x-8 -translate-y-8" />

          <div className="relative z-10">
            <h3 className="brutal-heading text-4xl md:text-7xl mb-8">READY TO CATCH <br /> THE VIBE?</h3>
            <p className="text-xl md:text-3xl font-bold mb-12 max-w-2xl mx-auto">
              Don't settle for "okay". Let's build something that people actually remember.
            </p>
            <a href="#contact" className="brutal-btn-pink text-2xl md:text-3xl px-8 md:px-12 py-5 md:py-6">
              LET'S GOOO!
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

