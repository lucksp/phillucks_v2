import { fetchWrapper } from "./fetchWrapper";

export const getGithubUserData = async () => {
  const url = "https://api.github.com/users/lucksp/repos";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  };
  const data = await fetchWrapper(url, options);
};
