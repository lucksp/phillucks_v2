import { fetchWrapper } from "./fetchWrapper";

export type TGithubUserDataItem = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: false;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: false;
  disabled: false;
  open_issues_count: number;
  license: string | null;
  topics: Array<string>;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};

export interface IGithubUserData extends Array<TGithubUserDataItem> {}

export const getGithubUserData = async (): Promise<any> => {
  const url = "https://api.github.com/users/lucksp/repos";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  };
  // return (await fetchWrapper(url, options)) as IGithubUserData;
  return [
    {
      id: 51305779,
      node_id: "MDEwOlJlcG9zaXRvcnk1MTMwNTc3OQ==",
      name: "apres",
      full_name: "lucksp/apres",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/apres",
      description: "Conceptual Apres Hub for getting your snow and apres on",
      fork: false,
      url: "https://api.github.com/repos/lucksp/apres",
      forks_url: "https://api.github.com/repos/lucksp/apres/forks",
      keys_url: "https://api.github.com/repos/lucksp/apres/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/apres/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/apres/teams",
      hooks_url: "https://api.github.com/repos/lucksp/apres/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/apres/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/apres/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/apres/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/apres/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/apres/tags",
      blobs_url: "https://api.github.com/repos/lucksp/apres/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/lucksp/apres/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/lucksp/apres/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/apres/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/lucksp/apres/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/apres/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/apres/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/apres/contributors",
      subscribers_url: "https://api.github.com/repos/lucksp/apres/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/apres/subscription",
      commits_url: "https://api.github.com/repos/lucksp/apres/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/apres/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/apres/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/apres/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/apres/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/apres/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/apres/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/apres/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/apres/downloads",
      issues_url: "https://api.github.com/repos/lucksp/apres/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/apres/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/apres/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/apres/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/apres/labels{/name}",
      releases_url: "https://api.github.com/repos/lucksp/apres/releases{/id}",
      deployments_url: "https://api.github.com/repos/lucksp/apres/deployments",
      created_at: "2016-02-08T15:24:23Z",
      updated_at: "2019-01-15T18:22:21Z",
      pushed_at: "2018-01-26T04:48:34Z",
      git_url: "git://github.com/lucksp/apres.git",
      ssh_url: "git@github.com:lucksp/apres.git",
      clone_url: "https://github.com/lucksp/apres.git",
      svn_url: "https://github.com/lucksp/apres",
      homepage: "http://lucksp.github.io/apres/",
      size: 7125,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: ["angularjs", "css", "javascript"],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 54915494,
      node_id: "MDEwOlJlcG9zaXRvcnk1NDkxNTQ5NA==",
      name: "apresHub",
      full_name: "lucksp/apresHub",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/apresHub",
      description: "v2.0 of ApresSkiHub",
      fork: false,
      url: "https://api.github.com/repos/lucksp/apresHub",
      forks_url: "https://api.github.com/repos/lucksp/apresHub/forks",
      keys_url: "https://api.github.com/repos/lucksp/apresHub/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/apresHub/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/apresHub/teams",
      hooks_url: "https://api.github.com/repos/lucksp/apresHub/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/apresHub/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/apresHub/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/apresHub/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/apresHub/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/apresHub/tags",
      blobs_url: "https://api.github.com/repos/lucksp/apresHub/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/apresHub/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/apresHub/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/apresHub/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/apresHub/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/apresHub/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/apresHub/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/apresHub/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/apresHub/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/apresHub/subscription",
      commits_url: "https://api.github.com/repos/lucksp/apresHub/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/apresHub/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/apresHub/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/apresHub/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/apresHub/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/apresHub/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/apresHub/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/apresHub/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/apresHub/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/apresHub/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/apresHub/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/apresHub/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/apresHub/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/apresHub/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/apresHub/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/apresHub/deployments",
      created_at: "2016-03-28T18:49:13Z",
      updated_at: "2016-03-28T19:22:16Z",
      pushed_at: "2016-03-29T17:42:46Z",
      git_url: "git://github.com/lucksp/apresHub.git",
      ssh_url: "git@github.com:lucksp/apresHub.git",
      clone_url: "https://github.com/lucksp/apresHub.git",
      svn_url: "https://github.com/lucksp/apresHub",
      homepage: null,
      size: 38,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 153661950,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTM2NjE5NTA=",
      name: "getting-started-with-devops",
      full_name: "lucksp/getting-started-with-devops",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/getting-started-with-devops",
      description: null,
      fork: true,
      url: "https://api.github.com/repos/lucksp/getting-started-with-devops",
      forks_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/teams",
      hooks_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/getting-started-with-devops/deployments",
      created_at: "2018-10-18T17:29:13Z",
      updated_at: "2018-10-18T17:47:59Z",
      pushed_at: "2018-10-18T17:47:58Z",
      git_url: "git://github.com/lucksp/getting-started-with-devops.git",
      ssh_url: "git@github.com:lucksp/getting-started-with-devops.git",
      clone_url: "https://github.com/lucksp/getting-started-with-devops.git",
      svn_url: "https://github.com/lucksp/getting-started-with-devops",
      homepage: null,
      size: 29,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 176004869,
      node_id: "MDEwOlJlcG9zaXRvcnkxNzYwMDQ4Njk=",
      name: "goog_trends",
      full_name: "lucksp/goog_trends",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/goog_trends",
      description: "a take on Google Trends Visualizer of words",
      fork: false,
      url: "https://api.github.com/repos/lucksp/goog_trends",
      forks_url: "https://api.github.com/repos/lucksp/goog_trends/forks",
      keys_url: "https://api.github.com/repos/lucksp/goog_trends/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/goog_trends/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/goog_trends/teams",
      hooks_url: "https://api.github.com/repos/lucksp/goog_trends/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/goog_trends/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/goog_trends/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/goog_trends/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/goog_trends/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/goog_trends/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/goog_trends/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/goog_trends/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/goog_trends/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/goog_trends/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/goog_trends/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/goog_trends/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/goog_trends/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/goog_trends/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/goog_trends/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/goog_trends/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/goog_trends/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/goog_trends/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/goog_trends/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/goog_trends/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/goog_trends/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/goog_trends/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/goog_trends/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/goog_trends/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/goog_trends/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/goog_trends/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/goog_trends/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/goog_trends/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/goog_trends/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/goog_trends/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/goog_trends/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/goog_trends/deployments",
      created_at: "2019-03-16T17:46:43Z",
      updated_at: "2019-03-24T01:29:22Z",
      pushed_at: "2019-03-19T05:19:39Z",
      git_url: "git://github.com/lucksp/goog_trends.git",
      ssh_url: "git@github.com:lucksp/goog_trends.git",
      clone_url: "https://github.com/lucksp/goog_trends.git",
      svn_url: "https://github.com/lucksp/goog_trends",
      homepage: null,
      size: 341,
      stargazers_count: 1,
      watchers_count: 1,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: ["reactjs", "styled-components"],
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "master"
    },
    {
      id: 49458019,
      node_id: "MDEwOlJlcG9zaXRvcnk0OTQ1ODAxOQ==",
      name: "html1-cardflip",
      full_name: "lucksp/html1-cardflip",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/html1-cardflip",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/html1-cardflip",
      forks_url: "https://api.github.com/repos/lucksp/html1-cardflip/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/html1-cardflip/teams",
      hooks_url: "https://api.github.com/repos/lucksp/html1-cardflip/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/html1-cardflip/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/html1-cardflip/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/html1-cardflip/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/html1-cardflip/deployments",
      created_at: "2016-01-11T22:18:02Z",
      updated_at: "2019-01-03T03:52:44Z",
      pushed_at: "2016-01-11T22:18:36Z",
      git_url: "git://github.com/lucksp/html1-cardflip.git",
      ssh_url: "git@github.com:lucksp/html1-cardflip.git",
      clone_url: "https://github.com/lucksp/html1-cardflip.git",
      svn_url: "https://github.com/lucksp/html1-cardflip",
      homepage: null,
      size: 56,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 50602536,
      node_id: "MDEwOlJlcG9zaXRvcnk1MDYwMjUzNg==",
      name: "inifiniteScrollCalendar",
      full_name: "lucksp/inifiniteScrollCalendar",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/inifiniteScrollCalendar",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/inifiniteScrollCalendar",
      forks_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/teams",
      hooks_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/inifiniteScrollCalendar/deployments",
      created_at: "2016-01-28T18:06:01Z",
      updated_at: "2016-01-29T22:41:16Z",
      pushed_at: "2016-01-29T22:41:16Z",
      git_url: "git://github.com/lucksp/inifiniteScrollCalendar.git",
      ssh_url: "git@github.com:lucksp/inifiniteScrollCalendar.git",
      clone_url: "https://github.com/lucksp/inifiniteScrollCalendar.git",
      svn_url: "https://github.com/lucksp/inifiniteScrollCalendar",
      homepage: null,
      size: 4,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 54946583,
      node_id: "MDEwOlJlcG9zaXRvcnk1NDk0NjU4Mw==",
      name: "iqTest",
      full_name: "lucksp/iqTest",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/iqTest",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/iqTest",
      forks_url: "https://api.github.com/repos/lucksp/iqTest/forks",
      keys_url: "https://api.github.com/repos/lucksp/iqTest/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/iqTest/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/iqTest/teams",
      hooks_url: "https://api.github.com/repos/lucksp/iqTest/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/iqTest/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/iqTest/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/iqTest/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/iqTest/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/iqTest/tags",
      blobs_url: "https://api.github.com/repos/lucksp/iqTest/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/lucksp/iqTest/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/lucksp/iqTest/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/iqTest/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/lucksp/iqTest/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/iqTest/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/iqTest/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/iqTest/contributors",
      subscribers_url: "https://api.github.com/repos/lucksp/iqTest/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/iqTest/subscription",
      commits_url: "https://api.github.com/repos/lucksp/iqTest/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/iqTest/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/iqTest/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/iqTest/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/iqTest/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/iqTest/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/iqTest/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/iqTest/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/iqTest/downloads",
      issues_url: "https://api.github.com/repos/lucksp/iqTest/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/iqTest/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/iqTest/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/iqTest/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/iqTest/labels{/name}",
      releases_url: "https://api.github.com/repos/lucksp/iqTest/releases{/id}",
      deployments_url: "https://api.github.com/repos/lucksp/iqTest/deployments",
      created_at: "2016-03-29T04:47:58Z",
      updated_at: "2016-03-29T04:49:07Z",
      pushed_at: "2016-03-29T04:49:06Z",
      git_url: "git://github.com/lucksp/iqTest.git",
      ssh_url: "git@github.com:lucksp/iqTest.git",
      clone_url: "https://github.com/lucksp/iqTest.git",
      svn_url: "https://github.com/lucksp/iqTest",
      homepage: null,
      size: 1,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 52315375,
      node_id: "MDEwOlJlcG9zaXRvcnk1MjMxNTM3NQ==",
      name: "job-app",
      full_name: "lucksp/job-app",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/job-app",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/job-app",
      forks_url: "https://api.github.com/repos/lucksp/job-app/forks",
      keys_url: "https://api.github.com/repos/lucksp/job-app/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/job-app/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/job-app/teams",
      hooks_url: "https://api.github.com/repos/lucksp/job-app/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/job-app/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/job-app/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/job-app/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/job-app/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/job-app/tags",
      blobs_url: "https://api.github.com/repos/lucksp/job-app/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/job-app/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/job-app/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/job-app/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/job-app/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/job-app/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/job-app/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/job-app/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/job-app/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/job-app/subscription",
      commits_url: "https://api.github.com/repos/lucksp/job-app/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/job-app/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/job-app/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/job-app/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/job-app/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/job-app/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/job-app/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/job-app/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/job-app/downloads",
      issues_url: "https://api.github.com/repos/lucksp/job-app/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/job-app/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/job-app/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/job-app/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/job-app/labels{/name}",
      releases_url: "https://api.github.com/repos/lucksp/job-app/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/job-app/deployments",
      created_at: "2016-02-22T23:57:34Z",
      updated_at: "2016-02-22T23:58:03Z",
      pushed_at: "2016-02-23T23:52:57Z",
      git_url: "git://github.com/lucksp/job-app.git",
      ssh_url: "git@github.com:lucksp/job-app.git",
      clone_url: "https://github.com/lucksp/job-app.git",
      svn_url: "https://github.com/lucksp/job-app",
      homepage: null,
      size: 84,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 154439922,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTQ0Mzk5MjI=",
      name: "leaderboard",
      full_name: "lucksp/leaderboard",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/leaderboard",
      description:
        "A leaderboard for Poker, where players can have their total winnings added & subtracted.",
      fork: false,
      url: "https://api.github.com/repos/lucksp/leaderboard",
      forks_url: "https://api.github.com/repos/lucksp/leaderboard/forks",
      keys_url: "https://api.github.com/repos/lucksp/leaderboard/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/leaderboard/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/leaderboard/teams",
      hooks_url: "https://api.github.com/repos/lucksp/leaderboard/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/leaderboard/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/leaderboard/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/leaderboard/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/leaderboard/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/leaderboard/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/leaderboard/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/leaderboard/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/leaderboard/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/leaderboard/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/leaderboard/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/leaderboard/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/leaderboard/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/leaderboard/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/leaderboard/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/leaderboard/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/leaderboard/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/leaderboard/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/leaderboard/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/leaderboard/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/leaderboard/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/leaderboard/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/leaderboard/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/leaderboard/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/leaderboard/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/leaderboard/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/leaderboard/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/leaderboard/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/leaderboard/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/leaderboard/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/leaderboard/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/leaderboard/deployments",
      created_at: "2018-10-24T04:38:55Z",
      updated_at: "2019-01-15T18:21:51Z",
      pushed_at: "2018-10-26T04:20:15Z",
      git_url: "git://github.com/lucksp/leaderboard.git",
      ssh_url: "git@github.com:lucksp/leaderboard.git",
      clone_url: "https://github.com/lucksp/leaderboard.git",
      svn_url: "https://github.com/lucksp/leaderboard",
      homepage: "",
      size: 376,
      stargazers_count: 1,
      watchers_count: 1,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: ["javascript", "reactjs", "redux", "sass", "webpack4"],
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "master"
    },
    {
      id: 82766033,
      node_id: "MDEwOlJlcG9zaXRvcnk4Mjc2NjAzMw==",
      name: "litsco",
      full_name: "lucksp/litsco",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/litsco",
      description: "litsco.com production website",
      fork: false,
      url: "https://api.github.com/repos/lucksp/litsco",
      forks_url: "https://api.github.com/repos/lucksp/litsco/forks",
      keys_url: "https://api.github.com/repos/lucksp/litsco/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/litsco/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/litsco/teams",
      hooks_url: "https://api.github.com/repos/lucksp/litsco/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/litsco/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/litsco/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/litsco/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/litsco/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/litsco/tags",
      blobs_url: "https://api.github.com/repos/lucksp/litsco/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/lucksp/litsco/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/lucksp/litsco/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/litsco/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/lucksp/litsco/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/litsco/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/litsco/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/litsco/contributors",
      subscribers_url: "https://api.github.com/repos/lucksp/litsco/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/litsco/subscription",
      commits_url: "https://api.github.com/repos/lucksp/litsco/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/litsco/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/litsco/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/litsco/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/litsco/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/litsco/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/litsco/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/litsco/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/litsco/downloads",
      issues_url: "https://api.github.com/repos/lucksp/litsco/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/litsco/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/litsco/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/litsco/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/litsco/labels{/name}",
      releases_url: "https://api.github.com/repos/lucksp/litsco/releases{/id}",
      deployments_url: "https://api.github.com/repos/lucksp/litsco/deployments",
      created_at: "2017-02-22T05:49:15Z",
      updated_at: "2019-08-25T22:27:44Z",
      pushed_at: "2019-11-02T02:17:52Z",
      git_url: "git://github.com/lucksp/litsco.git",
      ssh_url: "git@github.com:lucksp/litsco.git",
      clone_url: "https://github.com/lucksp/litsco.git",
      svn_url: "https://github.com/lucksp/litsco",
      homepage: "http://www.litsco.com",
      size: 143554,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      topics: [
        "angularjs",
        "css",
        "express",
        "gulp",
        "javascript",
        "materializecss",
        "node",
        "nodemailer"
      ],
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 120211272,
      node_id: "MDEwOlJlcG9zaXRvcnkxMjAyMTEyNzI=",
      name: "lucksp-react_webpack_express_boilerplate",
      full_name: "lucksp/lucksp-react_webpack_express_boilerplate",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url:
        "https://github.com/lucksp/lucksp-react_webpack_express_boilerplate",
      description:
        "React 16 boilerplate with Webpack4 & Hot Module Replacement Node server",
      fork: false,
      url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate",
      forks_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/teams",
      hooks_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/lucksp-react_webpack_express_boilerplate/deployments",
      created_at: "2018-02-04T18:29:12Z",
      updated_at: "2019-09-20T05:54:45Z",
      pushed_at: "2019-09-20T05:54:43Z",
      git_url:
        "git://github.com/lucksp/lucksp-react_webpack_express_boilerplate.git",
      ssh_url:
        "git@github.com:lucksp/lucksp-react_webpack_express_boilerplate.git",
      clone_url:
        "https://github.com/lucksp/lucksp-react_webpack_express_boilerplate.git",
      svn_url:
        "https://github.com/lucksp/lucksp-react_webpack_express_boilerplate",
      homepage: "",
      size: 449,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      topics: [
        "boilerplate",
        "express",
        "hot-module-replacement",
        "nodejs",
        "react",
        "sass",
        "webpack",
        "webpack4"
      ],
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 51871120,
      node_id: "MDEwOlJlcG9zaXRvcnk1MTg3MTEyMA==",
      name: "magellan",
      full_name: "lucksp/magellan",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/magellan",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/magellan",
      forks_url: "https://api.github.com/repos/lucksp/magellan/forks",
      keys_url: "https://api.github.com/repos/lucksp/magellan/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/magellan/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/magellan/teams",
      hooks_url: "https://api.github.com/repos/lucksp/magellan/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/magellan/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/magellan/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/magellan/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/magellan/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/magellan/tags",
      blobs_url: "https://api.github.com/repos/lucksp/magellan/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/magellan/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/magellan/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/magellan/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/magellan/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/magellan/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/magellan/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/magellan/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/magellan/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/magellan/subscription",
      commits_url: "https://api.github.com/repos/lucksp/magellan/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/magellan/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/magellan/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/magellan/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/magellan/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/magellan/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/magellan/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/magellan/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/magellan/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/magellan/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/magellan/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/magellan/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/magellan/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/magellan/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/magellan/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/magellan/deployments",
      created_at: "2016-02-16T21:21:20Z",
      updated_at: "2016-02-16T21:24:06Z",
      pushed_at: "2016-02-17T00:17:16Z",
      git_url: "git://github.com/lucksp/magellan.git",
      ssh_url: "git@github.com:lucksp/magellan.git",
      clone_url: "https://github.com/lucksp/magellan.git",
      svn_url: "https://github.com/lucksp/magellan",
      homepage: null,
      size: 476,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 190846620,
      node_id: "MDEwOlJlcG9zaXRvcnkxOTA4NDY2MjA=",
      name: "mlb_standings",
      full_name: "lucksp/mlb_standings",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/mlb_standings",
      description: "MLB standings",
      fork: false,
      url: "https://api.github.com/repos/lucksp/mlb_standings",
      forks_url: "https://api.github.com/repos/lucksp/mlb_standings/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/mlb_standings/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/mlb_standings/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/mlb_standings/teams",
      hooks_url: "https://api.github.com/repos/lucksp/mlb_standings/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/mlb_standings/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/mlb_standings/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/mlb_standings/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/mlb_standings/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/mlb_standings/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/mlb_standings/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/mlb_standings/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/mlb_standings/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/mlb_standings/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/mlb_standings/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/mlb_standings/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/mlb_standings/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/mlb_standings/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/mlb_standings/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/mlb_standings/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/mlb_standings/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/mlb_standings/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/mlb_standings/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/mlb_standings/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/mlb_standings/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/mlb_standings/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/mlb_standings/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/mlb_standings/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/mlb_standings/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/mlb_standings/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/mlb_standings/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/mlb_standings/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/mlb_standings/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/mlb_standings/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/mlb_standings/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/mlb_standings/deployments",
      created_at: "2019-06-08T04:51:44Z",
      updated_at: "2019-06-11T05:37:03Z",
      pushed_at: "2019-11-02T02:17:35Z",
      git_url: "git://github.com/lucksp/mlb_standings.git",
      ssh_url: "git@github.com:lucksp/mlb_standings.git",
      clone_url: "https://github.com/lucksp/mlb_standings.git",
      svn_url: "https://github.com/lucksp/mlb_standings",
      homepage: null,
      size: 784,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 52999666,
      node_id: "MDEwOlJlcG9zaXRvcnk1Mjk5OTY2Ng==",
      name: "music_seen",
      full_name: "lucksp/music_seen",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/music_seen",
      description: "Final Project for RefactorU: Visualize music data.",
      fork: false,
      url: "https://api.github.com/repos/lucksp/music_seen",
      forks_url: "https://api.github.com/repos/lucksp/music_seen/forks",
      keys_url: "https://api.github.com/repos/lucksp/music_seen/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/music_seen/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/music_seen/teams",
      hooks_url: "https://api.github.com/repos/lucksp/music_seen/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/music_seen/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/music_seen/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/music_seen/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/music_seen/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/music_seen/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/music_seen/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/music_seen/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/music_seen/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/music_seen/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/music_seen/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/music_seen/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/music_seen/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/music_seen/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/music_seen/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/music_seen/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/music_seen/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/music_seen/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/music_seen/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/music_seen/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/music_seen/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/music_seen/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/music_seen/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/music_seen/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/music_seen/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/music_seen/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/music_seen/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/music_seen/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/music_seen/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/music_seen/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/music_seen/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/music_seen/deployments",
      created_at: "2016-03-02T22:01:55Z",
      updated_at: "2019-01-18T02:27:13Z",
      pushed_at: "2017-09-30T15:49:31Z",
      git_url: "git://github.com/lucksp/music_seen.git",
      ssh_url: "git@github.com:lucksp/music_seen.git",
      clone_url: "https://github.com/lucksp/music_seen.git",
      svn_url: "https://github.com/lucksp/music_seen",
      homepage: "",
      size: 642,
      stargazers_count: 1,
      watchers_count: 1,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [
        "angularjs",
        "css",
        "express",
        "javascript",
        "mean-stack",
        "mongodb",
        "node"
      ],
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "master"
    },
    {
      id: 53242153,
      node_id: "MDEwOlJlcG9zaXRvcnk1MzI0MjE1Mw==",
      name: "phillucks.me",
      full_name: "lucksp/phillucks.me",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/phillucks.me",
      description: "complete deployment to web",
      fork: false,
      url: "https://api.github.com/repos/lucksp/phillucks.me",
      forks_url: "https://api.github.com/repos/lucksp/phillucks.me/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/phillucks.me/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/phillucks.me/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/phillucks.me/teams",
      hooks_url: "https://api.github.com/repos/lucksp/phillucks.me/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/phillucks.me/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/phillucks.me/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/phillucks.me/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/phillucks.me/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/phillucks.me/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/phillucks.me/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/phillucks.me/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/phillucks.me/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/phillucks.me/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/phillucks.me/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/phillucks.me/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/phillucks.me/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/phillucks.me/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/phillucks.me/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/phillucks.me/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/phillucks.me/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/phillucks.me/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/phillucks.me/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/phillucks.me/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/phillucks.me/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/phillucks.me/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/phillucks.me/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/phillucks.me/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/phillucks.me/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/phillucks.me/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/phillucks.me/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/phillucks.me/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/phillucks.me/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/phillucks.me/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/phillucks.me/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/phillucks.me/deployments",
      created_at: "2016-03-06T07:00:49Z",
      updated_at: "2018-05-08T16:24:58Z",
      pushed_at: "2018-05-19T02:10:45Z",
      git_url: "git://github.com/lucksp/phillucks.me.git",
      ssh_url: "git@github.com:lucksp/phillucks.me.git",
      clone_url: "https://github.com/lucksp/phillucks.me.git",
      svn_url: "https://github.com/lucksp/phillucks.me",
      homepage: null,
      size: 3771,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 131788334,
      node_id: "MDEwOlJlcG9zaXRvcnkxMzE3ODgzMzQ=",
      name: "phillucks_v2",
      full_name: "lucksp/phillucks_v2",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/phillucks_v2",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/phillucks_v2",
      forks_url: "https://api.github.com/repos/lucksp/phillucks_v2/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/phillucks_v2/teams",
      hooks_url: "https://api.github.com/repos/lucksp/phillucks_v2/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/phillucks_v2/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/phillucks_v2/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/phillucks_v2/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/phillucks_v2/deployments",
      created_at: "2018-05-02T02:36:49Z",
      updated_at: "2018-12-31T04:24:50Z",
      pushed_at: "2019-10-27T15:59:32Z",
      git_url: "git://github.com/lucksp/phillucks_v2.git",
      ssh_url: "git@github.com:lucksp/phillucks_v2.git",
      clone_url: "https://github.com/lucksp/phillucks_v2.git",
      svn_url: "https://github.com/lucksp/phillucks_v2",
      homepage: null,
      size: 1067,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 52416197,
      node_id: "MDEwOlJlcG9zaXRvcnk1MjQxNjE5Nw==",
      name: "problemSet5",
      full_name: "lucksp/problemSet5",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/problemSet5",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/problemSet5",
      forks_url: "https://api.github.com/repos/lucksp/problemSet5/forks",
      keys_url: "https://api.github.com/repos/lucksp/problemSet5/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/problemSet5/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/problemSet5/teams",
      hooks_url: "https://api.github.com/repos/lucksp/problemSet5/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/problemSet5/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/problemSet5/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/problemSet5/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/problemSet5/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/problemSet5/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/problemSet5/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/problemSet5/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/problemSet5/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/problemSet5/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/problemSet5/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/problemSet5/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/problemSet5/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/problemSet5/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/problemSet5/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/problemSet5/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/problemSet5/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/problemSet5/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/problemSet5/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/problemSet5/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/problemSet5/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/problemSet5/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/problemSet5/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/problemSet5/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/problemSet5/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/problemSet5/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/problemSet5/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/problemSet5/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/problemSet5/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/problemSet5/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/problemSet5/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/problemSet5/deployments",
      created_at: "2016-02-24T05:14:23Z",
      updated_at: "2016-02-24T05:15:58Z",
      pushed_at: "2016-02-24T05:15:58Z",
      git_url: "git://github.com/lucksp/problemSet5.git",
      ssh_url: "git@github.com:lucksp/problemSet5.git",
      clone_url: "https://github.com/lucksp/problemSet5.git",
      svn_url: "https://github.com/lucksp/problemSet5",
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 52832973,
      node_id: "MDEwOlJlcG9zaXRvcnk1MjgzMjk3Mw==",
      name: "problemSet6",
      full_name: "lucksp/problemSet6",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/problemSet6",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/problemSet6",
      forks_url: "https://api.github.com/repos/lucksp/problemSet6/forks",
      keys_url: "https://api.github.com/repos/lucksp/problemSet6/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/problemSet6/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/problemSet6/teams",
      hooks_url: "https://api.github.com/repos/lucksp/problemSet6/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/problemSet6/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/problemSet6/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/problemSet6/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/problemSet6/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/problemSet6/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/problemSet6/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/problemSet6/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/problemSet6/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/problemSet6/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/problemSet6/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/problemSet6/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/problemSet6/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/problemSet6/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/problemSet6/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/problemSet6/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/problemSet6/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/problemSet6/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/problemSet6/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/problemSet6/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/problemSet6/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/problemSet6/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/problemSet6/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/problemSet6/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/problemSet6/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/problemSet6/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/problemSet6/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/problemSet6/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/problemSet6/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/problemSet6/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/problemSet6/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/problemSet6/deployments",
      created_at: "2016-02-29T23:37:50Z",
      updated_at: "2016-02-29T23:38:06Z",
      pushed_at: "2016-02-29T23:38:05Z",
      git_url: "git://github.com/lucksp/problemSet6.git",
      ssh_url: "git@github.com:lucksp/problemSet6.git",
      clone_url: "https://github.com/lucksp/problemSet6.git",
      svn_url: "https://github.com/lucksp/problemSet6",
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 50943893,
      node_id: "MDEwOlJlcG9zaXRvcnk1MDk0Mzg5Mw==",
      name: "quoteApp",
      full_name: "lucksp/quoteApp",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/quoteApp",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/quoteApp",
      forks_url: "https://api.github.com/repos/lucksp/quoteApp/forks",
      keys_url: "https://api.github.com/repos/lucksp/quoteApp/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/quoteApp/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/quoteApp/teams",
      hooks_url: "https://api.github.com/repos/lucksp/quoteApp/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/quoteApp/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/quoteApp/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/quoteApp/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/quoteApp/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/quoteApp/tags",
      blobs_url: "https://api.github.com/repos/lucksp/quoteApp/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/quoteApp/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/quoteApp/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/quoteApp/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/quoteApp/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/quoteApp/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/quoteApp/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/quoteApp/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/quoteApp/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/quoteApp/subscription",
      commits_url: "https://api.github.com/repos/lucksp/quoteApp/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/quoteApp/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/quoteApp/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/quoteApp/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/quoteApp/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/quoteApp/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/quoteApp/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/quoteApp/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/quoteApp/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/quoteApp/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/quoteApp/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/quoteApp/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/quoteApp/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/quoteApp/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/quoteApp/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/quoteApp/deployments",
      created_at: "2016-02-02T18:56:52Z",
      updated_at: "2016-02-05T05:55:34Z",
      pushed_at: "2016-02-05T05:55:32Z",
      git_url: "git://github.com/lucksp/quoteApp.git",
      ssh_url: "git@github.com:lucksp/quoteApp.git",
      clone_url: "https://github.com/lucksp/quoteApp.git",
      svn_url: "https://github.com/lucksp/quoteApp",
      homepage: null,
      size: 4,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 51031344,
      node_id: "MDEwOlJlcG9zaXRvcnk1MTAzMTM0NA==",
      name: "restaurant",
      full_name: "lucksp/restaurant",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/restaurant",
      description: "Simple restaurant menu with cart",
      fork: false,
      url: "https://api.github.com/repos/lucksp/restaurant",
      forks_url: "https://api.github.com/repos/lucksp/restaurant/forks",
      keys_url: "https://api.github.com/repos/lucksp/restaurant/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/restaurant/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/restaurant/teams",
      hooks_url: "https://api.github.com/repos/lucksp/restaurant/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/restaurant/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/restaurant/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/restaurant/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/restaurant/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/restaurant/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/restaurant/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/restaurant/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/restaurant/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/restaurant/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/restaurant/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/restaurant/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/restaurant/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/restaurant/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/restaurant/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/restaurant/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/restaurant/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/restaurant/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/restaurant/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/restaurant/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/restaurant/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/restaurant/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/restaurant/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/restaurant/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/restaurant/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/restaurant/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/restaurant/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/restaurant/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/restaurant/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/restaurant/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/restaurant/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/restaurant/deployments",
      created_at: "2016-02-03T21:19:38Z",
      updated_at: "2019-01-15T18:21:16Z",
      pushed_at: "2016-02-19T04:01:48Z",
      git_url: "git://github.com/lucksp/restaurant.git",
      ssh_url: "git@github.com:lucksp/restaurant.git",
      clone_url: "https://github.com/lucksp/restaurant.git",
      svn_url: "https://github.com/lucksp/restaurant",
      homepage: "",
      size: 74,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: ["angularjs", "css", "javascript"],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 144915435,
      node_id: "MDEwOlJlcG9zaXRvcnkxNDQ5MTU0MzU=",
      name: "roboLeague",
      full_name: "lucksp/roboLeague",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/roboLeague",
      description: "Robot Sports League Team Generator",
      fork: false,
      url: "https://api.github.com/repos/lucksp/roboLeague",
      forks_url: "https://api.github.com/repos/lucksp/roboLeague/forks",
      keys_url: "https://api.github.com/repos/lucksp/roboLeague/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/roboLeague/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/roboLeague/teams",
      hooks_url: "https://api.github.com/repos/lucksp/roboLeague/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/roboLeague/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/roboLeague/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/roboLeague/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/roboLeague/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/roboLeague/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/roboLeague/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/roboLeague/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/roboLeague/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/roboLeague/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/roboLeague/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/roboLeague/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/roboLeague/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/roboLeague/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/roboLeague/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/roboLeague/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/roboLeague/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/roboLeague/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/roboLeague/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/roboLeague/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/roboLeague/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/roboLeague/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/roboLeague/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/roboLeague/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/roboLeague/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/roboLeague/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/roboLeague/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/roboLeague/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/roboLeague/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/roboLeague/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/roboLeague/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/roboLeague/deployments",
      created_at: "2018-08-16T00:10:11Z",
      updated_at: "2019-01-15T18:21:48Z",
      pushed_at: "2018-08-19T23:09:28Z",
      git_url: "git://github.com/lucksp/roboLeague.git",
      ssh_url: "git@github.com:lucksp/roboLeague.git",
      clone_url: "https://github.com/lucksp/roboLeague.git",
      svn_url: "https://github.com/lucksp/roboLeague",
      homepage: null,
      size: 133,
      stargazers_count: 1,
      watchers_count: 1,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: ["javascript", "reactjs", "redux", "sass", "webpack4"],
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "master"
    },
    {
      id: 210262373,
      node_id: "MDEwOlJlcG9zaXRvcnkyMTAyNjIzNzM=",
      name: "shopping_cart",
      full_name: "lucksp/shopping_cart",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/shopping_cart",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/shopping_cart",
      forks_url: "https://api.github.com/repos/lucksp/shopping_cart/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/shopping_cart/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/shopping_cart/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/shopping_cart/teams",
      hooks_url: "https://api.github.com/repos/lucksp/shopping_cart/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/shopping_cart/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/shopping_cart/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/shopping_cart/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/shopping_cart/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/shopping_cart/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/shopping_cart/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/shopping_cart/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/shopping_cart/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/shopping_cart/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/shopping_cart/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/shopping_cart/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/shopping_cart/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/shopping_cart/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/shopping_cart/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/shopping_cart/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/shopping_cart/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/shopping_cart/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/shopping_cart/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/shopping_cart/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/shopping_cart/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/shopping_cart/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/shopping_cart/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/shopping_cart/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/shopping_cart/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/shopping_cart/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/shopping_cart/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/shopping_cart/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/shopping_cart/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/shopping_cart/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/shopping_cart/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/shopping_cart/deployments",
      created_at: "2019-09-23T04:09:13Z",
      updated_at: "2019-09-25T04:05:39Z",
      pushed_at: "2019-10-21T20:24:38Z",
      git_url: "git://github.com/lucksp/shopping_cart.git",
      ssh_url: "git@github.com:lucksp/shopping_cart.git",
      clone_url: "https://github.com/lucksp/shopping_cart.git",
      svn_url: "https://github.com/lucksp/shopping_cart",
      homepage: null,
      size: 608,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 51881833,
      node_id: "MDEwOlJlcG9zaXRvcnk1MTg4MTgzMw==",
      name: "slideshow",
      full_name: "lucksp/slideshow",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/slideshow",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/slideshow",
      forks_url: "https://api.github.com/repos/lucksp/slideshow/forks",
      keys_url: "https://api.github.com/repos/lucksp/slideshow/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/slideshow/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/slideshow/teams",
      hooks_url: "https://api.github.com/repos/lucksp/slideshow/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/slideshow/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/slideshow/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/slideshow/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/slideshow/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/slideshow/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/slideshow/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/slideshow/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/slideshow/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/slideshow/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/slideshow/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/slideshow/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/slideshow/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/slideshow/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/slideshow/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/slideshow/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/slideshow/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/slideshow/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/slideshow/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/slideshow/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/slideshow/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/slideshow/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/slideshow/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/slideshow/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/slideshow/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/slideshow/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/slideshow/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/slideshow/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/slideshow/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/slideshow/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/slideshow/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/slideshow/deployments",
      created_at: "2016-02-17T00:36:01Z",
      updated_at: "2019-01-15T18:21:26Z",
      pushed_at: "2016-02-19T03:54:16Z",
      git_url: "git://github.com/lucksp/slideshow.git",
      ssh_url: "git@github.com:lucksp/slideshow.git",
      clone_url: "https://github.com/lucksp/slideshow.git",
      svn_url: "https://github.com/lucksp/slideshow",
      homepage: null,
      size: 2,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 145737478,
      node_id: "MDEwOlJlcG9zaXRvcnkxNDU3Mzc0Nzg=",
      name: "snapstage",
      full_name: "lucksp/snapstage",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/snapstage",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/snapstage",
      forks_url: "https://api.github.com/repos/lucksp/snapstage/forks",
      keys_url: "https://api.github.com/repos/lucksp/snapstage/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/snapstage/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/snapstage/teams",
      hooks_url: "https://api.github.com/repos/lucksp/snapstage/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/snapstage/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/snapstage/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/snapstage/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/snapstage/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/snapstage/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/snapstage/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/snapstage/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/snapstage/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/snapstage/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/snapstage/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/snapstage/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/snapstage/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/snapstage/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/snapstage/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/snapstage/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/snapstage/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/snapstage/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/snapstage/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/snapstage/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/snapstage/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/snapstage/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/snapstage/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/snapstage/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/snapstage/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/snapstage/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/snapstage/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/snapstage/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/snapstage/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/snapstage/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/snapstage/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/snapstage/deployments",
      created_at: "2018-08-22T16:51:43Z",
      updated_at: "2019-11-06T18:45:30Z",
      pushed_at: "2019-11-06T18:45:28Z",
      git_url: "git://github.com/lucksp/snapstage.git",
      ssh_url: "git@github.com:lucksp/snapstage.git",
      clone_url: "https://github.com/lucksp/snapstage.git",
      svn_url: "https://github.com/lucksp/snapstage",
      homepage: null,
      size: 94,
      stargazers_count: 0,
      watchers_count: 0,
      language: "CSS",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: ["donottrack"],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 54301337,
      node_id: "MDEwOlJlcG9zaXRvcnk1NDMwMTMzNw==",
      name: "snapTest",
      full_name: "lucksp/snapTest",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/snapTest",
      description: "Simple Dashboard for live chat administrator",
      fork: false,
      url: "https://api.github.com/repos/lucksp/snapTest",
      forks_url: "https://api.github.com/repos/lucksp/snapTest/forks",
      keys_url: "https://api.github.com/repos/lucksp/snapTest/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/snapTest/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/snapTest/teams",
      hooks_url: "https://api.github.com/repos/lucksp/snapTest/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/snapTest/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/snapTest/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/snapTest/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/snapTest/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/snapTest/tags",
      blobs_url: "https://api.github.com/repos/lucksp/snapTest/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/snapTest/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/snapTest/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/snapTest/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/snapTest/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/snapTest/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/snapTest/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/snapTest/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/snapTest/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/snapTest/subscription",
      commits_url: "https://api.github.com/repos/lucksp/snapTest/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/snapTest/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/snapTest/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/snapTest/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/snapTest/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/snapTest/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/snapTest/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/snapTest/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/snapTest/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/snapTest/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/snapTest/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/snapTest/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/snapTest/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/snapTest/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/snapTest/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/snapTest/deployments",
      created_at: "2016-03-20T05:02:30Z",
      updated_at: "2019-01-15T18:22:06Z",
      pushed_at: "2018-01-26T05:15:09Z",
      git_url: "git://github.com/lucksp/snapTest.git",
      ssh_url: "git@github.com:lucksp/snapTest.git",
      clone_url: "https://github.com/lucksp/snapTest.git",
      svn_url: "https://github.com/lucksp/snapTest",
      homepage: "",
      size: 256,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: ["angularjs", "css", "json"],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 177219381,
      node_id: "MDEwOlJlcG9zaXRvcnkxNzcyMTkzODE=",
      name: "stack-company",
      full_name: "lucksp/stack-company",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/stack-company",
      description: "Simple Company & Employee maker",
      fork: false,
      url: "https://api.github.com/repos/lucksp/stack-company",
      forks_url: "https://api.github.com/repos/lucksp/stack-company/forks",
      keys_url:
        "https://api.github.com/repos/lucksp/stack-company/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/stack-company/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/stack-company/teams",
      hooks_url: "https://api.github.com/repos/lucksp/stack-company/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/stack-company/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/stack-company/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/stack-company/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/stack-company/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/stack-company/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/stack-company/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/stack-company/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/stack-company/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/stack-company/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/stack-company/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lucksp/stack-company/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/stack-company/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/stack-company/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/stack-company/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/stack-company/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/stack-company/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/stack-company/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/stack-company/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/stack-company/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/stack-company/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/stack-company/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/stack-company/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/stack-company/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lucksp/stack-company/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/stack-company/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/stack-company/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/stack-company/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/stack-company/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/stack-company/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/stack-company/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/stack-company/deployments",
      created_at: "2019-03-22T22:59:26Z",
      updated_at: "2019-03-27T13:03:22Z",
      pushed_at: "2019-03-27T13:03:20Z",
      git_url: "git://github.com/lucksp/stack-company.git",
      ssh_url: "git@github.com:lucksp/stack-company.git",
      clone_url: "https://github.com/lucksp/stack-company.git",
      svn_url: "https://github.com/lucksp/stack-company",
      homepage: "",
      size: 468,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 52123368,
      node_id: "MDEwOlJlcG9zaXRvcnk1MjEyMzM2OA==",
      name: "temp",
      full_name: "lucksp/temp",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/temp",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/temp",
      forks_url: "https://api.github.com/repos/lucksp/temp/forks",
      keys_url: "https://api.github.com/repos/lucksp/temp/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/temp/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/temp/teams",
      hooks_url: "https://api.github.com/repos/lucksp/temp/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/temp/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/temp/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/temp/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/temp/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/temp/tags",
      blobs_url: "https://api.github.com/repos/lucksp/temp/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/lucksp/temp/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/lucksp/temp/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/lucksp/temp/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/lucksp/temp/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/temp/languages",
      stargazers_url: "https://api.github.com/repos/lucksp/temp/stargazers",
      contributors_url: "https://api.github.com/repos/lucksp/temp/contributors",
      subscribers_url: "https://api.github.com/repos/lucksp/temp/subscribers",
      subscription_url: "https://api.github.com/repos/lucksp/temp/subscription",
      commits_url: "https://api.github.com/repos/lucksp/temp/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/temp/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/temp/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/temp/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/lucksp/temp/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/temp/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/temp/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/temp/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/temp/downloads",
      issues_url: "https://api.github.com/repos/lucksp/temp/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/temp/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/temp/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/temp/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/temp/labels{/name}",
      releases_url: "https://api.github.com/repos/lucksp/temp/releases{/id}",
      deployments_url: "https://api.github.com/repos/lucksp/temp/deployments",
      created_at: "2016-02-19T23:27:28Z",
      updated_at: "2016-02-19T23:28:11Z",
      pushed_at: "2016-02-22T23:26:38Z",
      git_url: "git://github.com/lucksp/temp.git",
      ssh_url: "git@github.com:lucksp/temp.git",
      clone_url: "https://github.com/lucksp/temp.git",
      svn_url: "https://github.com/lucksp/temp",
      homepage: null,
      size: 4,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 163919238,
      node_id: "MDEwOlJlcG9zaXRvcnkxNjM5MTkyMzg=",
      name: "Train-Map",
      full_name: "lucksp/Train-Map",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/Train-Map",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/Train-Map",
      forks_url: "https://api.github.com/repos/lucksp/Train-Map/forks",
      keys_url: "https://api.github.com/repos/lucksp/Train-Map/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/Train-Map/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/Train-Map/teams",
      hooks_url: "https://api.github.com/repos/lucksp/Train-Map/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/Train-Map/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/Train-Map/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/Train-Map/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/Train-Map/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/Train-Map/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/Train-Map/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/Train-Map/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/Train-Map/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/Train-Map/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/Train-Map/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/Train-Map/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/Train-Map/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/Train-Map/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/Train-Map/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/Train-Map/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/Train-Map/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/Train-Map/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/Train-Map/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/Train-Map/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/Train-Map/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/Train-Map/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/Train-Map/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/Train-Map/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/Train-Map/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/Train-Map/issues{/number}",
      pulls_url: "https://api.github.com/repos/lucksp/Train-Map/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/Train-Map/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/Train-Map/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/lucksp/Train-Map/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/Train-Map/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/Train-Map/deployments",
      created_at: "2019-01-03T03:34:40Z",
      updated_at: "2019-01-15T18:21:54Z",
      pushed_at: "2019-01-06T07:46:24Z",
      git_url: "git://github.com/lucksp/Train-Map.git",
      ssh_url: "git@github.com:lucksp/Train-Map.git",
      clone_url: "https://github.com/lucksp/Train-Map.git",
      svn_url: "https://github.com/lucksp/Train-Map",
      homepage: null,
      size: 394,
      stargazers_count: 1,
      watchers_count: 1,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "master"
    },
    {
      id: 52483285,
      node_id: "MDEwOlJlcG9zaXRvcnk1MjQ4MzI4NQ==",
      name: "translator",
      full_name: "lucksp/translator",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/translator",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/translator",
      forks_url: "https://api.github.com/repos/lucksp/translator/forks",
      keys_url: "https://api.github.com/repos/lucksp/translator/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/translator/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/translator/teams",
      hooks_url: "https://api.github.com/repos/lucksp/translator/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/translator/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/translator/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/translator/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/translator/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/translator/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/translator/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/translator/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/translator/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/translator/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/translator/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/translator/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/translator/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/translator/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/translator/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/translator/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/translator/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/translator/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/translator/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/translator/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/translator/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/translator/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/translator/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/translator/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/translator/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/translator/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/translator/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/translator/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/translator/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/translator/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/translator/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/translator/deployments",
      created_at: "2016-02-24T23:55:45Z",
      updated_at: "2016-02-27T00:58:01Z",
      pushed_at: "2016-02-27T00:58:00Z",
      git_url: "git://github.com/lucksp/translator.git",
      ssh_url: "git@github.com:lucksp/translator.git",
      clone_url: "https://github.com/lucksp/translator.git",
      svn_url: "https://github.com/lucksp/translator",
      homepage: null,
      size: 16,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 51933050,
      node_id: "MDEwOlJlcG9zaXRvcnk1MTkzMzA1MA==",
      name: "vidcontest",
      full_name: "lucksp/vidcontest",
      private: false,
      owner: {
        login: "lucksp",
        id: 15162169,
        node_id: "MDQ6VXNlcjE1MTYyMTY5",
        avatar_url: "https://avatars0.githubusercontent.com/u/15162169?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucksp",
        html_url: "https://github.com/lucksp",
        followers_url: "https://api.github.com/users/lucksp/followers",
        following_url:
          "https://api.github.com/users/lucksp/following{/other_user}",
        gists_url: "https://api.github.com/users/lucksp/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucksp/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lucksp/subscriptions",
        organizations_url: "https://api.github.com/users/lucksp/orgs",
        repos_url: "https://api.github.com/users/lucksp/repos",
        events_url: "https://api.github.com/users/lucksp/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucksp/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/lucksp/vidcontest",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lucksp/vidcontest",
      forks_url: "https://api.github.com/repos/lucksp/vidcontest/forks",
      keys_url: "https://api.github.com/repos/lucksp/vidcontest/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lucksp/vidcontest/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/lucksp/vidcontest/teams",
      hooks_url: "https://api.github.com/repos/lucksp/vidcontest/hooks",
      issue_events_url:
        "https://api.github.com/repos/lucksp/vidcontest/issues/events{/number}",
      events_url: "https://api.github.com/repos/lucksp/vidcontest/events",
      assignees_url:
        "https://api.github.com/repos/lucksp/vidcontest/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lucksp/vidcontest/branches{/branch}",
      tags_url: "https://api.github.com/repos/lucksp/vidcontest/tags",
      blobs_url:
        "https://api.github.com/repos/lucksp/vidcontest/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lucksp/vidcontest/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lucksp/vidcontest/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lucksp/vidcontest/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lucksp/vidcontest/statuses/{sha}",
      languages_url: "https://api.github.com/repos/lucksp/vidcontest/languages",
      stargazers_url:
        "https://api.github.com/repos/lucksp/vidcontest/stargazers",
      contributors_url:
        "https://api.github.com/repos/lucksp/vidcontest/contributors",
      subscribers_url:
        "https://api.github.com/repos/lucksp/vidcontest/subscribers",
      subscription_url:
        "https://api.github.com/repos/lucksp/vidcontest/subscription",
      commits_url:
        "https://api.github.com/repos/lucksp/vidcontest/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lucksp/vidcontest/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lucksp/vidcontest/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lucksp/vidcontest/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lucksp/vidcontest/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lucksp/vidcontest/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/lucksp/vidcontest/merges",
      archive_url:
        "https://api.github.com/repos/lucksp/vidcontest/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/lucksp/vidcontest/downloads",
      issues_url:
        "https://api.github.com/repos/lucksp/vidcontest/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lucksp/vidcontest/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lucksp/vidcontest/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lucksp/vidcontest/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lucksp/vidcontest/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lucksp/vidcontest/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lucksp/vidcontest/deployments",
      created_at: "2016-02-17T15:34:39Z",
      updated_at: "2016-02-18T00:35:35Z",
      pushed_at: "2016-02-18T00:35:33Z",
      git_url: "git://github.com/lucksp/vidcontest.git",
      ssh_url: "git@github.com:lucksp/vidcontest.git",
      clone_url: "https://github.com/lucksp/vidcontest.git",
      svn_url: "https://github.com/lucksp/vidcontest",
      homepage: null,
      size: 476,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      topics: [],
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    }
  ];
};
