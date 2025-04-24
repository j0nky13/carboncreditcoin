
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Nodes from './pages/Nodes';
import ICO from './pages/ICO';
import Account from './pages/Account';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import DevToolsPanel from './components/dev/DevToolsPanel';
import Branding from './pages/Branding';

function App() {
  return (
    <Router>
      <div className="bg-dark min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nodes" element={<Nodes />} />
          <Route path="/ico" element={<ICO />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <DevToolsPanel />
      </div>
    </Router>
  );
}

export default App;
