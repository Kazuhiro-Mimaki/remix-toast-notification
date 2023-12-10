import { Toast } from "~/components/toast";
import type { ReactNode } from "react";
import { createContext, useState } from "react";

type ToastContextType = {
  toast: string;
  showToast: (toast: string) => void;
};

export const ToastContext = createContext<ToastContextType>({
  toast: "",
  showToast: () => 0,
});

type Props = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState("");

  const showToast = (toast: string) => {
    setToast(toast);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {toast && <Toast message={toast} />}
      {children}
    </ToastContext.Provider>
  );
};
