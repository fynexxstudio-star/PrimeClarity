import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <ContactForm />
    </>
  );
}

