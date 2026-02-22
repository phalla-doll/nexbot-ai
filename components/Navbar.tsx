'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/5"
      >
        <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-white z-50">
          NEXBOT
        </Link>

        {/* Desktop Menu */}
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

        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-orange-500 hover:text-white transition-all duration-300">
            Get Access
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-bold">
              <Link href="#features" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-orange-500 transition-colors">
                Features
              </Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-orange-500 transition-colors">
                Pricing
              </Link>
            </div>
            
            <button className="w-full bg-white text-black py-4 rounded-full font-medium text-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Get Access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}