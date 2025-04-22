"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  //fix for hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="transition-colors duration-300 min-h-screen select-none dark:bg-gray-700 dark:text-white  text-gray-700">
        {children}
      </div>
    </ThemeProvider>
  );
}
