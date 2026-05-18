import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mutualFundsData';
import Scroll from './scrollEffect';

export const Testimonials = () => {
  return (
    <Scroll>


    <section className="py-20 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 py-1 px-3 rounded-full">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Trusted by 1.5 Lakh+ Investors
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Read how our mutual fund portfolio planning services have empowered professionals, entrepreneurs, and retirees across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-8 text-red-100 group-hover:text-red-200 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex items-center text-amber-500 gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-sm leading-relaxed mb-8 italic relative z-10">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-black">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 py-1 px-3 rounded-full">
                  {t.location}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
        </Scroll>
  );
};
