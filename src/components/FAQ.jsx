import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mutualFundsData';
import Scroll from './scrollEffect';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Scroll>
      <section
        id="faqs"
        className="py-20 bg-white border-b border-gray-100 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 py-1 px-3 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Everything you need to know about Mindex Capital,
              mutual fund safety, SEBI guidelines,
              and our portfolio planning services.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-red-600 bg-red-50/20 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-extrabold text-black hover:text-red-600 transition-colors cursor-pointer text-base sm:text-lg"
                  >
                    <span>{faq.question}</span>

                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </Scroll>
  );
};