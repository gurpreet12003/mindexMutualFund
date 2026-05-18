import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Scroll from "./scrollEffect";

export const FormPage = () => {
  return (
    <>
    <Scroll>
      <section
        id="contact"
        className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div>

              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full py-1.5 px-4 text-red-700 text-xs sm:text-sm font-bold tracking-wide mb-5">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Trusted Mutual Fund Advisory</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight">
                Start Building Wealth with{" "}
                <span className="text-red-600">
                  Expert Mutual Fund Guidance
                </span>
              </h2>

              <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
                Speak with our experienced mutual fund advisors and discover
                personalized SIP & investment strategies designed around your
                financial goals, risk appetite, and future aspirations.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-red-600 flex items-center justify-center rounded-xl flex-shrink-0 shadow-lg shadow-red-100">
                    <Phone className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                      Call Us
                    </div>

                    <div className="font-bold text-lg text-black">
                      +91 98765 43210
                    </div>

                    <div className="text-sm text-neutral-600">
                      Mon – Sat, 9:30 AM – 6:30 PM IST
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-red-600 flex items-center justify-center rounded-xl flex-shrink-0 shadow-lg shadow-red-100">
                    <Mail className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                      Email
                    </div>

                    <div className="font-bold text-lg text-black">
                      support@mindexcapital.com
                    </div>

                    <div className="text-sm text-neutral-600">
                      For investment & SIP enquiries
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-red-600 flex items-center justify-center rounded-xl flex-shrink-0 shadow-lg shadow-red-100">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                      Office Address
                    </div>

                    <div className="font-bold text-lg text-black leading-relaxed">
                      1306, Padma Tower-1,
                      <br />
                      Rajendra Place,
                      <br />
                      New Delhi – 110008
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Form */}
            <div className="bg-white border-2 border-red-600 rounded-3xl p-8 shadow-2xl shadow-red-100">

              <h3 className="text-red-600 text-3xl font-black mb-2">
                Free Investment Consultation
              </h3>

              <p className="text-sm text-neutral-600 mb-7 leading-relaxed">
                Fill in your details and our mutual fund expert will contact
                you with personalized investment recommendations.
              </p>

              <form
                action="https://formsubmit.co/gurpreetsingh.b1203@gmail.com"
                method="POST"
                className="space-y-5"
              >

                {/* Hidden Inputs */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Mutual Fund Inquiry"
                />
                <input type="hidden" name="_template" value="table" />

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
                  />
                </div>

                {/* Mobile + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      placeholder="+91 9876543210"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>

                </div>

                {/* Goal */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Investment Goal
                  </label>

                  <select
                    name="goal"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
                  >
                    <option>Wealth Creation</option>
                    <option>Retirement Planning</option>
                    <option>Tax Saving (ELSS)</option>
                    <option>Child Education</option>
                    <option>Emergency Fund</option>
                    <option>Monthly Passive Income</option>
                  </select>
                </div>

                {/* Investment Amount
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Monthly Investment Amount
                  </label>

                  <select
                    name="investmentAmount"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
                  >
                    <option>₹500 – ₹2,000</option>
                    <option>₹2,000 – ₹5,000</option>
                    <option>₹5,000 – ₹10,000</option>
                    <option>₹10,000 – ₹25,000</option>
                    <option>₹25,000+</option>
                  </select>
                </div> */}

                {/* Investment Type */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Preferred Investment Type
                  </label>

                  <select
                    name="investmentType"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
                  >
                    <option>SIP Investment</option>
                    <option>Lumpsum Investment</option>
                    <option>Both SIP & Lumpsum</option>
                    <option>Need Expert Guidance</option>
                  </select>
                </div>

               

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-black text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 shadow-lg shadow-red-100"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-[11px] text-neutral-500 text-center leading-relaxed">
                  Your information is 100% secure. Our advisor will contact you
                  within 4 business hours.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>
      </Scroll>
    </>
  );
};