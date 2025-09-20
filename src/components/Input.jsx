import { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
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
      <input
        type={type}
        className={`w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-slate-400 transition-all duration-200 outline-none ${
          type === "file" 
            ? "file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer" 
            : ""
        } ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
}

export default Input;