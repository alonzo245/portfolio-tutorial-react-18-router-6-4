import styled from "@emotion/styled";
import AvatarImg from "../../assets/images/avatar.jpeg";
import { useThemeState } from "../../context/useThemeState";
import { THEMES, ThemeType } from "../../config/theme";
import Colors from "../../config/theme/Colors";
import { DESKTOP_MQ } from "../../config/theme/theme.constants";

export default (): JSX.Element => {
  const { theme } = useThemeState();

  return (
    <Container id="about">
      <H2 theme={theme}>About</H2>
      <Row>
        <Img src={AvatarImg} alt="Alon Alush" />
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          asperiores a fugit nobis amet eum dolorum unde architecto, neque
          molestias, ut earum incidunt vero, ea dolor culpa possimus. Illo,
          molestiae.
        </P>
      </Row>
    </Container>
  );
};

const Container = styled.section`
  padding: 40px;

  ${DESKTOP_MQ} {
    padding: 80px;
  }
`;

const H2 = styled.h2<{ theme: ThemeType }>`
  color: ${(p) => THEMES[p.theme.themeName]?.h2};
  display: block;
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
  position: relative;

  &::after {
    content: "About";
    color: ${Colors.white};
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }
`;

const Img = styled.img`
  width: 300px;
  border-radius: 150px;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;

  ${DESKTOP_MQ} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${DESKTOP_MQ} {
    flex-direction: row-reverse;
  }
`;

const P = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 300;
`;
