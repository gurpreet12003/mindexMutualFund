import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Scroll from './scrollEffect';


export const CTASection= ({ onOpenModal }) => {
  return (
    <Scroll>
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-2xl shadow-gray-200">
          
       
          <div className="relative z-10 max-w-3xl space-y-8">
            
            <div className="inline-flex items-center gap-2 bg-red-600 text-white font-black text-xs uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
              <ShieldCheck className="w-4 h-4" />
              <span>SEBI Registered Fiduciary Advisory</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white">
              Ready to Build Your Wealth Blueprint with <span className="text-red-500">Mindex Capital</span>?
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Join over 1.5 Lakh smart investors who rely on our mutual fund portfolio planning services for stress-free wealth accumulation and active advisory.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-4 text-sm font-semibold text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Zero Hidden Commissions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>5-Minute Digital Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Active Rebalancing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                     onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-red-900/50 hover:shadow-xl cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                    onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-base transition-all border border-white/20 hover:border-white/40 cursor-pointer"
              >
                <span>Request Callback</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
    </Scroll>
  );
};
