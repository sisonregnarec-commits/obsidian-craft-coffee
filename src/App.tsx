/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import CoffeeSelectionDrawer from "./components/CoffeeSelectionDrawer";
import CoffeeMenu from "./components/CoffeeMenu";
import Footer from "./components/Footer";

interface ToastMessage {
  id: number;
  text: string;
}

export default function App() {
  const [isStoreOpen, setIsStoreOpen] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(0);
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const handleOpenStore = () => {
    setIsStoreOpen(true);
  };

  const handleCloseStore = () => {
    setIsStoreOpen(false);
  };

  const handleAddToCart = (coffeeName: string) => {
    setCartCount((prev) => prev + 1);
    
    // Add custom toast message
    const newId = Date.now();
    const newToast: ToastMessage = {
      id: newId,
      text: `Added "${coffeeName}" directly to your fresh roast queue!`
    };
    setToasts((prev) => [...prev, newToast]);

    // Clear toast after 4s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newId));
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-black text-[#FAF6F0] selection:bg-gold selection:text-black flex flex-col justify-between overflow-x-hidden relative">
      
      {/* Structural Top Header Navigation Overlayed Absolutely */}
      <Header onOpenMenu={handleOpenStore} cartCount={cartCount} />

      {/* Main Content Area - Housing the looping premium video background overlay & hero visuals */}
      <main className="w-full relative bg-black overflow-hidden min-h-screen flex items-center justify-center">
        
        {/* Beautiful high-fidelity looping background video without zoom scaling */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            className="w-full h-full object-cover opacity-65 select-none pointer-events-none"
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Transparent dark gradient transitioning elegantly to absolute black at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
        </div>

        {/* Ambient grain/radial overlay to deepen rich color grading */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/45 to-black/90 pointer-events-none z-10" />

        {/* Hero Content Layer */}
        <HeroContent onOpenStore={handleOpenStore} />

      </main>

      {/* Premium Coffee Flight Menu Showcase Section (Plain Black) */}
      <CoffeeMenu onAddToCart={handleAddToCart} onOpenStore={handleOpenStore} />

      {/* Clean Minimalist Brand Footer with Contact Details & Hours */}
      <Footer />

      {/* Interactive side slide-out blend selection catalog drawer */}
      <CoffeeSelectionDrawer
        isOpen={isStoreOpen}
        onClose={handleCloseStore}
        onAddToCart={handleAddToCart}
      />

      {/* Modern float notifications system - beautifully styled with Gold highlight border */}
      <div className="fixed bottom-10 right-6 z-50 flex flex-col space-y-2.5 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="bg-zinc-950 border border-zinc-900 border-l-2 border-l-gold shadow-2xl p-4 rounded-none flex items-start space-x-3 pointer-events-auto"
            >
              <div className="flex-1">
                <p className="font-montserrat font-bold text-[10px] tracking-widest text-[#C5A059] uppercase">
                  NOTIFICATION
                </p>
                <p className="font-inter text-xs text-zinc-400 mt-1 leading-normal font-light">
                  {toast.text}
                </p>
              </div>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                className="text-zinc-600 hover:text-white p-0.5 cursor-pointer mt-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
