// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import logo from '../assets/logo.png';

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <nav className="bg-black border-b border-gray-700 text-white sticky top-0 z-50">
//       <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
//         {/* Logo + Brand */}
//         <Link to="/" className="flex items-center gap-3">
//           <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
//           <span className="text-primary font-bold text-2xl sm:text-3xl">Carbon Credit Coin</span>
//         </Link>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-6 text-base items-center">
//           <li><Link to="/about" className="hover:text-primary">About</Link></li>
//           <li><Link to="/carbonchain" className="hover:text-primary">CarbonChain</Link></li>
//           <li><Link to="/merch" className="hover:text-primary">Merch</Link></li>
//           <li><Link to="/login" className="hover:text-primary">Login</Link></li>

//           {/* More Dropdown */}
//           <li className="relative">
//             <button onClick={toggleDropdown} className="hover:text-primary py-2 inline-flex items-center gap-1">
//               More <ChevronDown size={16} />
//             </button>
//             {dropdownOpen && (
//               <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col bg-black border border-gray-700 rounded shadow-lg text-sm min-w-[180px] z-50 w-max max-w-[90vw]">
//                 <Link to="/how-it-works" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>How It Works</Link>
//                 <Link to="/tokenomics" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Tokenomics</Link>
//                 <Link to="/nodes" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Nodes</Link>
//                 <Link to="/investors" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Investors</Link>
//               </div>
//             )}
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button onClick={toggleMenu} className="md:hidden text-white">
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden px-6 pb-4">
//           <ul className="flex flex-col gap-3 text-base">
//             <li><Link to="/about" onClick={toggleMenu} className="hover:text-primary">About</Link></li>
//             <li><Link to="/carbonchain" onClick={toggleMenu} className="hover:text-primary">CarbonChain</Link></li>
//             <li><Link to="/merch" onClick={toggleMenu} className="hover:text-primary">Merch</Link></li>
//             <li><Link to="/login" onClick={toggleMenu} className="hover:text-primary">Login</Link></li>
//             <li><Link to="/how-it-works" onClick={toggleMenu} className="hover:text-primary">How It Works</Link></li>
//             <li><Link to="/tokenomics" onClick={toggleMenu} className="hover:text-primary">Tokenomics</Link></li>
//             <li><Link to="/nodes" onClick={toggleMenu} className="hover:text-primary">Nodes</Link></li>
//             <li><Link to="/investors" onClick={toggleMenu} className="hover:text-primary">Investors</Link></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Wrench } from 'lucide-react';
import logo from '../assets/logo.png';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-black border-b border-gray-700 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-primary font-bold text-2xl sm:text-3xl">Carbon Credit Coin</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-base items-center">
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/carbonchain" className="hover:text-primary">CarbonChain</Link></li>
          <li><Link to="/merch" className="hover:text-primary">Merch</Link></li>
          <li><Link to="/login" className="hover:text-primary">Login</Link></li>

          {/* More Dropdown */}
          <li className="relative">
            <button onClick={toggleDropdown} className="hover:text-primary py-2 inline-flex items-center gap-1">
              More <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col bg-black border border-gray-700 rounded shadow-lg text-sm min-w-[180px] z-50 w-max max-w-[90vw]">
                <Link to="/how-it-works" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>How It Works</Link>
                <Link to="/tokenomics" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Tokenomics</Link>
                <Link to="/nodes" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Nodes</Link>
                <Link to="/investors" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Investors</Link>
              </div>
            )}
          </li>

          {/* Dev Tools Dropdown - Desktop Only */}
          {import.meta.env.DEV && (
            <li className="relative">
              <button onClick={toggleDropdown} className="hover:text-primary py-2 inline-flex items-center gap-1">
                <Wrench size={16} />
                Dev Tools <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col bg-black border border-gray-700 rounded shadow-lg text-sm min-w-[180px] z-50 w-max max-w-[90vw]">
                  <Link to="/branding" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Branding Colors</Link>
                  <Link to="/chain-status" className="block px-4 py-2 hover:bg-primary/10 whitespace-nowrap" onClick={() => setDropdownOpen(false)}>Chain Status</Link>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3 text-base">
            <li><Link to="/about" onClick={toggleMenu} className="hover:text-primary">About</Link></li>
            <li><Link to="/carbonchain" onClick={toggleMenu} className="hover:text-primary">CarbonChain</Link></li>
            <li><Link to="/merch" onClick={toggleMenu} className="hover:text-primary">Merch</Link></li>
            <li><Link to="/login" onClick={toggleMenu} className="hover:text-primary">Login</Link></li>
            <li><Link to="/how-it-works" onClick={toggleMenu} className="hover:text-primary">How It Works</Link></li>
            <li><Link to="/tokenomics" onClick={toggleMenu} className="hover:text-primary">Tokenomics</Link></li>
            <li><Link to="/nodes" onClick={toggleMenu} className="hover:text-primary">Nodes</Link></li>
            <li><Link to="/investors" onClick={toggleMenu} className="hover:text-primary">Investors</Link></li>

            {/* Dev Tools - Mobile Only */}
            {import.meta.env.DEV && (
              <>
                <li className="mt-2 font-semibold text-white/80">Dev Tools</li>
                <li><Link to="/branding" onClick={toggleMenu} className="hover:text-primary">Branding Colors</Link></li>
                <li><Link to="/chain-status" onClick={toggleMenu} className="hover:text-primary">Chain Status</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;