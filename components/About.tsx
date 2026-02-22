'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const benefits = [
  "Context-aware memory retention",
  "Multi-modal input processing",
  "Self-correcting code generation",
  "Real-time market analysis"
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-orange-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative order-2 lg:order-1"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-50" />
              
              {/* Abstract UI Elements */}
              <div className="absolute top-4 left-4 right-4 bottom-4 md:top-8 md:left-8 md:right-8 md:bottom-8 border border-white/10 rounded-xl p-4 md:p-6 flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
                </div>
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                <div className="h-24 md:h-32 w-full bg-black/40 rounded-lg mt-2 md:mt-4 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.5)] animate-scan" />
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <div className="h-6 md:h-8 w-20 md:w-24 bg-orange-500/20 rounded-md border border-orange-500/30" />
                  <div className="h-6 md:h-8 w-6 md:w-8 rounded-full border border-white/10" />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-black border border-orange-500/30 p-3 md:p-4 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-sm md:text-base">
                  99%
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">Accuracy</div>
                  <div className="text-xs md:text-sm font-medium text-white">Verified Performance</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Beyond simple automation. <br />
              <span className="text-orange-500">True cognition.</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-6 md:mb-8 leading-relaxed">
              NexBot isn&apos;t just a chatbot. It&apos;s a sophisticated neural network designed to understand context, intent, and nuance. It learns from every interaction, becoming more aligned with your specific needs over time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-white/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="text-orange-500 hover:text-orange-400 font-medium text-sm tracking-wide uppercase border-b border-orange-500/30 hover:border-orange-500 transition-colors pb-1">
              Learn about our technology
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}