/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="brand-footer" 
      className="w-full bg-black border-t border-zinc-900 py-16 px-6 md:px-12 relative z-30 select-none text-zinc-500 font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Main Grid: Info columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 border-b border-zinc-900 pb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-start text-left space-y-4">
            <div className="flex flex-col">
              <span className="font-cormorant text-2xl font-light tracking-[0.35em] text-white uppercase leading-none">
                OBSIDIAN
              </span>
              <span className="font-montserrat text-[7px] font-bold tracking-[0.45em] text-zinc-400 mt-1 uppercase leading-none">
                CRAFT COFFEE
              </span>
            </div>
            <p className="font-inter text-xs text-zinc-500 font-light max-w-sm leading-relaxed mt-2">
              For us, roasting is not merely a business; it is a meticulous study of extraction, heat, and source. Every bean is a reflection of local volcanic terroir.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="flex flex-col items-start text-left space-y-3.5">
            <h4 className="font-montserrat text-[9px] font-bold tracking-[0.25em] text-white uppercase">
              THE CONCIERGE
            </h4>
            <div className="flex flex-col space-y-1.5 font-inter text-xs font-light text-zinc-400">
              <p>Email: <a href="mailto:concierge@obsidiancoffee.com" className="hover:text-gold transition-colors">concierge@obsidiancoffee.com</a></p>
              <p>Phone: <span className="text-zinc-300">+1 (503) 555-0198</span></p>
              <p>HQ Roastery: <span className="text-zinc-350">1221 Volcanic Heights, Portland, OR</span></p>
            </div>
          </div>

          {/* Column 3: Hours & Updates */}
          <div className="flex flex-col items-start text-left space-y-3.5">
            <h4 className="font-montserrat text-[9px] font-bold tracking-[0.25em] text-white uppercase">
              RESERVE HOURS
            </h4>
            <div className="flex flex-col space-y-1.5 font-inter text-xs font-light text-zinc-450">
              <p>Monday — Friday: <span className="text-zinc-300">07:00 – 17:00</span></p>
              <p>Saturday — Sunday: <span className="text-zinc-300">08:00 – 16:00</span></p>
              <p className="text-[10px] text-zinc-650 tracking-wider">ROASTED & PACKAGED IN THE PACIFIC NORTHWEST</p>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright / legal tags */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <p className="font-montserrat text-[8px] tracking-[0.2em] uppercase text-zinc-600">
            © {currentYear} OBSIDIAN INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[8px] font-montserrat tracking-[0.2em] uppercase text-zinc-650">
            <a href="#privacy" className="hover:text-gold transition-colors">PRIVACY POLICY</a>
            <a href="#terms" className="hover:text-gold transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>

      </div>

      {/* Brushed gold subtle glow/gradient lines at the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center w-full select-none pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
        <div className="w-2/3 h-6 bg-gradient-to-t from-gold/10 to-transparent blur-md" />
      </div>
    </footer>
  );
}
