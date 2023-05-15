import React, { useState, FC, useEffect, ReactNode } from "react";
import {
  getGithubUserData,
  IGithubUserData,
  TGithubUserDataItem
} from "../api";

interface IInitialContext {
  data: IGithubUserData;
}
const intialContext: IInitialContext = {
  data: []
};

export const GitHubContext = React.createContext<IInitialContext>(
  intialContext
);

function getFilteredData(data: IGithubUserData): IGithubUserData {
  console.log(data);
  
  return data
    .filter((item: TGithubUserDataItem) => {
      return (
        item.topics.length &&
        item.topics.find(topic => topic.toLowerCase() !== "donottrack")
      );
    })
    .slice(0, 9);
}

const VerticalGitHubContextProvider = ({ children }: {children: ReactNode}) => {
  const [data, setData] = useState(intialContext.data);

  useEffect(() => {
    async function getProjectData() {
      const data = await getGithubUserData();
      const filteredData = getFilteredData(data);
      const sorted = filteredData.sort((a, b) => a.name > b.name ? 1 : -1)

      setData(sorted);
    }
    getProjectData();
  }, []);

  return (
    <GitHubContext.Provider value={{ data }}>{children}</GitHubContext.Provider>
  );
};

export { VerticalGitHubContextProvider };


