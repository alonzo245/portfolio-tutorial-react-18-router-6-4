interface ITopology {
  production: {
    gitHubRepos: string;
    baseUrl: string;
    repos: string;
  };
  development: {
    baseUrl: string;
    gitHubRepos: string;
    repos: string;
  };
}
const topology = () => {
  const links: ITopology = {
    production: {
      baseUrl: "https://api.github.com",
      gitHubRepos: "https://api.github.com/users/alonzo245/repos",
      repos: "https://api.github.com/repos",
    },
    development: {
      baseUrl: "http://localhost:3000",
      gitHubRepos:
        "/portfolio-tutorial-react-18-router-6-4/data/repos.json",
      repos: "https://api.github.com/repos",
    },
  };

  const env = process.env.NODE_ENV;
  return links[env as keyof ITopology];
};

export default topology;
