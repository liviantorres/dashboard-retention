import React, { useState } from 'react';
import { Eye, EyeClosed, EyeOff } from 'lucide-react';

export default function Input({ id, placeholder, type, icon: Icon, ...props }) {

  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';
  const currentType = isPasswordType && showPassword ? 'text' : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={currentType}
        placeholder={placeholder}
        {...props}
        className="w-full px-6 py-3 
            text-gray-800 
            placeholder-gray-400 
            rounded-full border border-gray-300
            bg-white
            shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] 
            
            focus:outline-none 
            focus:border-transparent
            
            focus:bg-[linear-gradient(white,white),linear-gradient(to_right,#f87171,#a855f7,#4ade80)]
            [background-origin:border-box]
            [background-clip:padding-box,_border-box]

            pr-12 font-bahianita text-xl
            transition-all duration-200"
      />
      
      {isPasswordType ? (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer focus:outline-none"
        >
          {showPassword ? (
            <EyeClosed className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      ) : (
        Icon && (
          <Icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
        )
      )}
    </div>
  );
}