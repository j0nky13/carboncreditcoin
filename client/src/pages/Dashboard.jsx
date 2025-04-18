// // src/pages/Dashboard.jsx
// import React from 'react';
// import { Copy } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';

// function Dashboard() {
//   const { user } = useAuth();

//   const handleCopy = () => {
//     navigator.clipboard.writeText(user.referral);
//   };

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-20">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-primary mb-6">Welcome, {user.name}</h1>

//         <div className="grid md:grid-cols-2 gap-6 mb-10">
//           {/* ICO Contribution Status */}
//           <div className="bg-gray-900 rounded-lg p-6 shadow">
//             <h2 className="text-xl font-semibold mb-2">ICO Contribution</h2>
//             <p className="text-gray-400 text-sm mb-1">Total CO2TAX Purchased</p>
//             <p className="text-2xl font-bold text-primary">{user.icoTotal.toLocaleString()}</p>
//           </div>

//           {/* Wallet Info */}
//           <div className="bg-gray-900 rounded-lg p-6 shadow">
//             <h2 className="text-xl font-semibold mb-2">Wallet Info</h2>
//             <p className="text-gray-400 text-sm mb-1">Connected Wallet</p>
//             <p className="text-sm font-mono text-lime-400 truncate">{user.wallet}</p>
//           </div>
//         </div>

//         {/* Referral */}
//         <div className="bg-gray-900 rounded-lg p-6 mb-10 shadow">
//           <h2 className="text-xl font-semibold mb-2">Referral Link</h2>
//           <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
//             <span className="text-sm font-mono text-lime-400 truncate">{user.referral}</span>
//             <button onClick={handleCopy} className="ml-4 text-sm bg-primary text-black px-3 py-1 rounded hover:bg-lime-300 flex items-center gap-1">
//               <Copy size={16} /> Copy
//             </button>
//           </div>
//         </div>

//         {/* Placeholder for Nodes */}
//         <div className="bg-gray-900 rounded-lg p-6 shadow mb-10">
//           <h2 className="text-xl font-semibold mb-2">Validator / Node Status</h2>
//           <p className="text-sm text-gray-400">Coming soon: Real-time node stats and rewards tracking.</p>
//         </div>

//         {/* Countdown */}
//         <div className="bg-gray-900 rounded-lg p-6 shadow text-center">
//           <h2 className="text-xl font-semibold mb-4">ICO Ends In</h2>
//           <p className="text-3xl font-bold text-primary">04d : 12h : 35m : 48s</p>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Dashboard;
// ------------------------shit below this LOL --
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
//       <div className="text-center max-w-2xl bg-gray-800 rounded-2xl shadow-xl p-10">
//         <h1 className="text-4xl font-bold mb-4 text-lime-400">Welcome to Your Dashboard</h1>
//         <p className="text-gray-300 text-lg mb-6">
//           You’re now authenticated and ready to manage your ICO contributions, merch purchases, and node activity.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Link
//             to="/merch"
//             className="bg-lime-600 hover:bg-lime-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
//           >
//             View Merch
//           </Link>

//           <Link
//             to="/node-dashboard"
//             className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
//           >
//             Node Dashboard
//           </Link>

//           <Link
//             to="/account"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
//           >
//             Account Settings
//           </Link>

//           <Link
//             to="/"
//             className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
//           >
//             Logout
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// Updated Dashboard.jsx with cleaner layout
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldCheck, Blocks, Wallet, TreeDeciduous, Repeat2, Network } from 'lucide-react';

const mockData = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 50 },
  { name: 'Wed', value: 40 },
  { name: 'Thu', value: 60 },
  { name: 'Fri', value: 20 },
  { name: 'Sat', value: 70 },
  { name: 'Sun', value: 55 }
];

const StatCard = ({ icon: Icon, title, value }) => (
  <div className="bg-gray-800 text-lime-400 p-6 rounded-xl shadow-md w-full flex flex-col items-center text-center">
    <div className="flex flex-col items-center justify-center mb-2">
      <Icon size={26} className="mb-1" />
      <h3 className="font-semibold text-white text-sm">{title}</h3>
    </div>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="bg-[#0e0f11] min-h-screen text-white p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center pb-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="CO2TAX Logo" className="w-8 h-8" />
          <h1 className="text-lime-400 text-xl font-bold">CO2TAX Dashboard</h1>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/merch" className="hover:underline">Merch</Link>
          <Link to="/" className="text-red-400 hover:underline">Logout</Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4">
        <button className="bg-lime-500 text-black font-semibold px-4 py-1 rounded">Overview</button>
        <button className="bg-gray-700 px-4 py-1 rounded">Nodes</button>
        <button className="bg-gray-700 px-4 py-1 rounded">ICO</button>
        <button className="bg-gray-700 px-4 py-1 rounded">Profile</button>
      </div>

      {/* Greeting */}
      <div className="mt-8 mb-4 px-6 text-center">
        <h2 className="text-2xl font-bold">Welcome back, Jonkyle!</h2>
        <p className="text-gray-400">Here's a summary of your activity on CarbonChain.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 px-32">
        <StatCard icon={Wallet} title="Total CO2TAX Earned" value="1,250" />
        <StatCard icon={TreeDeciduous} title="Trees Committed" value="13" />
        <StatCard icon={Repeat2} title="Recent Transactions" value="6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 mt-4 px-32">
        <div className="bg-gray-800 p-6 rounded-xl w-full text-center">
          <div className="flex flex-col items-center text-lime-400 mb-2">
            <Network size={26} className="mb-1" />
            <h3 className="font-semibold text-white text-sm">Node Status</h3>
          </div>
          <p className="text-green-500">• Online</p>
          <p className="text-sm text-gray-400">Block: 50482 | Uptime: 99.99%</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl w-full text-center">
          <div className="flex flex-col items-center text-lime-400 mb-2">
            <ShieldCheck size={26} className="mb-1" />
            <h3 className="font-semibold text-white text-sm">Validator Status</h3>
          </div>
          <button className="bg-lime-500 text-black font-bold px-4 py-1 rounded mt-1">Become a Validator</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl w-full text-center">
          <div className="flex flex-col items-center text-lime-400 mb-2">
            <Blocks size={26} className="mb-1" />
            <h3 className="font-semibold text-white text-sm">Chain Info</h3>
          </div>
          <p className="text-sm">Version: v0.50.0</p>
          <p className="text-sm">Synced: Yes</p>
          <p className="text-sm">Updated: 4/17/2025</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-10 px-32">
        <h3 className="text-white font-bold mb-2 text-center">Node Activity</h3>
        <div className="bg-gray-800 rounded-xl p-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={mockData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }} />
              <Bar dataKey="value" fill="#A3E635" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
