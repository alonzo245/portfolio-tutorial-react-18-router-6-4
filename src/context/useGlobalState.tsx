import React, { FC, useContext, useState } from "react";

interface IGlobal {
  github: { repos: Array<any> };
  setGlobalState?: (updatedState: any) => void;
}

interface IGlobalContext {
  github: { repos: Array<any> };
  setGlobalState: (updatedState: IGlobal) => void;
}

const projectsStateContext = React.createContext<IGlobalContext>({
  github: { repos: [] },
  setGlobalState: () => {},
});

const useGlobalState = () => useContext(projectsStateContext);

const initialState = {
  github: { repos: [] },
  setGlobalState: () => {},
};

const { Provider } = projectsStateContext;

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<IGlobal>(initialState);

  const setGlobalState = (stateToUpdate: IGlobal) => {
    setState({ ...state, ...stateToUpdate });
  };

  return <Provider value={{ ...state, setGlobalState }}>{children}</Provider>;
};

export { GlobalStateProvider, useGlobalState };
