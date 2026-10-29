"use client";

import { usePathname } from "next/navigation";

export function StepTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="step-enter">
      {children}
    </div>
  );
}
