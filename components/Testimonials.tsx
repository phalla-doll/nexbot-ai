'use client';

import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "IT WRITES CODE BETTER THAN I DO.",
    author: "SARAH JENKINS",
    role: "CTO @ TECHFLOW"
  },
  {
    quote: "ABSOLUTELY INSANE VELOCITY.",
    author: "MARCUS CHEN",
    role: "LEAD @ VERTEX"
  },
  {
    quote: "THE FUTURE IS ALREADY HERE.",
    author: "ELENA R.",
    role: "ARCHITECT @ NEXUS"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black border-y border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest text-center">
          Verified <span className="text-orange-500">Intel</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="w-[600px] shrink-0 p-12 border border-white/20 bg-white/5 rounded-3xl backdrop-blur-sm hover:border-orange-500 transition-colors duration-500 group">
              <p className="font-display text-5xl font-bold text-white mb-8 leading-tight group-hover:text-orange-500 transition-colors">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                <div>
                  <div className="font-bold text-white tracking-widest">{item.author}</div>
                  <div className="text-sm text-white/50 tracking-widest">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}