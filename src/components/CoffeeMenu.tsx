/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Coffee, ShoppingBag, Star } from "lucide-react";
import { COFFEE_BLENDS } from "../data/coffee";
import { CoffeeBlend } from "../types";

interface CoffeeMenuProps {
  onAddToCart: (coffeeName: string) => void;
  onOpenStore: () => void;
}

export default function CoffeeMenu({ onAddToCart, onOpenStore }: CoffeeMenuProps) {
  return (
    <section 
      id="coffee-catalogue" 
      className="w-full bg-black py-24 px-6 md:px-12 relative z-30 select-none border-t border-zinc-900 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.12] blur-[150px] pointer-events-none z-0" />

      <div className="absolute top-0 left-0 right-0 w-full h-[150px] bg-gradient-to-b from-gold/[0.04] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 w-full h-[150px] bg-gradient-to-t from-gold/[0.04] to-transparent pointer-events-none z-0" />

      <div className="absolute top-0 left-0 right-0 flex flex-col items-center w-full select-none pointer-events-none z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center w-full select-none pointer-events-none z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 md:gap-0">
          <div className="text-left">
            <span className="font-montserrat text-[10px] font-bold tracking-[0.5em] text-gold uppercase block mb-3">
              EXPLORE OUR SIGNATURE ROASTS
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white tracking-wide leading-tight">
              The Obsidian Flight
            </h2>
            <p className="font-inter text-xs text-zinc-500 font-light mt-2 max-w-md">
              A curated selection of micro-lot harvests, roasted with custom thermal profiles at our state-of-the-art facility.
            </p>
          </div>
          <button
            id="view-all-blends-btn"
            onClick={onOpenStore}
            className="self-start md:self-end font-montserrat text-[9px] font-bold tracking-[0.25em] text-gold hover:text-white transition-colors duration-300 uppercase pb-1 border-b border-gold/30 hover:border-white cursor-pointer"
          >
            VIEW DETAILS LIBRARY
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {COFFEE_BLENDS.map((blend: CoffeeBlend, idx: number) => {
            return (
              <div 
                key={blend.id}
                id={`menu-item-${blend.id}`}
                className="group flex flex-col justify-between p-6 sm:p-8 bg-zinc-950/45 border border-zinc-900/60 hover:border-gold/30 transition-all duration-300 relative rounded-none hover:translate-y-[-2px] overflow-hidden"
              >
                {blend.bgImage && (
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.77] group-hover:opacity-90 transition-all duration-700 pointer-events-none group-hover:scale-105"
                    style={{ backgroundImage: `url(${blend.bgImage})` }}
                  />
                )}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/85 to-black/50 pointer-events-none" />

                <div className="absolute top-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500 z-10" />
                
                <div className="relative z-10 flex-grow">
                 
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-montserrat text-[8px] font-bold tracking-[0.3em] text-zinc-400 group-hover:text-gold transition-colors uppercase">
                      {blend.roast} Roast / {blend.origin.split(" ")[0]}
                    </span>
                    <span className="font-mono text-sm text-gold tracking-wider font-semibold">{blend.price}</span>
                  </div>

                  {/* Title & description */}
                  <h3 className="font-cormorant text-2xl font-light text-white mb-2 tracking-wide group-hover:text-gold transition-colors duration-300 leading-snug">
                    {blend.name}
                  </h3>
                  <p className="font-inter text-xs text-zinc-350 font-light leading-relaxed mb-6 max-w-lg">
                    {blend.description}
                  </p>

                  {/* Descriptors */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {blend.notes.map((note) => (
                      <span 
                        key={note}
                        className="font-inter text-[10px] text-zinc-450 font-light bg-black/85 px-2.5 py-1 border border-zinc-900/60"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action buttons */}
                <div className="border-t border-zinc-900/60 pt-5 flex items-center justify-between relative z-10">
                  {/* Sourcing altitude estimate */}
                  <div className="flex flex-col text-left">
                    <span className="font-montserrat text-[8px] font-bold text-zinc-500 tracking-widest uppercase">
                      ALTITUDE profile
                    </span>
                    <span className="font-inter text-[10px] text-zinc-400 mt-0.5">
                      {blend.roast === "Light" ? "1,950m - 2,100m" : "1,400m - 1,750m"}
                    </span>
                  </div>

                  {/* Immediate Add to Cart trigger */}
                  <button
                    id={`menu-add-to-cart-${blend.id}`}
                    onClick={() => onAddToCart(blend.name)}
                    className="font-montserrat text-[9px] font-bold tracking-[0.2em] text-black bg-gold hover:bg-white px-5 py-2.5 uppercase transition-all duration-300 cursor-pointer flex items-center space-x-1.5 rounded-none"
                  >
                    <span>ADD TO BAG</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
