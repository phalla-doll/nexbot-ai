'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]);
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);
  const paddingBlock = useTransform(scrollY, [0, 50], ["24px", "16px"]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          backgroundColor, 
          backdropFilter, 
          borderBottomColor: borderColor,
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          paddingTop: paddingBlock,
          paddingBottom: paddingBlock
        }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center"
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
          <button className="bg-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
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
            
            <button className="w-full bg-orange-500 text-black py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              Get Access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}