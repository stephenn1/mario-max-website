"use client";

import { CircleCheck } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type ToastContextValue = { show: (message: string) => void };

const ToastContext = createContext<ToastContextValue>({ show: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

/** Lightweight toast feedback, announced politely to screen readers. */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((next: string) => {
    if (timer.current) clearTimeout(timer.current);
    setMessage(next);
    timer.current = setTimeout(() => setMessage(null), 3200);
  }, []);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div aria-live="polite" role="status" className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
        {message ? (
          <div className="flex items-center gap-2 rounded-btn bg-primary px-4 py-3 text-sm font-medium text-white shadow-sh3">
            <CircleCheck aria-hidden="true" className="size-4 text-gold" />
            {message}
          </div>
        ) : null}
      </div>
    </ToastContext.Provider>
  );
}
