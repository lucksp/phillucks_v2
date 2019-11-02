import React, { useState, FC, useEffect } from "react";
import { debounce } from "../utils";
import { func } from "prop-types";

interface IInitialContext {
  scrollY: number;
}
const intialContext = {
  scrollY: window.scrollY,
  checkScroll: true
};

const ScrollContext = React.createContext<IInitialContext>(intialContext);

const VerticalScrollContextProvider: FC = ({ children }) => {
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

function removeEventListener() {
  const context = React.useContext(ScrollContext);
}

export { VerticalScrollContextProvider, useScrollState };
