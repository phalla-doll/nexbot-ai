'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-white/5"
    >
      <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-white">
        NEXBOT
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        <Link href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
          Features
        </Link>
        <Link href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
          About
        </Link>
        <Link href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">
          Pricing
        </Link>
      </div>

      <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
        Get Access
      </button>
    </motion.nav>
  );
}