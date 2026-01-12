import React from 'react';

const funkyTestimonials = [
  {
    avatar: '🦸‍♂️',
    name: 'DJ Spark',
    quote: 'These folks turned my brand from zero to hero. Funky, fast, and full of surprises!',
    color: 'bg-zap-green'
  },
  {
    avatar: '👩‍🎤',
    name: 'Pixel Queen',
    quote: 'I wanted wild, I got wild. My site is now the talk of the town!',
    color: 'bg-hot-pink'
  },
  {
    avatar: '🧑‍🚀',
    name: 'Rocket Ron',
    quote: 'Launch day was a party. The energy, the style—unmatched!',
    color: 'bg-cyber-blue'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-electric-purple relative py-20 md:py-32 overflow-hidden px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green opacity-20 -z-10" />

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-16 md:mb-24">
          <div className="funky-label bg-white text-black">Love from Fans</div>
          <h2 className="brutal-heading text-5xl md:text-8xl text-white">WHAT THEY <br /> SAYIN'.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {funkyTestimonials.map((t, i) => {
            const cardColor = i === 0 ? 'bg-zap-green' : i === 1 ? 'bg-hot-pink' : 'bg-cyber-blue';
            return (
              <div key={i} className={`brutal-card p-8 md:p-10 ${cardColor} rotate-${i % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-transform`}>
                <div className="text-6xl md:text-7xl mb-6">{t.avatar}</div>
                <blockquote className="text-xl md:text-2xl font-black mb-8 leading-tight text-black">
                  “{t.quote}”
                </blockquote>
                <div className="border-4 border-black shadow-brutal bg-black text-white px-4 py-2 inline-block font-display text-xl uppercase">
                  {t.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
}

