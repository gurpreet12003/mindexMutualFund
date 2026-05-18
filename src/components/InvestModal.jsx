// import React, { useState } from 'react';
// import { X, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
// import { MUTUAL_FUNDS } from "../data/mutualFundsData";

// // interface InvestModalProps {
// //   isOpen: boolean;

// //   onClose: () => void;
// //   selectedFund?: MutualFund | null;
// //   serviceName?: string;
// // }

// export const InvestModal = ({ isOpen, onClose, selectedFund, serviceName }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     horizon: '5+ Years (Long Term)',
//     investmentType: 'SIP (Monthly)',
//     amount: selectedFund ? selectedFund.minInvestment : 5000,
//     notes: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   if (!isOpen) return null;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   const handleModalClose = () => {
//     setIsSubmitted(false);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
//       <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-gray-200 relative my-8 animate-in fade-in zoom-in duration-200">
        
//         {/* Close Button */}
//         <button
//           onClick={handleModalClose}
//           className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors p-2 rounded-full hover:bg-gray-100"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         {isSubmitted ? (
//           <div className="text-center py-8 space-y-6">
//             <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto shadow-md">
//               <CheckCircle className="w-10 h-10" />
//             </div>
            
//             <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
//               Application Received!
//             </h3>

//             <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left space-y-3 max-w-md mx-auto">
//               <div className="flex justify-between text-xs sm:text-sm">
//                 <span className="text-gray-500 font-medium">Investor Name:</span>
//                 <span className="font-bold text-black">{formData.name}</span>
//               </div>
//               <div className="flex justify-between text-xs sm:text-sm">
//                 <span className="text-gray-500 font-medium">Interest:</span>
//                 <span className="font-bold text-black truncate max-w-[200px]">
//                   {selectedFund ? selectedFund.name : serviceName || 'Mutual Fund Advisory'}
//                 </span>
//               </div>
//               <div className="flex justify-between text-xs sm:text-sm">
//                 <span className="text-gray-500 font-medium">Assigned Advisor:</span>
//                 <span className="font-bold text-red-600">Senior Wealth Expert (SEBI Reg.)</span>
//               </div>
//               <div className="flex justify-between text-xs sm:text-sm">
//                 <span className="text-gray-500 font-medium">Status:</span>
//                 <span className="font-bold text-emerald-600">Priority Verification Queued</span>
//               </div>
//             </div>

//             <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
//               Thank you for choosing <span className="font-bold text-black">Mindex Capital</span>. A senior mutual fund expert will call you at <span className="font-bold text-black">{formData.phone}</span> within 2 hours to finalize your portfolio strategy and digital onboarding.
//             </p>

//             <button
//               onClick={handleModalClose}
//               className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-colors shadow-md cursor-pointer"
//             >
//               Done & Return to Homepage
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-6">
            
//             {/* Header */}
//             <div>
//               <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 py-1 px-3 rounded-full mb-2">
//                 <ShieldCheck className="w-3.5 h-3.5" />
//                 <span>Secure Onboarding</span>
//               </div>
//               <h3 className="text-2xl font-black text-black tracking-tight">
//                 {selectedFund ? `Invest in ${selectedFund.name}` : `Book ${serviceName || 'Mutual Fund Advisory'}`}
//               </h3>
//               <p className="text-gray-600 text-xs mt-1">
//                 {selectedFund 
//                   ? `Category: ${selectedFund.category} • 3Y Return: ${selectedFund.threeYearReturn}% p.a.`
//                   : 'Complete the quick form below to get matched with a dedicated Mindex Capital portfolio manager.'}
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              
//               <div>
//                 <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
//                   Full Name <span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="e.g., Rajesh Sharma"
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
//                     Email Address <span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="rajesh@example.com"
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
//                     Mobile Number <span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     pattern="[0-9]{10}"
//                     title="10 digit mobile number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="98765 43210"
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
//                     Investment Horizon
//                   </label>
//                   <select
//                     name="horizon"
//                     value={formData.horizon}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
//                   >
//                     <option>1-3 Years (Short Term)</option>
//                     <option>3-5 Years (Medium Term)</option>
//                     <option>5+ Years (Long Term)</option>
//                     <option>10+ Years (Retirement)</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
//                     Preferred Mode
//                   </label>
//                   <select
//                     name="investmentType"
//                     value={formData.investmentType}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
//                   >
//                     <option>SIP (Monthly Investment)</option>
//                     <option>Lump sum (One Time)</option>
//                     <option>Existing Portfolio Restructuring</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
//                   Proposed Initial Amount (₹)
//                 </label>
//                 <input
//                   type="number"
//                   name="amount"
//                   min={selectedFund ? selectedFund.minInvestment : 1000}
//                   value={formData.amount}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-black focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
//                 />
//                 <span className="text-[10px] text-gray-500 mt-0.5 block">
//                   Minimum recommended investment: ₹{selectedFund ? selectedFund.minInvestment : 1000}
//                 </span>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
//                   Additional Notes / Goals (Optional)
//                 </label>
//                 <textarea
//                   name="notes"
//                   rows={2}
//                   value={formData.notes}
//                   onChange={handleChange}
//                   placeholder="e.g., Planning for child education in 8 years..."
//                   className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50 focus:bg-white transition-all resize-none"
//                 />
//               </div>

//               <div className="pt-2">
//                 <button
//                   type="submit"
//                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-red-200 cursor-pointer"
//                 >
//                   <span>Confirm & Request Expert Callback</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//                 <p className="text-[11px] text-center text-gray-500 mt-3">
//                   🔒 By clicking confirm, you authorize Mindex Capital to contact you regarding mutual fund advisory. No spam, ever.
//                 </p>
//               </div>

//             </form>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// };
