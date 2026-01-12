import React from 'react';

const funkyServices = [
  {
    icon: '🦄',
    title: 'Unicorn Branding',
    desc: 'We craft magical, one-of-a-kind brands that stand out in any crowd. No boring allowed.',
    color: 'bg-zap-green'
  },
  {
    icon: '💥',
    title: 'Viral Campaigns',
    desc: 'Explosive ideas, wild visuals, and campaigns that get people talking (and sharing).',
    color: 'bg-hot-pink'
  },
  {
    icon: '🎨',
    title: 'Art Attack',
    desc: 'Custom illustrations, graffiti, and digital art that make your brand pop and sizzle.',
    color: 'bg-cyber-blue'
  },
  {
    icon: '🛹',
    title: 'Street Energy',
    desc: 'We bring the energy of the street—bold, raw, and real—into your digital world.',
    color: 'bg-neon-orange'
  },
  {
    icon: '🔊',
    title: 'Sound Identity',
    desc: 'Original beats, funky jingles, and audio branding that sticks in your head.',
    color: 'bg-electric-purple'
  },
  {
    icon: '🚦',
    title: 'Launch Control',
    desc: 'From zero to launch, we handle the chaos and make your debut unforgettable.',
    color: 'bg-zap-green'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white border-y-5 border-black relative overflow-hidden py-24 px-4">
      <div className="absolute top-0 right-0 w-64 h-64 bg-dot-purple -z-10 rotate-12 opacity-50" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="funky-label">Capabilities</div>
            <h2 className="brutal-heading text-5xl md:text-8xl">WE DO <br /> COOL $HIT.</h2>
          </div>
          <p className="max-w-xs text-xl font-bold border-l-4 border-black pl-4 mb-4">
            We don't specialize in everything. We specialize in making people stare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {funkyServices.map((service, i) => {
            // Hardcode background classes to prevent purging
            const cardColor =
              i % 5 === 0 ? 'bg-zap-green' :
                i % 5 === 1 ? 'bg-hot-pink' :
                  i % 5 === 2 ? 'bg-cyber-blue' :
                    i % 5 === 3 ? 'bg-neon-orange' : 'bg-electric-purple';

            return (
              <div
                key={i}
                className={`border-4 border-black shadow-brutal p-6 md:p-8 ${cardColor} group relative transition-transform hover:-translate-y-2`}
              >
                <div className="text-5xl md:text-6xl mb-6 bg-black w-16 h-16 md:w-20 md:h-20 flex items-center justify-center -rotate-6 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="brutal-heading text-2xl md:text-3xl mb-4 text-black">{service.title}</h3>
                <p className="font-bold text-base md:text-lg mb-6 leading-tight text-black">
                  {service.desc}
                </p>
                <div className="absolute top-4 right-4 text-black/20 font-display text-4xl">
                  0{i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
}

