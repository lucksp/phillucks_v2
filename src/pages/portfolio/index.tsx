import React, { useEffect, useState } from "react";
import { StyledPortfolio } from "./portfolio.css";
import {
  getGithubUserData,
  IGithubUserData,
  TGithubUserDataItem
} from "../../api";

const Portfolio = () => {
  const [data, setData] = useState<IGithubUserData>([]);

  useEffect(() => {
    async function getProjectData() {
      const data = await getGithubUserData();
      const filteredData = getFilteredData(data);

      setData(filteredData);
    }
    getProjectData();
  }, []);

  return (
    <StyledPortfolio>
      <div>
        <h4>Front-End JavaScript Engineer</h4>
        <div>projects</div>
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;

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
