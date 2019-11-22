import React, { useContext } from "react";
import { StyledPortfolio } from "./portfolio.css";

import { GitHubContext } from "../../context/useGitHubContext";
import GitHubItem from "./GitHubItem";

const Portfolio = () => {
  const { data } = useContext(GitHubContext);

  // useEffect(() => {
  //   if (data.length) {
  //     const foundFilters = data.map(filters => filters.topics).flat();
  //     setFilters(new Set(foundFilters));
  //   }
  // }, [data]);

  // const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
  // };

  return (
    <StyledPortfolio>
      <div>
        <h4>Front-End JavaScript Engineer</h4>
        <div id="item-wrapper">
          {data &&
            data.map(item => {
              return <GitHubItem item={item} key={item.id} />;
            })}
        </div>
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
