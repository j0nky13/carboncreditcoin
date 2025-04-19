// import React from 'react';
// import { CheckCircle, HelpCircle, ArrowDown } from 'lucide-react';
// import { motion } from 'framer-motion';

// const steps = [
//   { label: 'Website Creation', status: 'done' },
//   { label: 'Legal + Biz Setup', status: 'done' },
//   { label: 'Marketing Phase', status: 'done' },
//   { label: 'Finalize Blockchain Minting', status: 'in-progress' },
//   { label: 'Initial Investors', status: 'upcoming' },
//   { label: 'Get Listed on Exchanges', status: 'upcoming' },
//   { label: 'Launch CO2TAX + NFT Sales', status: 'upcoming' },
//   { label: 'Purchase Tree Farm', status: 'upcoming' },
//   { label: 'Hire Full-Time Staff', status: 'upcoming' },
//   { label: 'Eco Housing + Phase 2', status: 'upcoming' },
//   { label: '???', status: 'mystery' },
// ];

// const getColors = (status) => {
//   switch (status) {
//     case 'done':
//       return 'border-green-400 bg-green-800 text-white';
//     case 'in-progress':
//       return 'border-yellow-400 bg-yellow-700 text-black';
//     case 'upcoming':
//       return 'border-orange-500 bg-orange-700 text-white';
//     case 'mystery':
//       return 'border-purple-500 bg-purple-800 text-white';
//     default:
//       return '';
//   }
// };

// const RoadmapTwo = () => {
//   return (
//     <div className="flex flex-col items-center mt-16 gap-6 relative">
//       {steps.map((step, index) => (
//         <React.Fragment key={index}>
//           {/* Bubble */}
//           <motion.div
//             className={`w-64 h-24 rounded-full flex items-center justify-center text-center font-bold border-4 shadow-lg px-4 text-sm relative ${getColors(step.status)}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//           >
//             {step.status === 'done' && (
//               <CheckCircle className="absolute -top-3 -right-3 w-6 h-6 text-purple-400 bg-black rounded-full p-0.5" />
//             )}
//             {step.status === 'mystery' ? <HelpCircle className="w-6 h-6" /> : step.label}
//           </motion.div>

//           {/* Arrow */}
//           {index < steps.length - 1 && (
//             <motion.div
//               className="flex justify-center items-center h-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.2 + 0.1 }}
//             >
//               <ArrowDown className="text-[#9FFF00] w-5 h-5 animate-bounce" />
//             </motion.div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default RoadmapTwo;



// ROADMAP 2 VERSION, NO BEUNO

// import React from 'react';
// import { CheckCircle, HelpCircle } from 'lucide-react';
// import { motion } from 'framer-motion';

// const steps = [
//   { label: 'Website Creation', status: 'done' },
//   { label: 'Legal + Biz Setup', status: 'done' },
//   { label: 'Marketing Phase', status: 'done' },
//   { label: 'Finalize Blockchain Minting', status: 'in-progress' },
//   { label: 'Initial Investors', status: 'upcoming' },
//   { label: 'Get Listed on Exchanges', status: 'upcoming' },
//   { label: 'Launch CO2TAX + NFT Sales', status: 'upcoming' },
//   { label: 'Purchase Tree Farm', status: 'upcoming' },
//   { label: 'Hire Full-Time Staff', status: 'upcoming' },
//   { label: 'Eco Housing + Phase 2', status: 'upcoming' },
//   { label: '???', status: 'mystery' },
// ];

// const getStyles = (status) => {
//   switch (status) {
//     case 'done':
//       return 'border-green-400 bg-green-900 text-white shadow-green-400/30';
//     case 'in-progress':
//       return 'border-yellow-400 bg-yellow-600 text-black shadow-yellow-300/30';
//     case 'upcoming':
//       return 'border-orange-500 bg-orange-800 text-white shadow-orange-400/20';
//     case 'mystery':
//       return 'border-purple-500 bg-purple-900 text-white shadow-purple-500/30';
//     default:
//       return '';
//   }
// };

// const RoadmapTwo = () => {
//   return (
//     <div className="relative mt-16 px-4">
//       {/* vertical line spine */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1 w-1 h-full bg-[#9FFF00]/30 z-[-1]" />

//       <div className="flex flex-col items-center gap-12">
//         {steps.map((step, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <motion.div
//               key={index}
//               className={`relative w-full max-w-[320px] sm:max-w-[400px] text-sm font-semibold px-6 py-4 rounded-full border-4 shadow-lg transition-all duration-300 
//               ${getStyles(step.status)} ${isLeft ? 'self-start' : 'self-end'} text-center`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.15 }}
//             >
//               {/* check icon for done */}
//               {step.status === 'done' && (
//                 <CheckCircle className="absolute -top-3 -right-3 w-6 h-6 text-purple-300 bg-black rounded-full p-0.5" />
//               )}

//               {/* help icon for mystery */}
//               {step.status === 'mystery' ? (
//                 <HelpCircle className="w-6 h-6 mx-auto" />
//               ) : (
//                 step.label
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RoadmapTwo;


// import React from 'react';
// import { CheckCircle, HelpCircle } from 'lucide-react';
// import { motion } from 'framer-motion';

// const steps = [
//   { label: 'Website Creation', status: 'done' },
//   { label: 'Legal + Biz Setup', status: 'done' },
//   { label: 'Marketing Phase', status: 'done' },
//   { label: 'Finalize Blockchain Minting', status: 'in-progress' },
//   { label: 'Initial Investors', status: 'upcoming' },
//   { label: 'Get Listed on Exchanges', status: 'upcoming' },
//   { label: 'Launch CO2TAX + NFT Sales', status: 'upcoming' },
//   { label: 'Purchase Tree Farm', status: 'upcoming' },
//   { label: 'Eco Housing + Phase 2', status: 'upcoming' },
//   { label: '???', status: 'mystery' },
// ];

// const getColorStyles = (status) => {
//   switch (status) {
//     case 'done':
//       return 'border-[#97FF00] bg-dark text-white shadow-[0_0_10px_#97FF00]';
//     case 'in-progress':
//       return 'border-[#6E00FF] bg-dark text-white shadow-[0_0_10px_#6E00FF]';
//     case 'upcoming':
//       return 'border-[#FF9700] bg-dark text-white shadow-[0_0_8px_#FF970080]';
//     case 'mystery':
//       return 'border-[#6E00FF] bg-dark text-white shadow-[0_0_12px_#6E00FF99]';
//     default:
//       return '';
//   }
// };

// const RoadmapTwo = () => {
//   return (
//     <section className="w-full px-4 py-20 bg-dark">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-[#97FF00] mb-12">
//         Roadmap
//       </h2>

//       <div className="flex flex-col items-center gap-10">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className={`relative w-full max-w-[300px] text-sm font-semibold px-6 py-3 rounded-full border-2 text-center transition-all duration-300 ${getColorStyles(step.status)}`}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//           >
//             {step.status === 'done' && (
//               <CheckCircle className="absolute -top-2 -right-2 w-5 h-5 text-[#6E00FF] bg-black rounded-full p-0.5" />
//             )}

//             {step.status === 'mystery' ? (
//               <HelpCircle className="w-5 h-5 mx-auto" />
//             ) : (
//               step.label
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RoadmapTwo;