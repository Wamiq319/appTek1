import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          className={`peer w-full border border-gray-200 rounded-xl px-3 pt-6 pb-2 text-gray-700 focus:ring-2 focus:ring-[#10BCBC] outline-none bg-white transition-all min-h-[120px] ${
            error ? "border-red-500" : "border-gray-200"
          } ${className}`}
          placeholder=" "
          {...props}
        />
        {label && (
          <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#10BCBC]">
            {label}
          </label>
        )}
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
