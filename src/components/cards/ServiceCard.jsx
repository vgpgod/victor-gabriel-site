import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, to, className = '' }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-gold" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-gray-text mb-4">{description}</p>
      {to && (
        <Link
          to={to}
          className="inline-flex items-center text-gold font-medium hover:text-navy transition-colors"
        >
          Saiba mais
          <ArrowRight size={16} className="ml-2" />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
