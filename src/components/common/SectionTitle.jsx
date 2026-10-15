const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignments[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-text max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
