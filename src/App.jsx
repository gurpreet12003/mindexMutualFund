
import  Navbar  from './components/Navbar';
import { Hero } from './components/Hero';
import { ExploreFunds } from './components/ExploreFunds';

import { WhyMindex } from './components/WhyMindex';
import { FundCategories } from './components/FundCategories';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import  Footer  from './components/Footer';
// import { InvestModal } from './components/InvestModal';
import { MUTUAL_FUNDS } from "./data/mutualFundsData";
import { useState } from 'react';
import React from "react";
import { FormPage } from './components/form';
import WhatsAppButton from './components/whatsapp';
export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFund, setSelectedFund] = useState(0);
  const [serviceName, setServiceName] = useState(0);

 

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-600 selection:text-white">
      
      {/* Top Banner Notice */}
      <div className="bg-black text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="bg-red-600 text-white font-bold px-2 py-0.5 rounded-sm text-[10px]">NEW</span>
        <span>Mindex Capital AI-Assisted Mutual Fund Portfolio Planning Services Now Live • Zero Hidden Charges</span>
      </div>

      {/* Header / Navbar */}
      <Navbar  />

      {/* Main Content */}
      <main>
        <Hero />
        <WhatsAppButton/>
        
        <WhyMindex />
        <FundCategories />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FormPage/>
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      
    </div>
  );
};

export default App;
