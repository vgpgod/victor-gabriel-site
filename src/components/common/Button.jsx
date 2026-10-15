import { forwardRef } from 'react';

const Button = forwardRef(({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold text-white hover:bg-opacity-90 focus:ring-gold',
    secondary: 'bg-navy text-white hover:bg-navy-secondary focus:ring-navy',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white focus:ring-gold',
    ghost: 'text-navy hover:bg-gray-light focus:ring-navy',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
