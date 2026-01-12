import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start md:justify-center bg-brutal-white pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-20 -left-10 w-40 h-40 bg-zap-green border-4 border-black rotate-12 -z-10 animate-float" />
      <div className="absolute bottom-20 -right-10 w-60 h-60 bg-hot-pink border-4 border-black -rotate-12 -z-10 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center mt-10 md:mt-0">
        <div className="bg-black text-white px-2 py-0.5 font-bold text-[8px] md:text-sm uppercase inline-block -rotate-2 mb-6">
          Creative Powerhouse
        </div>

        <h1 className="brutal-heading text-2xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.8] tracking-tight">
          WE MAKE <br />
          <span className="text-electric-purple bg-zap-green px-4 -rotate-1 inline-block border-4 border-black shadow-brutal hover:rotate-1 transition-transform my-2">FUNKY</span> <br />
          SH*T.
        </h1>


        <div className="max-w-2xl bg-cyber-blue border-4 border-black p-6 md:p-8 rotate-1 shadow-brutal-hover mb-12">
          <p className="text-xl md:text-3xl font-black leading-tight">
            Forget the boring professional stuff. We build websites that punch people in the face with pure energy and unique vibes.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          <a href="#contact" className="brutal-btn text-xl md:text-3xl px-8 md:px-12">Let's Jam</a>
          <a href="#services" className="brutal-btn-pink text-xl md:text-3xl px-8 md:px-12">Our Skills</a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black py-4 border-t-4 border-black">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white font-display text-4xl uppercase tracking-widest">
              FUNKY • UNIQUE • BOLD • REBEL • PRIME • CLARITY •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}



