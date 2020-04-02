import React from "react";
import { TGithubUserDataItem } from "../../api";
import { StyledGHCard, StyledGHBodyItem, StyledGHPill } from "./githubItem.css";

export interface IGitHubItemProps {
  item: TGithubUserDataItem;
}

export const GitHubItem: React.FC<IGitHubItemProps> = ({ item }) => {
  return (
    <StyledGHCard
      className="gh-card"
      cardTitle={item.name}
      cardBody={<BodyItem item={item} />}
      cardFooter={<FooterItem item={item} />}
    />
  );
};

export default GitHubItem;

interface IItem {
  item: TGithubUserDataItem;
}

const BodyItem: React.FC<IItem> = ({ item }) => {
  return (
    <StyledGHBodyItem className="card-body-ghitem">
      <div id="pill-wrapper-gh">
        {item.topics.map((topic, i) => {
          return (
            <StyledGHPill className="pill-ghitem" key={i}>
              <span>{topic}</span>
            </StyledGHPill>
          );
        })}
      </div>
      <p>{item.description}</p>
    </StyledGHBodyItem>
  );
};

const FooterItem: React.FC<IItem> = ({ item }) => {
  return (
    <a href={item.html_url} target="_blank">
      Open
    </a>
  );
};
