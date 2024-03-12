"use client";

import { createContext } from "react";

export const MaxWidthContext = createContext({});

export default function MaxWidthProvider({ children }) {
  return (
    <MaxWidthContext.Provider value="max-w-[1500px]">
      {children}
    </MaxWidthContext.Provider>
  );
}
