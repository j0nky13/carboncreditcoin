// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import Investors from './pages/Investors.jsx';
// import './index.css';

// import About from './pages/About.jsx';
// import CarbonChain from './pages/CarbonChain.jsx';
// import Nodes from './pages/Nodes.jsx';
// import Merch from './pages/Merch.jsx';
// import Tokenomics from './pages/Tokenomics.jsx';
// import Investors from './pages/Investors.jsx';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/investors" element={<Investors />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import About from './pages/About.jsx';
import CarbonChain from './pages/CarbonChain.jsx';
import Nodes from './pages/Nodes.jsx';
import Merch from './pages/Merch.jsx';
import Tokenomics from './pages/Tokenomics.jsx';
import Investors from './pages/Investors.jsx';
import './index.css';
import HowItWorks from './pages/HowItWorks.jsx';
import Launch from './pages/Launch.jsx';
import Dashboard from './pages/Dashboard.jsx';
import LoginWrapper from './pages/LoginWrapper.jsx';
import ChainStatus from './pages/ChainStatus';

import NodesDashboard from './pages/NodesDashboard.jsx';


import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
<Route path="/login" element={<LoginWrapper />} />        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/carbonchain" element={<CarbonChain />} />
        <Route path="/nodes" element={<Nodes />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/chain-status" element={<ChainStatus />} />
        <Route path="/dashboard/nodesdashboard" element={<ProtectedRoute><NodesDashboard /></ProtectedRoute>} />      </Routes>
            </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);