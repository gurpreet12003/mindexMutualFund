import React, { useState, useMemo } from 'react';
import { Star, TrendingUp, ShieldAlert, ChevronRight, Info } from 'lucide-react';
import { MUTUAL_FUNDS } from "../data/mutualFundsData";
import Scroll from './scrollEffect';

const TABS = [
  'All Funds',
  'Popular',
  'High Return',
  'Tax Saving',
  'Better than FD',
  'Top Companies',
  'Low Risk'
];

export const ExploreFunds = ({ searchQuery, onInvestClick }) => {
  const [activeTab, setActiveTab] = useState('All Funds');

  const filteredFunds = useMemo(() => {
    return MUTUAL_FUNDS.filter(fund => {
      // Search filter
      const matchesSearch = searchQuery
        ? fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          fund.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          fund.subCategory.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      if (!matchesSearch) return false;

      // Tab filter
      if (activeTab === 'All Funds') return true;
      if (activeTab === 'Popular') return fund.tags.includes('Popular');
      if (activeTab === 'High Return') return fund.tags.includes('High Return') || fund.threeYearReturn > 25;
      if (activeTab === 'Tax Saving') return fund.category === 'Tax Saving (ELSS)' || fund.tags.includes('Tax Saving');
      if (activeTab === 'Better than FD') return fund.tags.includes('Better than FD');
      if (activeTab === 'Top Companies') return fund.tags.includes('Top Companies');
      if (activeTab === 'Low Risk') return fund.risk === 'Low Risk' || fund.tags.includes('Low Risk');

      return true;
    });
  }, [searchQuery, activeTab]);

  return (
    <Scroll>


    <section id="explore-funds" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest mb-2 bg-red-50 py-1 px-3 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Handpicked Performers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Explore Top Mutual Funds
            </h2>
            <p className="text-gray-600 text-base mt-2 max-w-2xl">
              Discover expertly curated mutual funds categorized by investment goals, historical performance, and risk profiles. Backed by Mindex Capital research.
            </p>
          </div>
          
          {/* Quick Notice */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-600 max-w-xs">
            <Info className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span>Returns are annualized historical figures. Past performance is not indicative of future returns.</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-gray-100">
          {TABS.map(tab => (
            <button
              key={tab}
                 onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Funds Grid / Table Cards */}
        {filteredFunds.length === 0 ? (
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center my-8">
            <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-black mb-1">No Mutual Funds Found</h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              We couldn't find any mutual funds matching "{searchQuery}" under the "{activeTab}" category. Try adjusting your search query or selecting a different tab.
            </p>
            <button
                onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
              className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFunds.map(fund => (
              <div
                key={fund.id}
                className="bg-white border border-gray-200 hover:border-red-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group relative"
              >
                <div>
                  
                  {/* Top Row: Category & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {fund.category} • {fund.subCategory}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full text-amber-700 text-xs font-extrabold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{fund.rating}.0</span>
                    </div>
                  </div>

                  {/* Fund Name */}
                  <h3 className="text-xl font-extrabold text-black mb-2 group-hover:text-red-600 transition-colors leading-snug">
                    {fund.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-6 line-clamp-2">
                    {fund.description}
                  </p>

                  {/* Returns Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100 mb-6 bg-gray-50/50 rounded-xl p-4">
                    <div>
                      <div className="text-xs text-gray-500 font-semibold mb-1">3Y Annualized</div>
                      <div className="text-2xl font-black text-red-600">
                        {fund.threeYearReturn}% <span className="text-xs font-normal text-gray-500">p.a.</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-semibold mb-1">5Y Annualized</div>
                      <div className="text-2xl font-black text-black">
                        {fund.fiveYearReturn}% <span className="text-xs font-normal text-gray-500">p.a.</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 text-center mb-6 text-xs">
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <div className="text-gray-500 font-medium mb-0.5">Risk</div>
                      <div className="font-bold text-black">{fund.risk}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <div className="text-gray-500 font-medium mb-0.5">Fund Size</div>
                      <div className="font-bold text-black">{fund.fundSize}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <div className="text-gray-500 font-medium mb-0.5">Min SIP</div>
                      <div className="font-bold text-black">₹{fund.minInvestment}</div>
                    </div>
                  </div>

                </div>

                {/* Invest CTA Button */}
                <button
                    onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md shadow-red-200 group-hover:shadow-lg group-hover:shadow-red-300 cursor-pointer"
                >
                  <span>Invest Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
        </Scroll>
  );
};
