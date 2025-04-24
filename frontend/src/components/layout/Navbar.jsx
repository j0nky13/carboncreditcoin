
// src/components/layout/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-6 py-4 border-b border-ecoGreen">
      <h1 className="text-2xl font-bold text-ecoGreen">Carbon Credit Coin</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/nodes">Nodes</Link>
        <Link to="/ico">ICO</Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;