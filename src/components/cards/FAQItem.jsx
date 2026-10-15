import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-navy pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-gold flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-gold flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-light text-gray-text">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
