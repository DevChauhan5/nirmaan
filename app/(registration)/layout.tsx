import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "NIRMAAN'24 - Registration",
    description: "Technical Festival of Poornima University",
  };

const RegistraionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-4 lg:px-8">
        {children}
    </main>
  );
};

export default RegistraionLayout;
