import React from 'react';

const funkySteps = [
  {
    icon: '🌈',
    title: 'Dream',
    desc: 'We start with wild ideas, no limits. Imagination first, rules later.',
    color: 'bg-zap-green'
  },
  {
    icon: '🧩',
    title: 'Mix',
    desc: 'We remix, mashup, and prototype until something amazing appears.',
    color: 'bg-hot-pink'
  },
  {
    icon: '⚡',
    title: 'Launch',
    desc: 'We go live with a bang—bold, loud, and unforgettable.',
    color: 'bg-cyber-blue'
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-brutal-white border-y-5 border-black relative py-24 px-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <div className="funky-label">Our Workflow</div>
          <h2 className="brutal-heading text-5xl md:text-8xl">HOW WE FUNK.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute top-[80px] left-0 w-full h-1 bg-black -z-10" />

          {funkySteps.map((step, i) => {
            const stepColor = i === 0 ? 'bg-zap-green' : i === 1 ? 'bg-hot-pink' : 'bg-cyber-blue';
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`brutal-card w-20 h-20 md:w-24 md:h-24 ${stepColor} flex items-center justify-center mb-8 rotate-12 hover:rotate-0 transition-transform`}>
                  <span className="text-4xl md:text-5xl font-black text-black">{i + 1}</span>
                </div>
                <div className="brutal-card bg-white p-6 md:p-8 rotate-[-2deg] hover:rotate-2 transition-transform w-full">
                  <div className="text-4xl md:text-5xl mb-4 text-black">{step.icon}</div>
                  <h3 className="brutal-heading text-2xl md:text-3xl mb-2 text-black">{step.title}</h3>
                  <p className="font-bold text-sm md:text-base text-black">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
}

