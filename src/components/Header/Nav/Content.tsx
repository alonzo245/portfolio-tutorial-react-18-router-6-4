import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../../assets/images/avatar.jpeg";
import ThemeToggle from "../../ThemToggle/Content";
import { useScreenSize } from "../../../hooks/useScreenSize";
import Colors from "../../../config/theme/Colors";
import {
  DESKTOP_MQ,
  mobileThreshold,
} from "../../../config/theme/theme.constants";

export default (): JSX.Element => {
  const { width } = useScreenSize();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width > mobileThreshold) {
      setOpen(false);
    }
  }, [width]);

  return (
    <Container>
      <LogoWrapper href="/">
        <Logo src={logo} alt="Full-Stack Developer" />
        <span>Full Name</span>
      </LogoWrapper>
      <NavList show={open}>
        <li>
          <StyledAnchorLink href="/#about" onClick={() => setOpen(false)}>
            About
          </StyledAnchorLink>
        </li>
        <li>
          <StyledAnchorLink href="/#projects" onClick={() => setOpen(false)}>
            Projects
          </StyledAnchorLink>
        </li>
        <li>
          <StyledAnchorLink href="/#contact-me" onClick={() => setOpen(false)}>
            Contact
          </StyledAnchorLink>
        </li>
        {width > mobileThreshold && (
          <li>
            <ThemeToggle />
          </li>
        )}
      </NavList>
      {width < mobileThreshold && (
        <Span>
          <ThemeToggle />
          <Hamburger id="hamburger" onClick={() => setOpen(!open)}>
            <FaBars size={40} />
          </Hamburger>
        </Span>
      )}
    </Container>
  );
};

const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const NavList = styled.ul<{ show: boolean }>`
  display: ${(p) => (p.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #2b2c38;
  margin: 0px;
  margin-top: 111px;
  padding-bottom: 30px;
  font-size: 25px;

  ${DESKTOP_MQ} {
    flex-direction: unset;
    background-color: transparent;
    margin: 30px 0;
    display: flex;
    list-style-type: none;
    width: 500px;
    justify-content: space-around;
    font-size: 30px;
    padding: 0;

    & > a {
      text-decoration: none;
    }
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  display: inline;
  height: 60px;
  width: 60px;
  margin: 20px;
  border-radius: 40px;

  ${DESKTOP_MQ} {
    display: block;
  }
`;

const StyledAnchorLink = styled.a`
  cursor: pointer;
  color: ${Colors.white};
`;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #2b2c38;

  ${DESKTOP_MQ} {
    flex-direction: row;
    background-color: ${Colors.black}50;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
  }
`;

const Hamburger = styled.button`
  cursor: pointer;
  display: flex;
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 30px;
  margin: 20px;
  align-items: center;
  height: 60px;

  &:focus {
    outline: 0;
  }

  ${DESKTOP_MQ} {
    display: none;
  }
`;
