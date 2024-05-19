import { ComponentProps, ReactNode } from "react";

type StyledTextProps = ComponentProps<"span"> & {
  children: ReactNode;
};

export function GradientText({ children, ...props }: StyledTextProps) {
  return (
    <span
      {...props}
      className="bg-gradient-to-r from-blue-500 to-baby-blue text-transparent bg-clip-text"
    >
      {children}
    </span>
  );
}

export function HighlightedText({ children, ...props }: StyledTextProps) {
  return (
    <span {...props} className="bg-yellow-300 bg-opacity-20">
      {children}
    </span>
  );
}
