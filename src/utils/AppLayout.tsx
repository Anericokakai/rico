
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
function AppLayout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 pb-8">
      {children}
    </div>
  );
}

export default AppLayout;
