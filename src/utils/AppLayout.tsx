
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
function AppLayout({ children }: LayoutProps) {
  return (
    <div className="mx-auto  w-full  place-items-center max-w-5xl sm:px-6 pb-8  md:max-w-7xl">
      {children}
    </div>
  );
}

export default AppLayout;
