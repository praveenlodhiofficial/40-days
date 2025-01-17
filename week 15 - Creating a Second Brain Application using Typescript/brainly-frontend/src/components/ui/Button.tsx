import React, { ReactElement } from "react";

// ---------------------------------------> INTERFACE

export interface ButtonProps {
  variant: Variant;
  title: string | ReactElement;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  size: "sm" | "md" | "lg";
  onClick: () => void;
}

type Variant = "primary" | "secondary";

// ---------------------------------------> VARIANT STYLES

const variantStyles = {
  primary: "text-purple-600 bg-purple-300 min-w-36",
  secondary: "text-purple-300 bg-purple-600 min-w-36",
};

const sizeStyles = {
  sm: "px-2 py-1 text-xs rounded-sm",
  md: "px-4 py-2 text-sm rounded-md",
  lg: "px-6 py-3 text-md rounded-lg",
};

// ---------------------------------------> EXPORT FUNCTION

export const Button: React.FC<ButtonProps> = ({ variant, title, startIcon, endIcon, size, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {startIcon} {title} {endIcon}
    </button>
  );
};
