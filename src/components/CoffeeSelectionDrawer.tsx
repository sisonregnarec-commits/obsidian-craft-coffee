/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, Star } from "lucide-react";
import { motion } from "motion/react";
import { COFFEE_BLENDS } from "../data/coffee";
import { CoffeeBlend } from "../types";

interface CoffeeSelectionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (coffeeName: string) => void;
}

export default function CoffeeSelectionDrawer({ isOpen, onClose, onAddToCart }: CoffeeSelectionDrawerProps) {
  const [selectedBlend, setSelectedBlend] = React.useState<CoffeeBlend>(COFFEE_BLENDS[3]); // Default: Obsidian Flight
  const [quantity, setQuantity] = React.useState(1);
  const [isAdding, setIsAdding] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleAddClick = () => {
    setIsAdding(true);
    setTimeout(() => {
      onAddToCart(selectedBlend.name);
      setIsAdding(false);
    }, 830);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Background Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 bg-black/85 cursor-pointer"
        onClick={onClose}
      />

      {/* Drawer content sheet */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="relative w-full max-w-lg md:max-w-xl h-full bg-zinc-950 border-l border-gold/10 flex flex-col overflow-hidden text-white"
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-900 flex items-center justify-between bg-black">
          <div>
            <h3 className="font-cormorant text-2xl font-light text-white tracking-wide">
              The Blend Library
            </h3>
            <p className="font-inter text-[11px] text-zinc-400 mt-0.5 tracking-wider uppercase">
              Curated Harvests & Custom Roasts
            </p>
          </div>
          <button
            id="close-drawer"
            onClick={onClose}
            className="w-10 h-10 rounded-none border border-gold/20 hover:border-gold bg-black hover:bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-gold transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body split into list & details */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-black">
          {/* Quick Blend Tabs Selector with gold accents */}
          <div>
            <span className="block font-montserrat text-[10px] font-bold tracking-widest text-zinc-500 mb-3 uppercase">
              1. Choose a Blend
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {COFFEE_BLENDS.map((blend) => {
                const isSelected = selectedBlend.id === blend.id;
                return (
                  <button
                    key={blend.id}
                    id={`blend-select-${blend.id}`}
                    onClick={() => {
                      setSelectedBlend(blend);
                      setQuantity(1);
                    }}
                    className={`p-4 rounded-none text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between h-24 ${
                      isSelected
                        ? "bg-zinc-900/40 border-gold shadow-[0_0_15px_rgba(197,160,89,0.02)]"
                        : "bg-zinc-950/40 border-zinc-900 hover:border-gold/30"
                    }`}
                  >
                    <div>
                      <p className={`font-montserrat text-[9px] uppercase tracking-widest ${
                        isSelected ? "text-gold font-bold" : "text-zinc-500"
                      }`}>
                        {blend.roast} Roast
                      </p>
                      <h4 className="font-cormorant text-base md:text-lg font-medium text-white mt-1 leading-tight">
                        {blend.name}
                      </h4>
                    </div>
                    <span className="font-inter text-xs text-zinc-400">{blend.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Blend Card with gold typography elements */}
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-none p-6 space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-inter text-xs text-gold/80">{selectedBlend.origin}</p>
                <h4 className="font-cormorant text-2xl font-light text-white mt-1">
                  {selectedBlend.name}
                </h4>
              </div>
              <div className="flex items-center space-x-1.5 bg-black text-gold border border-gold/30 px-2.5 py-1 text-xs font-mono">
                <Star className="w-3 h-3 fill-current text-gold" />
                <span>{selectedBlend.rating}</span>
              </div>
            </div>

            <p className="font-inter text-sm text-zinc-400 leading-relaxed font-light">
              {selectedBlend.description}
            </p>

            {/* Tasting Notes */}
            <div>
              <span className="block font-montserrat text-[9px] font-bold tracking-wider text-zinc-500 mb-2.5 uppercase">
                Tasting Descriptors
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedBlend.notes.map((note) => (
                  <span
                    key={note}
                    className="font-inter text-xs bg-zinc-950 text-zinc-350 border border-gold/15 px-3 py-1.5 rounded-none"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile badge details using gold-tinted metrics */}
            <div className="grid grid-cols-2 gap-4 border-t border-zinc-900 pt-4">
              <div>
                <span className="block font-montserrat text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
                  PROCESS style
                </span>
                <span className="font-inter text-xs font-light text-gold mt-1 block">
                  {selectedBlend.roast === "Light" ? "Washed Heirloom" : selectedBlend.roast === "Dark" ? "Wet Hulled" : "Natural Honey"}
                </span>
              </div>
              <div>
                <span className="block font-montserrat text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
                  Elevation profile
                </span>
                <span className="font-inter text-xs font-light text-gold mt-1 block">
                  {selectedBlend.roast === "Light" ? "1,950m - 2,100m" : "1,400m - 1,750m"}
                </span>
              </div>
            </div>
          </div>

          {/* Action Order Controls - Sized down as requested + pure-text gold buttons */}
          <div className="space-y-4">
            <span className="block font-montserrat text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              2. select quantity & add
            </span>
            <div className="flex space-x-4 items-center">
              {/* Quantity Counter */}
              <div className="flex items-center bg-zinc-950 border border-zinc-900 rounded-none overflow-hidden h-11">
                <button
                  id="dec-qty"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-zinc-400 hover:text-gold transition-all text-xl cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 font-mono font-medium text-sm w-8 text-center text-white">
                  {quantity}
                </span>
                <button
                  id="inc-qty"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-zinc-400 hover:text-gold transition-all text-xl cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add Button styled with custom Brushed Gold theme - size reduced & icon elements removed */}
              <button
                id="add-to-cart-btn"
                onClick={handleAddClick}
                disabled={isAdding}
                className="flex-1 bg-gold hover:bg-gold-hover text-black font-montserrat font-bold text-xs uppercase tracking-widest h-11 rounded-none flex items-center justify-center transition-all text-center cursor-pointer disabled:opacity-85"
              >
                {isAdding ? "ADDING TO QUEUE..." : `ADD ${quantity} TO CART`}
              </button>
            </div>
          </div>
        </div>

        {/* Footer info text badge without the shield icon */}
        <div className="p-6 bg-black border-t border-zinc-900 flex items-center text-zinc-500">
          <p className="font-inter text-[11px] leading-relaxed font-light">
            All beans are ethically traded and roasted on demand in vintage Giesen machines. We guarantee total freshness.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
