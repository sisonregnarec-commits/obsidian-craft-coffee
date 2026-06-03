/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface HeroContentProps {
  onOpenStore: () => void;
}

export default function HeroContent({ onOpenStore }: HeroContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 lg:py-32 flex flex-col items-start justify-center relative z-25 text-left w-full min-h-[70vh]">
      
      {/* Toast Badge style - Minimal, highlighted in elegant brushed gold */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-montserrat text-[10px] uppercase tracking-[0.6em] text-gold font-bold self-start"
      >
        Single Origin / Limited Reserve
      </motion.div>

      {/* Heading Statement in Cormorant Garamond - Exquisite, simplified and balanced sizing */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8 text-left"
      >
        Simplicity refined.<br />
        <span className="font-light text-gold italic">Extraction perfected.</span>
      </motion.h1>

      {/* Tagline Subheading in Inter */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-inter font-light text-zinc-400 text-xs sm:text-sm leading-relaxed mb-10 max-w-md text-left"
      >
        A dark symphony of cacao nibs and sun-dried cherries. Sourced exclusively from the high-altitude volcanic soils of Sidamo.
      </motion.p>

      {/* CTA Area Buttons - Sized down as requested & styled with premium minimalist look */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto"
      >
        {/* Main button: Sized down & styled elegantly */}
        <button
          id="cta-shop-coffee"
          onClick={onOpenStore}
          className="group bg-gold hover:bg-gold-hover text-black text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold font-montserrat px-7 py-3 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-none rounded-none"
        >
          <span>SHOP COFFEE</span>
        </button>

        {/* Secondary Button: Clean gold-tint border */}
        <button
          id="cta-explore-blends"
          onClick={onOpenStore}
          className="bg-transparent hover:bg-black/40 border border-gold/30 hover:border-gold text-gold hover:text-white text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold font-montserrat px-7 py-3 transition-all duration-300 cursor-pointer rounded-none"
        >
          EXPLORE BLENDS
        </button>
      </motion.div>

    </div>
  );
}
