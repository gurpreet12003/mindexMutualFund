import React from 'react';
import { ShieldCheck, BarChart3, Users2, FileCheck, RefreshCw, Lock } from 'lucide-react';
import Scroll from './scrollEffect';

export const WhyMindex = () => {
  const reasons = [
    {
      icon: <BarChart3 className="w-6 h-6 text-red-600" />,
      title: 'Institutional-Grade Research',
      description: 'Our proprietary Mindex Fund Scoring Model evaluates 1,500+ mutual funds across 25+ parameters including downside protection, alpha generation, and rolling returns.'
    },
    {
      icon: <Users2 className="w-6 h-6 text-red-600" />,
      title: 'Dedicated SEBI Registered Experts',
      description: 'Get matched with a seasoned mutual fund portfolio manager who understands your personal milestones and provides bespoke, uncompromised advisory.'
    },
    {
      icon: <Lock className="w-6 h-6 text-red-600" />,
      title: 'Bank-Grade Security & Direct AMCs',
      description: 'Your money moves directly from your bank to the Mutual Fund House (AMC). All units are credited directly to your folio with NSDL/CDSL depositories.'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-red-600" />,
      title: 'Active Tax Harvesting & Optimization',
      description: 'We strategically manage capital gains and leverage ELSS funds under Section 80C to ensure you save maximum tax while compounding your wealth.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-red-600" />,
      title: 'Automated Portfolio Rebalancing',
      description: 'Markets change, and so should your asset allocation. We proactively suggest rebalancing to lock in profits and protect against market downturns.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      title: 'Zero Conflict of Interest',
      description: 'We operate on a fiduciary model. Whether you prefer Direct plans or Assisted Regular plans, our recommendations are 100% unbiased.'
    }
  ];

  return (
    <Scroll>


    <section id="why-mindex" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 py-1 px-3 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Mindex Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Why Invest via Mindex Capital?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Experience the perfect synergy of advanced financial technology and dedicated human expertise. We remove the guesswork from mutual fund investing.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 hover:border-red-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-extrabold text-black mb-3 group-hover:text-red-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
        </Scroll>
  );
};
