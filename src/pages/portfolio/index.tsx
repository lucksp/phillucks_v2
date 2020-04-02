import React, { useContext, forwardRef } from "react";
import { StyledPortfolio } from "./portfolio.css";

import { GitHubContext } from "../../context/useGitHubContext";
import GitHubItem from "./GitHubItem";

export const Portfolio = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
  const { data } = useContext(GitHubContext);
  return (
    <StyledPortfolio ref={ref}>
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
});

export default Portfolio;
