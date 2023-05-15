import React, { useState, FC, useEffect, ReactNode } from "react";

interface IInitialContext {
  scrollY: number;
}

let scrollY = 0;
if (typeof window !== "undefined") {
  scrollY = window.scrollY;
}
const intialContext = {
  scrollY,
  checkScroll: true
};

const ScrollContext = React.createContext<IInitialContext>(intialContext);

const VerticalScrollContextProvider = ({ children }: {children: ReactNode}) => {
  const [scrollY, setScrollY] = useState(intialContext.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  });

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

function useScrollState() {
  const context = React.useContext(ScrollContext);
  if (context === undefined) {
    throw new Error(
      "useScrollState must be used within a VerticalScrollContextProvider"
    );
  }
  return context;
}

export { VerticalScrollContextProvider, useScrollState };
