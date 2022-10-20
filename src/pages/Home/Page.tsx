import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import topology from "../../config/api/topology";
import { useGlobalState } from "../../context/useGlobalState";
import AboutMe from "./AboutMe";
import { Hero } from "./Hero";
import { GitHubRepos } from "./Projects";

const links = topology();

export default (): JSX.Element => {
  const { setGlobalState } = useGlobalState();

  const loaderData: any = useLoaderData();

  useEffect(() => {
    if (loaderData) {
      setGlobalState({ github: { repos: [...(loaderData || [])] || [] } });
    }
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <GitHubRepos />
    </>
  );
};

export function loader() {
  return fetch(links.gitHubRepos).then((res) => res.json());
}
