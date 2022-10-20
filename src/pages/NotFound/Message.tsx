import styled from "@emotion/styled";
import { Result } from "antd";
import { Link } from "react-router-dom";
import { DESKTOP_MQ } from "../../config/theme/theme.constants";

export default (): JSX.Element => {
  return (
    <Container>
      <p>
        <Result status="404" />
        Sorry, we could not find this page <br />
        <Link to={`${process.env.PUBLIC_URL}/`}>Return to Home</Link>
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & a {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
  }

  ${DESKTOP_MQ} {
  }
`;
