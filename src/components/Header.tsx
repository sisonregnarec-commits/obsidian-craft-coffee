/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenMenu: () => void;
  cartCount: number;
}

export default function Header({ onOpenMenu, cartCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-40 bg-transparent border-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div 
          className="flex flex-col items-start cursor-pointer select-none"
          onClick={onOpenMenu}
        >
          <span 
            id="brand-logo"
            className="font-cormorant text-2xl font-light tracking-[0.35em] text-white hover:text-gold transition-colors duration-300 uppercase leading-none"
          >
            OBSIDIAN
          </span>
          <span className="font-montserrat text-[7px] font-bold tracking-[0.45em] text-zinc-400 mt-1 uppercase leading-none">
            CRAFT COFFEE
          </span>
        </div>

        {/* Desktop Navigation Links - Montserrat uppercase spacing, speed-optimized compact spacing */}
        <nav className="hidden md:flex items-center space-x-6">
          {["OUR BEANS", "THE ROASTERY", "SUBSCRIPTION", "JOURNAL"].map((link) => (
            <button
              key={link}
              id={`nav-link-${link.toLowerCase().replace(" ", "-")}`}
              onClick={onOpenMenu}
              className="font-montserrat text-[9px] font-semibold tracking-[0.25em] text-zinc-400 hover:text-gold transition-colors duration-300 uppercase cursor-pointer"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Action Button - Cart shifted slightly to the right, fully borderless and transparent */}
        <div className="flex items-center space-x-6 translate-x-5 md:translate-x-6">
          <button
            id="cart-button"
            onClick={onOpenMenu}
            className="flex items-center space-x-2 font-montserrat text-[9px] font-bold tracking-[0.2em] text-zinc-350 hover:text-white bg-transparent border-gold/30 border px-4 py-2 transition-all duration-300 cursor-pointer uppercase"
          >
            <span>CART ({cartCount})</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-gold transition-colors p-1 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-5">
              {["OUR BEANS", "THE ROASTERY", "SUBSCRIPTION", "JOURNAL"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMenu();
                  }}
                  className="font-montserrat text-[11px] font-bold tracking-[0.2em] text-left text-zinc-400 hover:text-gold py-2.5 transition-colors border-b border-zinc-900/60"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
