import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import { useThemeState } from "../../context/useThemeState";
import { THEMES, ThemeType } from "../../config/theme";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Nav } from "../Header/Nav";

interface Props {
  children: JSX.Element & React.ReactNode;
}
const Layout: React.FC = () => {
  const { theme } = useThemeState();

  return (
    <Container theme={theme}>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.main<{ theme: ThemeType }>`
  background-color: ${(p) => THEMES[p.theme.themeName]?.mainBackground};
  color: ${(p) => THEMES[p.theme.themeName]?.textGeneral};
`;
