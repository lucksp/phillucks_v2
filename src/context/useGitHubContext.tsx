import React, { useState, FC, useEffect } from "react";
import { getGithubUserData } from "../api";

interface IInitialContext {}
const intialContext = {};

const GitHubContext = React.createContext<IInitialContext>(intialContext);

const VerticalGitHubContextProvider: FC = ({ children }) => {
  useEffect(() => {
    async function getGitHubData() {
      await getGithubUserData();
    }

    getGitHubData();
  }, []);

  return (
    <GitHubContext.Provider value={GitHubContext}>
      {children}
    </GitHubContext.Provider>
  );
};

export { VerticalGitHubContextProvider };
