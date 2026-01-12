'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.trim().length < 10) {
      setError('Check your inputs, something is funky (the bad way).');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message })
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await res.json();
        setError(data?.error || 'Server error, maybe too much funk?');
        setStatus('error');
      }
    } catch (err) {
      setError('Network is down. Bummer.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-brutal-white py-24 px-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="brutal-card bg-white p-6 md:p-12 rotate-1">
          <div className="funky-label bg-neon-orange mb-4">Get in Touch</div>
          <h3 className="brutal-heading text-3xl md:text-5xl mb-8 leading-none">LET'S START THE <br /> RUCKUS.</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase text-xs md:text-sm">Your Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-4 border-black p-3 md:p-4 font-bold focus:bg-zap-green focus:outline-none transition-colors text-lg"
                  placeholder="Who are you?"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase text-xs md:text-sm">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="border-4 border-black p-3 md:p-4 font-bold focus:bg-cyber-blue focus:outline-none transition-colors text-lg"
                  placeholder="How can we ping you?"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase text-xs md:text-sm">Company (Optional)</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border-4 border-black p-3 md:p-4 font-bold focus:bg-hot-pink focus:text-white focus:outline-none transition-colors text-lg"
                placeholder="Where do you work?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase text-xs md:text-sm">Messsage</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="border-4 border-black p-3 md:p-4 font-bold focus:bg-zap-green focus:outline-none transition-colors text-lg"
                placeholder="Tell us something wild..."
                required
              />
            </div>

            {error && <div className="bg-red-500 text-white p-4 border-4 border-black font-bold uppercase text-sm">{error}</div>}
            {status === 'success' && <div className="bg-zap-green p-4 border-4 border-black font-bold uppercase text-sm">Got it! We'll be in touch.</div>}

            <button
              type="submit"
              className="brutal-btn w-full text-xl md:text-2xl"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send it!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


