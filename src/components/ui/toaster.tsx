import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-3">
              {/* friendly left icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-white">
                {/* simple dot/icon — keeps bundle small */}
                <span className="block h-2 w-2 rounded-full bg-white/90" />
              </div>

              <div className="min-w-0">
                {title && <ToastTitle className="text-sm font-semibold">{title}</ToastTitle>}
                {description && <ToastDescription className="text-sm opacity-90 truncate">{description}</ToastDescription>}
              </div>

              {action}
            </div>

            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
