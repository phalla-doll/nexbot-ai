'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-UYMSefKwUYx8I38ifwWN4bek/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-20 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-orange-500 uppercase border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm">
              Next Gen AI Agent
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.9]"
          >
            INTELLIGENCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              REDEFINED.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed"
          >
            Meet NexBot, your autonomous companion designed to navigate the digital world with human-like understanding and machine precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-orange-500 hover:text-white transition-all hover:scale-105 active:scale-95 duration-300">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}