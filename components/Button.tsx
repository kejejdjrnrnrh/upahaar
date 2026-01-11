import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-3 px-8 transition-all duration-300 font-sans tracking-wide font-medium flex items-center justify-center gap-2 rounded-sm";
  
  const variants = {
    primary: "bg-terracotta-800 text-white hover:bg-terracotta-900 shadow-md hover:shadow-lg",
    secondary: "bg-sage text-white hover:opacity-90",
    outline: "border-2 border-terracotta-800 text-terracotta-800 hover:bg-terracotta-50",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};