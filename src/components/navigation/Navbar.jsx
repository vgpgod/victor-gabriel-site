import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../utils/constants';

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
      {NAVIGATION_LINKS.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive ? 'text-gold' : 'text-white hover:text-gold'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
