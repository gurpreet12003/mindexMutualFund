import React from 'react';
import {
  TrendingUp,
  ShieldCheck,
  PieChart,
  FileText,
  BarChart2,
  Check
} from 'lucide-react';

import { FUND_CATEGORIES_INFO } from '../data/mutualFundsData';
import Scroll from './scrollEffect';

export const FundCategories = () => {

  const getIcon = (iconName) => {
    const iconClass =
      "w-6 h-6 text-red-600 transition-colors duration-300 ";

    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;

      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;

      case 'PieChart':
        return <PieChart className={iconClass} />;

      case 'FileText':
        return <FileText className={iconClass} />;

      case 'BarChart2':
        return <BarChart2 className={iconClass} />;

      default:
        return <TrendingUp className={iconClass} />;
    }
  };

  return (
    <Scroll>

    <section className="py-20 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 py-1 px-3 rounded-full">
            <PieChart className="w-3.5 h-3.5" />
            <span>Fund Classifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Understanding Mutual Fund{' '}
            <span className="text-red-600">Categories</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Every mutual fund serves a specific purpose in your portfolio.
            Explore how Mindex Capital deploys these asset classes to achieve
            optimal risk-adjusted returns.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {FUND_CATEGORIES_INFO.map((cat) => (

            <div
              key={cat.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-red-600"
            >

              <div>

                {/* Icon */}
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-100">
                  {getIcon(cat.iconName)}
                </div>

                {/* Heading */}
                <h3 className="text-2xl font-extrabold text-black mb-3 transition-colors duration-300 group-hover:text-red-600">
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 mb-6">

                  {cat.features.map((feat, idx) => (

                    <div
                      key={idx}
                      className="flex items-center gap-3 text-xs font-semibold text-gray-800"
                    >

                      <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>

                      <span>{feat}</span>

                    </div>

                  ))}

                </div>

              </div>

            </div>
          
          ))}

        </div>
      </div>
    </section>
          
    </Scroll>
  );
};