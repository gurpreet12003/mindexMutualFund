

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Scroll from './scrollEffect';

export const CTASection = ({ onOpenModal }) => {
 

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="bg-white border-b border-gray-100">

      {/* ── CTA Card ─────────────────────────────────────────── */}
      {/* <Scroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="bg-black text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-gray-300">

            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white font-black text-xs uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>SEBI Registered Fiduciary Advisory</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
                Ready to Build Your Wealth Blueprint with{' '}
                <span className="text-red-500">Mindex Capital</span>?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                Join over 1.5 Lakh smart investors who rely on our mutual fund portfolio planning
                services for stress-free wealth accumulation and active advisory.
              </p>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 pt-1 pb-2 text-sm font-semibold text-gray-200">
                {['Zero Hidden Commissions', '5-Minute Digital Setup', 'Active Rebalancing'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-1">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-red-900/50 hover:shadow-xl cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </button>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all border border-white/20 hover:border-white/40 cursor-pointer"
                >
                  <span>Request Callback</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Scroll> */}

    
      <Scroll>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">

          {/* Card shell */}
          <div
            className="relative rounded-2xl border border-red-600 sm:rounded-3xl overflow-hidden shadow shadow-red-500"
            
          >

            {/* ── MOBILE: natural size, zero cropping ── */}
            <div className="block md:hidden w-full bg-black">
              <img
                src="/parllexImg.jpeg"
                alt="Mindex Nivesh App"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>

            {/* ── DESKTOP: parallax ── */}
            <div
             
              className="hidden md:block relative w-full overflow-hidden bg-black"
              style={{ paddingTop: '56%' }}   /* exact 3:2 = 1024/1536 × 100 */
            >
              {/* Subtle dark vignette */}
              <div className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.18) 100%)',
                }}
              />

              <img
           
                src="/parlex2.jpeg"
                alt="Mindex Nivesh App"
                className="will-change-transform pointer-events-none select-none"
                style={{
                  position: 'absolute',
                  top: '-5%',
                  left: 0,
                  width: '100%',
                  height: '110%',        /* 10% overhang = parallax headroom */
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>

          </div>{/* /card shell */}
        </div>
      </Scroll>

    </section>
  );
};