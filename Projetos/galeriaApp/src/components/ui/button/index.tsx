import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
}

export const Button = ({
  children,
  size = "default",
  variant = "default",
  disabled,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`btn btn-${size} btn-${variant} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
