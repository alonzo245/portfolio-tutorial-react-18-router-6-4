import styled from "@emotion/styled";
import { useThemeState } from "../../context/useThemeState";
import {
  CV_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  StyledIoDocumentAttachOutline,
} from "../../pages/Home/Hero/Content";
import { githubIcon, linkedinIcon } from "../../pages/Home/Hero/icons";
import { THEMES, ThemeType } from "../../config/theme";
import Colors from "../../config/theme/Colors";

export default (): JSX.Element => {
  const { theme } = useThemeState();

  return (
    <Container id="contact-me" theme={theme}>
      <H5>Portfolio Website</H5>
      <P>name@exampleofdomaion.com</P>
      <Row>
        <Link href={CV_LINK} data-tip data-for="cv">
          <StyledIoDocumentAttachOutline color={Colors.white} size={30} />
        </Link>
        <Link href={GITHUB_LINK} target="_blank" data-tip data-for="github">
          <span>{githubIcon(30)}</span>
        </Link>
        <Link href={LINKEDIN_LINK} target="_blank" data-tip data-for="linkedin">
          <span>{linkedinIcon(30)}</span>
        </Link>
      </Row>
    </Container>
  );
};

const Link = styled.a`
  display: block;
  margin: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
`;

const H5 = styled.h5`
  color: white;
  font-weight: bolder;
  font-size: 40px;
`;

const P = styled.footer`
  color: white;
`;

const Container = styled.footer<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => THEMES[p.theme.themeName]?.footerBackground};
  color: white;
  text-align: center;
  padding: 80px;
`;
