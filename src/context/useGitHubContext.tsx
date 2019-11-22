import React, { useState, FC, useEffect } from "react";
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

const VerticalGitHubContextProvider: FC = ({ children }) => {
  const [data, setData] = useState(intialContext.data);

  useEffect(() => {
    async function getProjectData() {
      const data = await getGithubUserData();
      const filteredData = getFilteredData(data);

      setData(filteredData);
    }
    getProjectData();
  }, []);

  return (
    <GitHubContext.Provider value={{ data }}>{children}</GitHubContext.Provider>
  );
};

export { VerticalGitHubContextProvider };

function getFilteredData(data: IGithubUserData): IGithubUserData {
  return data
    .filter((item: TGithubUserDataItem) => {
      return (
        item.topics.length &&
        item.topics.find(topic => topic.toLowerCase() !== "donottrack")
      );
    })
    .slice(0, 9);
}
