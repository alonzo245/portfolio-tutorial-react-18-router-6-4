import styled from "@emotion/styled";
import dayjs from "dayjs";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useThemeState } from "../../context/useThemeState";
import { THEMES, ThemeType } from "../../config/theme";
import Colors from "../../config/theme/Colors";
import { DESKTOP_MQ } from "../../config/theme/theme.constants";

interface Props {
  name: string;
  description: string;
  updated_at: string;
  owner: any;
}
export default ({
  name,
  description,
  owner,
  updated_at,
}: Props): JSX.Element => {
  const { theme } = useThemeState();

  return (
    <Container theme={theme}>
      {owner?.avatar_url ? (
        <span style={{ position: "relative" }}>
          <StyledAiFillGithub size={50} />
          <Img
            src={owner?.avatar_url}
            alt={(name || "").replaceAll(/-|_/gi, " ")}
          ></Img>
        </span>
      ) : (
        <AiFillGithub size={50} />
      )}
      <H3 theme={theme}>{(name || "").replaceAll(/-|_/gi, " ")}</H3>
      <P>{description}</P>
      <UpdatedAt>
        Last pdated: {dayjs(updated_at).format("MM/DD/YYYY")}
      </UpdatedAt>
      <StyledLink to={`repo/${name}`} theme={theme}>
        More Info
      </StyledLink>
      {/* <Link href={link} theme={theme} target="_blank">
        More Info
      </Link> */}
    </Container>
  );
};

const Container = styled.div<{ theme: ThemeType }>`
  width: 100%;
  max-height: 470px;
  box-shadow: 5px 5px 20px ${(p) => THEMES[p.theme.themeName]?.cardShadow};
  margin: 10px;
  background-color: ${(p) => THEMES[p.theme.themeName]?.cardBackground};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${DESKTOP_MQ} {
    max-width: 300px;
  }
`;

const StyledLink = styled(Link)<{ theme: ThemeType }>`
  display: block;
  text-decoration: none;
  background: ${(p) => p.theme.button};
  padding: 10px;
  border-radius: 10px;
  color: ${Colors.white};
  align-self: flex-end;
  width: 100%;

  &:hover {
    color: unset;
    background-color: ${(p) => THEMES[p.theme.themeName]?.cardButtonHover};
  }
`;

const H3 = styled.h3<{ theme: ThemeType }>`
  color: ${(p) => THEMES[p.theme.themeName]?.h3};
  margin: 15px 0;
  font-size: 15px;
  font-weight: 300;
  text-transform: capitalize;
`;

const StyledAiFillGithub = styled(AiFillGithub)`
  position: absolute;
  top: 120px;
  right: 0px;
  background-color: black;
  border-radius: 30px;
`;

const UpdatedAt = styled.p`
  font-size: 12px;
  font-style: italic;
  font-weight: 30x0;
`;

const P = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 300;
`;

const Img = styled.img`
  margin-top: 25px;
  margin-bottom: 20px;
  width: 130px;
  border-radius: 125px;
`;
