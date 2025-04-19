// // src/components/EcoMouseFlowMap.jsx

// import { Check, HelpCircle } from 'lucide-react';

// const steps = [
//   { label: 'Website Creation', status: 'complete' },
//   { label: 'Legal + Biz Structuring', status: 'complete' },
//   { label: 'Marketing Phase', status: 'complete' },
//   { label: 'Finalize Blockchain Minting', status: 'active' },
//   { label: 'Initial Investors', status: 'upcoming' },
//   { label: 'Get Listed on Exchanges', status: 'upcoming' },
//   { label: 'Launch NFT / CO2TAX Sales', status: 'upcoming' },
//   { label: 'Purchase Tree Farm Facility', status: 'upcoming' },
//   { label: 'Hire Full-Time Staff', status: 'upcoming' },
//   { label: 'Phase 2: CO2 Reduction Projects', status: 'upcoming' },
//   { label: 'Explore Eco Housing Solutions', status: 'upcoming' },
//   { label: '???', status: 'mystery' },
// ];

// const getStatusStyle = (status) => {
//   switch (status) {
//     case 'complete':
//       return 'bg-green-500 border-green-500 text-white';
//     case 'active':
//       return 'bg-yellow-500 border-yellow-500 text-black';
//     case 'upcoming':
//       return 'bg-gray-800 border-gray-600 text-white';
//     case 'mystery':
//       return 'bg-purple-700 border-purple-500 text-white';
//     default:
//       return '';
//   }
// };

// const EcoMouseFlowMap = () => {
//   return (
//     <div className="overflow-x-auto py-10">
//       <div className="flex items-center gap-6 px-6 min-w-[1400px]">
//         {steps.map((step, idx) => (
//           <div key={idx} className="flex items-center gap-4">
//             <div
//               className={`w-28 h-28 rounded-full border-4 flex items-center justify-center text-center p-4 text-sm font-bold shadow-xl ${getStatusStyle(step.status)}`}
//             >
//               {step.status === 'mystery' ? <HelpCircle size={32} /> : step.label}
//               {step.status === 'complete' && (
//                 <Check className="absolute -top-2 -right-2 text-purple-400 bg-black rounded-full p-0.5 w-6 h-6" />
//               )}
//             </div>

//             {idx < steps.length - 1 && (
//               <div className="w-12 h-1 bg-[#9FFF00] rounded-full" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EcoMouseFlowMap;