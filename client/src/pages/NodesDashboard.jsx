import React from 'react';
import { Server, SignalHigh, RefreshCw } from 'lucide-react';

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

const NodeCard = ({ node }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm mx-auto text-center text-white">
      <div className="flex items-center justify-center space-x-2 text-lime-400 mb-2">
        <Server size={22} />
        <h3 className="font-semibold">{node.id}</h3>
      </div>
      <p className={`text-sm mb-1 ${node.status === 'Online' ? 'text-green-400' : 'text-red-400'}`}>
        ● {node.status}
      </p>
      <p className="text-sm text-gray-300">Uptime: {node.uptime}</p>
      <p className="text-sm text-gray-300">Peers: {node.peers}</p>
      <p className="text-sm text-gray-300 mb-3">Version: {node.version}</p>
      <button className="mt-2 bg-lime-500 hover:bg-lime-400 text-black font-semibold px-4 py-1 rounded text-sm">
        Restart Node
      </button>
    </div>
  );
};

export default function NodesPage() {
  return (
    <div className="bg-[#0e0f11] min-h-screen text-white px-6 py-8">
      <div className="flex justify-between items-center pb-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="CO2TAX Logo" className="w-8 h-8" />
          <h1 className="text-lime-400 text-xl font-bold">Node Management</h1>
        </div>
        <div className="space-x-4">
          <a href="/dashboard" className="hover:underline">Back to Dashboard</a>
        </div>
      </div>

      <div className="text-center my-6">
        <h2 className="text-2xl font-bold">Your Nodes</h2>
        <p className="text-gray-400">Monitor and control nodes you've launched on CarbonChain.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6">
        {mockNodes.map((node) => (
          <NodeCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}
