import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import TestnetCountdown from '../components/TestnetCountdown';

import {
  ShieldCheck,
  Blocks,
  Wallet,
  TreeDeciduous,
  Repeat2,
  Network,
  Server,
} from 'lucide-react';

const mockData = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 50 },
  { name: 'Wed', value: 40 },
  { name: 'Thu', value: 60 },
  { name: 'Fri', value: 20 },
  { name: 'Sat', value: 70 },
  { name: 'Sun', value: 55 },
];

const mockNodes = [
  {
    id: 'Node 01',
    status: 'Online',
    uptime: '99.98%',
    peers: 12,
    version: 'v0.50.0',
  },
  {
    id: 'Node 02',
    status: 'Offline',
    uptime: '0%',
    peers: 0,
    version: 'v0.50.0',
  },
  {
    id: 'Node 03',
    status: 'Online',
    uptime: '98.72%',
    peers: 8,
    version: 'v0.50.0',
  },
];

const StatCard = ({ icon: Icon, title, value, children }) => (
  <div className="bg-gray-800 text-lime-400 p-6 rounded-xl shadow-md w-full max-w-sm mx-auto flex flex-col items-center text-center">
    <div className="flex flex-col items-center justify-center mb-2">
      <Icon size={26} className="mb-1" />
      <h3 className="font-semibold text-white text-sm">{title}</h3>
    </div>
    <p className="text-3xl font-bold">{value}</p>
    {children}
  </div>
);

const NodeCard = ({ node }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm mx-auto text-center text-white">
    <div className="flex items-center justify-center space-x-2 text-lime-400 mb-2">
      <Server size={22} />
      <h3 className="font-semibold">{node.id}</h3>
    </div>
    <p className={`text-sm mb-1 ${node.status === 'Online' ? 'text-green-400 animate-pulse' : 'text-red-400 animate-pulse'}`}>● {node.status}</p>
    <p className="text-sm text-gray-300">Uptime: {node.uptime}</p>
    <p className="text-sm text-gray-300">Peers: {node.peers}</p>
    <p className="text-sm text-gray-300 mb-3">Version: {node.version}</p>
    <button className="mt-2 bg-lime-500 hover:bg-lime-400 text-black font-semibold px-4 py-1 rounded text-sm">Restart Node</button>
  </div>
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const onlineNodes = mockNodes.filter((node) => node.status === 'Online').length;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mt-10 mb-4">Welcome back, Jonkyle!</h2>
            <p className="text-gray-400">Here's a summary of your activity on CarbonChain.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <StatCard icon={Wallet} title="Total CO2TAX Earned" value="1,250" />
              <StatCard icon={TreeDeciduous} title="Trees Committed" value="13" />
              <StatCard icon={Repeat2} title="Recent Transactions" value="6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <StatCard icon={Network} title="Node Status" value={`${onlineNodes} of ${mockNodes.length} Online`}>
                <p className="text-sm text-white mt-1">Average Uptime: 98.9%</p>
              </StatCard>
              <StatCard icon={ShieldCheck} title="Validator Status" value="Eligible">
                <button className="mt-2 bg-lime-500 text-black font-semibold px-4 py-1 rounded text-sm">Become a Validator</button>
              </StatCard>
              <StatCard icon={Blocks} title="Chain Info" value="v0.50.0">
                <p className="text-sm text-white mt-1">Synced: Yes</p>
                <p className="text-sm text-white">Last Sync: 4/17/2025</p>
                <p className="text-sm text-green-400 font-semibold">Status: Online</p>
              </StatCard>
            </div>

            <TestnetCountdown />

            <div className="mt-10">
              <h3 className="text-white font-bold mb-2">Node Activity</h3>
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

      // case 'nodes':
      //   return (
      //     <div className="mt-10 px-6 text-center">
      //       <h2 className="text-2xl font-bold mb-2">Your Nodes</h2>
      //       <p className="text-gray-400 mb-6">Monitor and control nodes you've launched on CarbonChain.</p>
      //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      //         {mockNodes.map((node) => (
      //           <NodeCard key={node.id} node={node} />
      //         ))}
      //         <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm mx-auto flex flex-col items-center justify-center text-lime-400 font-bold text-sm cursor-pointer hover:bg-gray-700">
      //           + Add Validator
      //         </div>
      //       </div>
      //     </div>
      //   );

case 'nodes':
  const isEligible = true; // Replace with real logic later
  return (
    <div className="mt-10 px-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Your Nodes</h2>
      <p className="text-gray-400 mb-6">Monitor and control your launched nodes.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNodes.map((node) => (
          <NodeCard key={node.id} node={node} />
        ))}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm mx-auto flex flex-col items-center justify-center text-lime-400 font-bold text-sm cursor-pointer hover:bg-gray-700">
          + Add Node
        </div>
      </div>

      {isEligible && (
        <>
          <h2 className="text-2xl font-bold mt-12 mb-2">Your Validators</h2>
          <p className="text-gray-400 mb-6">Manage your active validators.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for validator cards – can reuse NodeCard with slight changes */}
            <NodeCard node={{ id: 'Validator 01', status: 'Online', uptime: '99.9%', peers: 16, version: 'v0.50.0' }} />
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm mx-auto flex flex-col items-center justify-center text-lime-400 font-bold text-sm cursor-pointer hover:bg-gray-700">
              + Add Validator
            </div>
          </div>
        </>
      )}
    </div>
  );



      case 'ico':
        return (
          <div className="mt-10 px-6 text-center">
            <h2 className="text-2xl font-bold mb-2">ICO Overview</h2>
            <p className="text-gray-400 mb-4">Track your contributions and performance during the ICO phase.</p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <StatCard icon={Repeat2} title="Your Transactions" value="8" />
              <StatCard icon={Wallet} title="Projected CO2TAX Reward" value="4,000" />
              <StatCard icon={Blocks} title="Time Remaining" value="5d 3h" />
              <StatCard icon={Network} title="Node Rank" value="Top 15%" />
            </div>
            <div className="bg-gray-800 p-4 rounded-xl max-w-3xl mx-auto mt-10">
              <h3 className="text-xl font-bold text-white mb-2">Referral Program</h3>
              <p className="text-sm text-gray-300 mb-2">Share this link to earn bonus CO2TAX:</p>
              <div className="bg-gray-900 p-2 rounded flex justify-between items-center">
                <span className="text-sm text-lime-400">carboncredit.tax/referral/abc123</span>
                <button className="text-xs text-black bg-lime-500 px-2 py-1 rounded">Copy</button>
              </div>
            </div>
            <div className="mt-6 max-w-3xl mx-auto border border-gray-700 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Leaderboard</h3>
              <table className="w-full text-sm text-left text-gray-300">
                <thead>
                  <tr className="border-b border-gray-600 text-lime-400">
                    <th className="py-2 px-4">Rank</th>
                    <th className="py-2 px-4">User</th>
                    <th className="py-2 px-4">CO2TAX Earned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">userA</td>
                    <td className="py-2 px-4">12,000</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">userB</td>
                    <td className="py-2 px-4">10,500</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">3</td>
                    <td className="py-2 px-4">you</td>
                    <td className="py-2 px-4">4,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="text-left mt-10 px-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Profile</h2>
            <div className="bg-gray-800 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-lime-400 mb-4">Account Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                <p><strong>Username:</strong> Jonkyle</p>
                <p><strong>Email:</strong> jonkyle@example.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Address:</strong> 123 Carbon Lane, EcoCity, EC 45678</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-lime-400 mb-4">Wallets</h3>
              <input className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white mb-2" type="text" placeholder="Enter your CO2TAX Wallet Address" />
              <input className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white" type="text" placeholder="Enter your USDC Wallet Address" />
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-lime-400 mb-4">Purchase History</h3>
              <ul className="text-sm text-gray-300 divide-y divide-gray-700">
                <li className="py-2">Node Kit - $99 - Purchased on 2025-03-22</li>
                <li className="py-2">Validator Slot - $199 - Purchased on 2025-03-25</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0e0f11] min-h-screen text-white p-6">
      <div className="max-w-[1120px] mx-auto flex justify-between items-center pb-6 border-b border-gray-700">
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

      <div className="max-w-[1120px] mx-auto flex justify-center mt-4 space-x-4 flex-wrap">
        <button onClick={() => setActiveTab('overview')} className={`px-4 py-1 rounded font-semibold ${activeTab === 'overview' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}>Overview</button>
        <button onClick={() => setActiveTab('nodes')} className={`px-4 py-1 rounded font-semibold ${activeTab === 'nodes' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}>Nodes</button>
        <button onClick={() => setActiveTab('ico')} className={`px-4 py-1 rounded font-semibold ${activeTab === 'ico' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}>ICO</button>
        <button onClick={() => setActiveTab('profile')} className={`px-4 py-1 rounded font-semibold ${activeTab === 'profile' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}>Profile</button>
      </div>

      <div className="w-full max-w-[1120px] mx-auto">
        {renderTabContent()}
      </div>
    </div>
  );
}