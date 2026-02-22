'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "NexBot has completely transformed how our development team operates. The code generation is scary good.",
    author: "Sarah Jenkins",
    role: "CTO at TechFlow",
    rating: 5
  },
  {
    quote: "I was skeptical about another AI tool, but the context retention here is unlike anything else on the market.",
    author: "Marcus Chen",
    role: "Product Lead",
    rating: 5
  },
  {
    quote: "The integration capabilities saved us months of custom engineering work. It just works.",
    author: "Elena Rodriguez",
    role: "Senior Architect",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-colors group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">&quot;{item.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                <div>
                  <div className="font-medium text-white group-hover:text-orange-500 transition-colors">{item.author}</div>
                  <div className="text-xs text-white/40">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}