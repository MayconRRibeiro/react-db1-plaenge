import type { PropsWithChildren } from "react";

interface ComponentGroupTitleProps {
  title: string;
}

export const ComponentGroupShowCase = ({ children }: PropsWithChildren) => {
  return <div className="component-showcase">{children}</div>;
};

export const ComponentGroupTitle = ({ title }: ComponentGroupTitleProps) => {
  return <h3 className="component-title">{title}</h3>;
};

export const ComponentGroupDemo = ({ children }: PropsWithChildren) => {
  return <div className="component-demo">{children}</div>;
};
