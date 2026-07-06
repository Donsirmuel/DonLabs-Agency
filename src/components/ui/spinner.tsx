import * as React from "react";

interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number; // px
  label?: string;
}

export const Spinner = ({ size = 16, label = "Loading", className, ...props }: SpinnerProps) => {
  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label}
      className={className}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block align-middle animate-spin motion-reduce:animate-none"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.15" />
        <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </span>
  );
};

export default Spinner;
