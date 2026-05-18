import React from 'react';
import { Check, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { PORTFOLIO_SERVICES } from '../data/mutualFundsData';
import Scroll from './scrollEffect';

// interface PortfolioServicesProps {
//   onOpenModal: (serviceName?: string) => void;
// }

export const PortfolioServices = ({ onOpenModal }) => {
  return (
    <Scroll>


    <section id="portfolio-services" className="py-20 bg-gray-50/50 border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 py-1 px-3 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Expert Wealth Management</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Mutual Fund Portfolio <span className='text-red-600'> Planning </span> Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At <span className="font-extrabold text-black">Mindex Capital</span>, we don't just sell funds; we engineer resilient financial futures. Choose the advisory tier that matches your wealth creation stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PORTFOLIO_SERVICES.map(service => (
            <div
              key={service.id}
              className={`bg-white border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                service.badge === 'Most Popular'
                  ? 'border-red-600 shadow-2xl shadow-red-100 ring-2 ring-red-600'
                  : 'border-gray-200 hover:border-gray-300 shadow-lg shadow-gray-100'
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <div className={`absolute -top-4 right-8 text-xs font-black uppercase py-1 px-4 rounded-full tracking-wider shadow-md ${
                  service.badge === 'Most Popular'
                    ? 'bg-red-600 text-white'
                    : 'bg-black text-white'
                }`}>
                  {service.badge}
                </div>
              )}

              <div>
                
                {/* Subtitle */}
                <div className="text-xs font-extrabold text-red-600 uppercase tracking-wider mb-2">
                  {service.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-black mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Ideal For Notice */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-6">
                  <span className="text-xs font-bold text-gray-900 block mb-0.5">Ideal Profile:</span>
                  <span className="text-xs text-gray-600">{service.idealFor}</span>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold text-black uppercase tracking-wider mb-2">What's included:</div>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 font-bold" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenModal(service.title)}
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer ${
                  service.badge === 'Most Popular'
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-200'
                    : 'bg-red-600 hover:bg-red-700 text-white shadow-gray-200'
                }`}
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-black">100% Transparent & Fiduciary Mutual Fund Advisory</h4>
              <p className="text-gray-600 text-sm max-w-2xl mt-0.5">
                We maintain absolute transparency regarding expense ratios, direct vs regular plans, and fund selections. Your financial growth is our sole priority.
              </p>
            </div>
          </div>
          <button
                onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl whitespace-nowrap text-sm transition-all shadow-md shadow-red-200 cursor-pointer"
          >
            Speak with an Expert
          </button>
        </div>

      </div>
    </section>
        </Scroll>
  );
};
