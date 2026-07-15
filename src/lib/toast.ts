import { toast } from "sonner";

export const notify = {
  success: (message: string, description?: string) =>
    toast.success(message, {
      description,
    }),

  error: (message: string, description?: string) =>
    toast.error(message, {
      description,
    }),

  warning: (message: string, description?: string) =>
    toast.warning(message, {
      description,
    }),

  info: (message: string, description?: string) =>
    toast.info(message, {
      description,
    }),

  loading: (message: string, description?: string) =>
    toast.loading(message, {
      description,
    }),

  dismiss: (id?: string | number) => toast.dismiss(id),

  promise: toast.promise,
};

export default notify;