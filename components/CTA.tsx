'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-orange-500 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[15vw] leading-[0.8] font-bold text-black mb-8 tracking-tighter uppercase">
            BUILD <br />
            THE <br />
            FUTURE
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button className="group bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 duration-300 flex items-center gap-3">
              START NOW
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}