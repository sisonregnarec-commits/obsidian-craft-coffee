/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface TrustBarProps {
  onInteract: (title: string) => void;
}

export default function TrustBar({ onInteract }: TrustBarProps) {
  // Sophisticated vertical divider matching the technical style of the design and gold theme
  const TechnicalDivider = () => (
    <div className="hidden lg:block w-[1px] h-10 bg-gold/15 mx-8 shrink-0 pointer-events-none" />
  );

  const items = [
    {
      id: "ethically-sourced",
      title: "ETHICALLY SOURCED",
      description: "Direct trade & fair pay"
    },
    {
      id: "small-batch",
      title: "SMALL BATCH ROASTED",
      description: "Precision thermal profiles"
    },
    {
      id: "free-shipping",
      title: "FREE SHIPPING",
      description: "Complimentary on $45+"
    },
    {
      id: "satisfaction-guarantee",
      title: "SATISFACTION GUARANTEED",
      description: "30-day freshness window"
    }
  ];

  return (
    <section 
      id="trust-panel"
      className="w-full bg-black border-t border-zinc-900 py-10 px-6 md:px-12 relative z-30 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-10 lg:space-y-12">
        
        {/* Row 1: The 4 Interactive Trust Badges styled beautifully with typography & brushed gold */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.id}>
                <button
                  id={`trust-item-${item.id}`}
                  onClick={() => onInteract(item.title)}
                  className="group flex items-center space-x-2 text-left transition-all duration-300 hover:translate-y-[-1px] focus:outline-none cursor-pointer p-1"
                >
                  {/* Structured Labels inside with Gold theme interactive highlights */}
                  <div>
                    <h4 className="font-montserrat font-bold text-[10px] md:text-[11px] tracking-[0.25em] text-zinc-300 group-hover:text-gold transition-colors uppercase">
                      {item.title}
                    </h4>
                    <p className="font-inter text-[10px] text-zinc-500 font-light mt-1">
                      {item.description}
                    </p>
                  </div>
                </button>

                {/* Show thin line separator inside row */}
                {!isLast && <TechnicalDivider />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Row 2: Majestic specs summary elements with Brushed Gold highlights */}
        <div className="border-t border-zinc-950 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 md:gap-14">
            
            {/* Intensity block updated to use custom gold indicator lights */}
            <div className="flex flex-col text-left">
              <span className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] mb-2.5 font-montserrat">
                Selected Intensity
              </span>
              <div className="flex space-x-1.5">
                <div className="w-8 h-1 bg-gold"></div>
                <div className="w-8 h-1 bg-gold"></div>
                <div className="w-8 h-1 bg-gold"></div>
                <div className="w-8 h-1 bg-gold"></div>
                <div className="w-8 h-1 bg-zinc-900"></div>
              </div>
            </div>

            {/* Elevation block */}
            <div className="flex flex-col text-left">
              <span className="text-[9px] text-zinc-650 uppercase tracking-[0.3em] mb-1 font-montserrat">
                Sourcing Elevation
              </span>
              <span className="text-xl font-cormorant font-light text-gold tracking-widest">
                2,450 MASL
              </span>
            </div>

            {/* Certification design profile block */}
            <div className="flex flex-col text-left">
              <span className="text-[9px] text-zinc-650 uppercase tracking-[0.3em] mb-1 font-montserrat">
                Premium Sourcing
              </span>
              <span className="text-xl font-cormorant font-light text-gold tracking-widest">
                Direct Trade / Organic
              </span>
            </div>

          </div>

          {/* Scroll indicator bar with custom gold accent fade */}
          <div className="flex flex-col items-start md:items-end font-sans">
            <div className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] mb-3 font-montserrat">
              Scroll to explore blends
            </div>
            <div className="w-[1px] h-10 bg-gradient-to-b from-gold/50 to-transparent"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
