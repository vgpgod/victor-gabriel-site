import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Navbar from '../navigation/Navbar';
import MobileMenu from '../navigation/MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-navy text-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-3xl font-bold text-gold">V</span>
              <span className="text-xl font-semibold group-hover:text-gold transition-colors">
                Victor Gabriel
              </span>
            </Link>

            <Navbar />

            <div className="flex items-center space-x-4">
              <Link
                to="/contato"
                className="hidden md:inline-flex bg-gold text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Fale comigo
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-white hover:text-gold transition-colors"
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
