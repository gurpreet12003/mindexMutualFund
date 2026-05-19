import React from 'react';
import { ShieldCheck, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { STATS } from '../data/mutualFundsData';
import Scroll from './scrollEffect';


// interface HeroProps {
//   onOpenModal: (serviceName?: string) => void;
//   onExploreClick: () => void;
// }

export const Hero = ({ onOpenModal, onExploreClick }) => {
  return (
   <Scroll>


    <section className="relative bg-white pt-12 pb-20 overflow-hidden border-b border-gray-100">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-red-50/50 to-transparent pointer-events-none -z-10 rounded-bl-full" />
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-radial from-red-50/50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8">

            {/* SEBI / Trust Tag */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full py-1.5 px-4 text-red-700 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>SEBI Registered Mutual Fund Distributor & Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Master Your Wealth with Expert <span className="text-red-600 block sm:inline">Mutual Fund Portfolio Planning Services</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-700 font-normal leading-relaxed max-w-2xl">
              Welcome to <span className="font-extrabold text-black">Mindex Capital</span>. We design high-performing, goal-driven mutual fund portfolios tailored to your life aspirations. Experience institutional-grade research combined with personalized human advisory.
            </p>

            {/* Bullet Points / Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">
                  ✓
                </div>
                <span className="text-base font-semibold text-gray-800">Zero Conflict Direct & Regular Plans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">
                  ✓
                </div>
                <span className="text-base font-semibold text-gray-800">Active Quarterly Rebalancing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">
                  ✓
                </div>
                <span className="text-base font-semibold text-gray-800">Tax Optimization under Sec 80C</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">
                  ✓
                </div>
                <span className="text-base font-semibold text-gray-800">Dedicated Senior Wealth Advisor</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                   onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 cursor-pointer"
              >
                <span>Book Free Portfolio Audit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                   onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-black font-bold px-8 py-4 rounded-xl text-base transition-all border-2 border-gray-200 hover:border-gray-300 shadow-xs cursor-pointer"
              >
                <TrendingUp className="w-5 h-5 text-red-600" />
                <span>Explore Top Funds</span>
              </button>
            </div>

            {/* Rating summary */}
            <div className="pt-2 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.9 / 5 Rating</span>
              <span className="text-gray-400">|</span>
              <span>Based on 12,000+ HNI reviews</span>
            </div>

          </div>

          {/* Right Column: Interactive Trust Card / Hero Visual */}
          <div className="lg:col-span-5">

            <div className="relative flex items-center justify-center">

              {/* Background Glow */}
              <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full animate-pulse"></div>

              {/* Floating Card */}
              <div className="relative bg-white backdrop-blur-xl border border-red-600 rounded-[2rem] p-4 shadow-2xl shadow-red-100 hover:shadow-red-200 transition-all duration-500 hover:-translate-y-2">

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-slate-50"></div>

                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-[1.7rem]">

                  <img
                    src="/mindexMobile.jpeg"
                    alt="Mobile App"
                   className="w-full max-w-[500px] h-[500px] sm:h-[600px] lg:h-[500px] mx-auto object-contain rounded-[1.7rem] transition-transform duration-700 animate-[float_4s_ease-in-out_infinite]"
                  />

                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2 animate-bounce">
                  <TrendingUp className="w-4 h-4" />
                  Top Rated App
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Stats Row */}


      </div>
      <div className="mt-20 p-12 border-t bg-red-600 border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-200 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>

   </Scroll>
  );
};
