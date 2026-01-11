import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "neon"
    | "whatsapp"
    | "ghost"
    | "glass";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
  rounded?: "sm" | "md" | "lg" | "full";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  rounded = "full",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants: Record<string, string> = {
    primary:
      "bg-[#10b3bc] text-white shadow-[0_0_20px_rgba(16,179,188,0.3)] hover:bg-[#0e9fa7] hover:shadow-[0_0_25px_rgba(16,179,188,0.5)]",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    glass:
      "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
    outline:
      "bg-transparent text-white border-2 border-white/30 hover:border-[#10b3bc] hover:text-[#10b3bc]",
    neon: "bg-transparent text-[#10b3bc] border border-[#10b3bc]/50 shadow-[0_0_15px_rgba(16,179,188,0.2)] hover:bg-[#10b3bc] hover:text-white hover:shadow-[0_0_25px_rgba(16,179,188,0.6)]",
    whatsapp:
      "bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#22c35e] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-1.5 text-xs sm:text-sm",
    md: "px-6 py-2.5 text-sm sm:text-base",
    lg: "px-8 py-3.5 text-base sm:text-lg",
    xl: "px-10 py-4 text-lg sm:text-xl",
  };

  const roundedClasses: Record<string, string> = {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${roundedClasses[rounded]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
