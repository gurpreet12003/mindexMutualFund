import React from 'react';
import { UserCheck, FileSearch, Send, RefreshCw } from 'lucide-react';
import Scroll from './scrollEffect';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <UserCheck className="w-6 h-6 text-red-600" />,
      step: 'Step 1',
      title: 'Risk Profile & Goal Discovery',
      description: 'We assess your risk tolerance, investment horizon, and financial goals through a structured 1-on-1 consultation with a Mindex wealth expert.'
    },
    {
      icon: <FileSearch className="w-6 h-6 text-red-600" />,
      step: 'Step 2',
      title: 'Custom Portfolio Blueprint',
      description: 'Our advisory team designs a customized mutual fund asset allocation strategy combining top equity, debt, and hybrid funds.'
    },
    {
      icon: <Send className="w-6 h-6 text-red-600" />,
      step: 'Step 3',
      title: 'Seamless Digital Execution',
      description: 'Complete your paperless KYC in 5 minutes. Execute your lump sum or SIP investments directly with the AMCs via secure bank mandates.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-red-600" />,
      step: 'Step 4',
      title: 'Active Tracking & Rebalancing',
      description: 'We monitor your portfolio 24/7. Receive timely alerts for rebalancing, tax harvesting, and fund performance reviews.'
    }
  ];

  return (
    <Scroll>
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 py-1 px-3 rounded-full">
            <span>Simple Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            How Mindex Capital Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Your journey to financial freedom is structured, transparent, and completely guided by seasoned mutual fund professionals.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 relative hover:border-red-500 transition-all shadow-xs hover:shadow-lg group">
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-black bg-gray-100 text-gray-800 py-1 px-3 rounded-full uppercase tracking-wider">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-black mb-3 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
    </Scroll>
  );
};
