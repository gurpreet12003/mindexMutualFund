import React, { useState } from "react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const monthlyRate = expectedReturn / 12 / 100;
  const months = timePeriod * 12;

  const investedAmount = monthlyInvestment * months;

  const estimatedReturns = Math.round(
    monthlyInvestment *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate)) -
      investedAmount
  );

  const totalValue = investedAmount + estimatedReturns;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="p-8 lg:p-12 bg-white border-r border-gray-100">

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              SIP Investment Calculator
            </div>

            <h1 className="text-4xl font-black text-black leading-tight mb-4">
              Calculate Your SIP Returns Instantly
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Estimate your mutual fund investment growth with our advanced SIP calculator and plan smarter wealth creation.
            </p>
          </div>

          <div className="space-y-8">

            {/* Monthly Investment */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-bold text-gray-800 text-lg">
                  Monthly Investment
                </label>

                <span className="font-black text-red-600 text-lg">
                  ₹{monthlyInvestment.toLocaleString("en-IN")}
                </span>
              </div>

              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) =>
                  setMonthlyInvestment(Number(e.target.value))
                }
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            {/* Return Rate */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-bold text-gray-800 text-lg">
                  Expected Return Rate
                </label>

                <span className="font-black text-red-600 text-lg">
                  {expectedReturn}%
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={expectedReturn}
                onChange={(e) =>
                  setExpectedReturn(Number(e.target.value))
                }
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            {/* Time Period */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-bold text-gray-800 text-lg">
                  Time Period
                </label>

                <span className="font-black text-red-600 text-lg">
                  {timePeriod} Years
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="40"
                value={timePeriod}
                onChange={(e) =>
                  setTimePeriod(Number(e.target.value))
                }
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            {/* Results */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-semibold">
                  Invested Amount
                </p>

                <h2 className="text-2xl font-black text-black">
                  ₹{investedAmount.toLocaleString("en-IN")}
                </h2>
              </div>

              <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                <p className="text-sm text-red-500 mb-2 font-semibold">
                  Estimated Returns
                </p>

                <h2 className="text-2xl font-black text-red-600">
                  ₹{estimatedReturns.toLocaleString("en-IN")}
                </h2>
              </div>

              <div className="bg-black rounded-2xl p-5">
                <p className="text-sm text-gray-300 mb-2 font-semibold">
                  Total Future Value
                </p>

                <h2 className="text-2xl font-black text-white">
                  ₹{totalValue.toLocaleString("en-IN")}
                </h2>
              </div>

            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 transition-all text-white font-black py-4 rounded-2xl text-lg shadow-lg hover:shadow-red-200"
           onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}>
              Start SIP Investment
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 lg:p-12 bg-red-600 text-white flex flex-col justify-center">

          <div className="inline-flex items-center gap-2 bg-white text-black font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
            Smart Wealth Planning
          </div>

          <h2 className="text-4xl font-black leading-tight mb-6">
            Invest Smartly Through SIP & Build Long-Term Wealth
          </h2>

          <p className="text-slate-200 text-lg leading-relaxed mb-8">
            Systematic Investment Plans (SIPs) help you invest regularly in mutual funds and benefit from rupee cost averaging and long-term compounding growth.
          </p>

          <div className="space-y-6">

            <div className="bg-white text-black  rounded-2xl p-5 backdrop-blur-sm">
              <h3 className="text-2xl font-extrabold  mb-2">
                Goal Based Investing
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Plan investments for retirement, dream home, child education, travel goals, and wealth creation.
              </p>
            </div>

            <div className="bg-white text-black rounded-2xl p-5 backdrop-blur-sm">
              <h3 className="text-2xl font-extrabold mb-2">
                Power of Compounding
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Small monthly investments can generate significant returns when invested consistently over long periods.
              </p>
            </div>

            <div className="bg-white text-black rounded-2xl p-5 backdrop-blur-sm">
              <h3 className="text-2xl font-extrabold mb-2">
                Flexible & Affordable
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Start investing with as low as ₹500 per month and increase your SIP anytime as your income grows.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SIPCalculator;