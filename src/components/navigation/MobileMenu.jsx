import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../utils/constants';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white hover:text-gold transition-colors"
          aria-label="Fechar menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full space-y-8" aria-label="Menu mobile">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `text-xl font-medium transition-colors ${
                isActive ? 'text-gold' : 'text-white hover:text-gold'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
