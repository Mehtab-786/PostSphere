import { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  
  return (
    <div className="w-full">
      {label && (
        <label 
          className="block text-sm font-semibold text-slate-700 mb-2" 
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          {...props}
          ref={ref}
          className={`w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-slate-400 transition-all duration-200 outline-none appearance-none cursor-pointer font-medium ${className}`}
        >
          {options?.map((option) => (
            <option 
              key={option} 
              value={option} 
              className="bg-white text-slate-900 py-2"
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className="w-5 h-5 text-slate-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Select;