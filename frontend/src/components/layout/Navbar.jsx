import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-carbonGray text-white p-4 flex gap-6">
      <Link to="/" className="hover:text-ecoGreen">Home</Link>
      <Link to="/dashboard" className="hover:text-ecoGreen">Dashboard</Link>
      <Link to="/nodes" className="hover:text-ecoGreen">Nodes</Link>
    </nav>
  );
};

export default Navbar;