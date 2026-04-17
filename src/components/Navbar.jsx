import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-tight text-emerald-700">KeenKeeper</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1.5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 rounded-2xl font-medium text-base transition-all ${
                  isActive ? 'bg-emerald-700 text-white shadow' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Home size={22} /> Home
            </NavLink>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 rounded-2xl font-medium text-base transition-all ${
                  isActive ? 'bg-emerald-700 text-white shadow' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Clock size={22} /> Timeline
            </NavLink>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 rounded-2xl font-medium text-base transition-all ${
                  isActive ? 'bg-emerald-700 text-white shadow' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <BarChart3 size={22} /> Stats
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white border rounded-3xl shadow-lg py-4 px-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-4 rounded-2xl font-medium text-base mb-2 ${
                  isActive ? 'bg-emerald-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Home size={24} /> Home
            </NavLink>
            <NavLink
              to="/timeline"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-4 rounded-2xl font-medium text-base mb-2 ${
                  isActive ? 'bg-emerald-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Clock size={24} /> Timeline
            </NavLink>
            <NavLink
              to="/stats"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-4 rounded-2xl font-medium text-base ${
                  isActive ? 'bg-emerald-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <BarChart3 size={24} /> Stats
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}