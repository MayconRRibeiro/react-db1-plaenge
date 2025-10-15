import type { PropsWithChildren } from "react";
import "./Alert.css";

interface AlertProps {
  variant?: "default" | "destructive" | "warning" | "success";
}

export const Alert = ({
  variant = "default",
  children,
}: PropsWithChildren<AlertProps>) => {
  return <div className={`alert alert-${variant}`}>{children}</div>;
};

export const AlertTitle = ({ children }: PropsWithChildren) => {
  return <h5 className="alert-title">{children}</h5>;
};

export const AlertDescription = ({ children }: PropsWithChildren) => {
  return <div className="alert-description">{children}</div>;
};
