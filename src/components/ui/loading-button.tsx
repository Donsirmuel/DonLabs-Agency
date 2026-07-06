import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";

type LoadingButtonProps = ButtonProps & {
  isLoading?: boolean;
  loadingText?: string;
};

export const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ isLoading = false, loadingText = "Loading…", children, ...props }, ref) => {
    return (
      <Button {...props} ref={ref} loading={isLoading}>
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Spinner size={16} />
            <span>{loadingText}</span>
          </span>
        ) : (
          children
        )}
      </Button>
    );
  },
);

LoadingButton.displayName = "LoadingButton";

export default LoadingButton;
