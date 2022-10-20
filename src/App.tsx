import { GlobalStateProvider, useGlobalState } from "./context/useGlobalState";
import { ThemeStateProvider } from "./context/useThemeState";
import Router from "./routes";

export default (): JSX.Element => {
  const {} = useGlobalState();
  return (
    <ThemeStateProvider>
      <GlobalStateProvider>
        <Router />
      </GlobalStateProvider>
    </ThemeStateProvider>
  );
};
