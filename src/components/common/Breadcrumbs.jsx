import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-text py-4" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight size={16} className="mx-2" />}
          {item.to ? (
            <Link to={item.to} className="hover:text-gold transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
