import styled from "@emotion/styled";
import { useThemeState } from "../../../context/useThemeState";
import { THEMES, ThemeType } from "../../../config/theme";
import Colors from "../../../config/theme/Colors";
import { DESKTOP_MQ } from "../../../config/theme/theme.constants";
import { githubIcon, linkedinIcon } from "./icons";
import { IoDocumentAttachOutline } from "react-icons/io5";
import ReactTooltip from "react-tooltip";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const GITHUB_LINK = "https://github.com/alonzo245";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/alonalush";
export const CV_LINK =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-tutorial-d06e5.appspot.com/o/example_doc.pdf?alt=media&token=6f6b470a-2d46-48e8-9691-9616a5274665";

export default (): JSX.Element => {
  const { theme } = useThemeState();

  return (
    <Wrapper theme={theme}>
      <Container theme={theme}>
        <Row>
          <H1 theme={theme}>Portfolio Website</H1>
          <P>Level Up your Skills</P>
          <StyledAnchorLink href="#about" theme={theme}>
            About me
          </StyledAnchorLink>
        </Row>
        <RowContact>
          <Link href={CV_LINK} data-tip data-for="cv">
            <StyledIoDocumentAttachOutline color={Colors.white} size={50} />
          </Link>
          <Link href={GITHUB_LINK} target="_blank" data-tip data-for="github">
            <span> {githubIcon(50)}</span>
          </Link>
          <Link
            href={LINKEDIN_LINK}
            target="_blank"
            data-tip
            data-for="linkedin"
          >
            <span>{linkedinIcon(50)}</span>
          </Link>
          <ReactTooltip id="cv" place="bottom" effect="solid">
            My CV
          </ReactTooltip>
          <ReactTooltip id="linkedin" place="bottom" effect="solid">
            Linkedin Profile
          </ReactTooltip>
          <ReactTooltip id="github" place="bottom" effect="solid">
            GitHub Profile
          </ReactTooltip>
        </RowContact>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header<{ theme: ThemeType }>`
  background-color: ${(p) => p.theme.heroBackground};
  height: 100vh;
  color: white;
  font-size: 40px;
  background-image: url("/portfolio-tutorial-react-18-router-6-4/assets/blob-black.svg"),
    url("/portfolio-tutorial-react-18-router-6-4/assets/blob-light-blue.svg");
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  background-position: -300px center, -300px center;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${DESKTOP_MQ} {
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledIoDocumentAttachOutline = styled(IoDocumentAttachOutline)`
  cursor: pointer;
`;

const H1 = styled.h1<{ theme: ThemeType }>`
  font-weight: bolder;
  font-size: 70px;
  margin-top: 40px;
  color: ${(p) => THEMES[p.theme.themeName]?.h1};
  text-align: center;
  position: relative;

  ${DESKTOP_MQ} {
    margin: 0;
    margin-top: 80px;
    font-size: 90px;
    text-align: left;
    margin-top: 0;
  }

  &::after {
    content: "Portfolio Website";
    color: ${Colors.white};
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }
`;

const P = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 30px;
  font-weight: bold;

  ${DESKTOP_MQ} {
    font-size: 40px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  margin-bottom: 30px;

  ${DESKTOP_MQ} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 80px;
    margin-bottom: 200px;
  }
`;

const StyledAnchorLink = styled(AnchorLink)<{ theme: ThemeType }>`
  width: 200px;
  height: 55px;
  border-radius: 20px;
  background: ${(p) => THEMES[p.theme.themeName]?.heroButton};
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  padding: 5px 20px;
  color: ${Colors.white};
`;

const RowContact = styled.div`
  display: flex;
  padding-bottom: 200px;

  ${DESKTOP_MQ} {
    justify-content: space-around;
  }
`;

const Link = styled.a`
  display: block;
  margin: 20px;
`;
