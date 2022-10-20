import styled from "@emotion/styled";
import { useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { JsonToTable } from "react-json-to-table";
import { useLoaderData } from "react-router-dom";
import topology from "../../config/api/topology";
import { DESKTOP_MQ } from "../../config/theme/theme.constants";
import { formatBytes } from "../../utils";

const links = topology();

export default (): JSX.Element => {
  const loaderData: any = useLoaderData();
  const { owner, repo, tableData } = loaderData;

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <Container>
      <Section>
        <HeaderRow>
          <A href={owner?.html_url}>
            <Img src={owner?.avatar_url} alt={""} />
          </A>
          <RepoLink href={repo?.html_url} target="_blank">
            <span> View Repository</span>
            <BiLinkExternal style={{ margin: "0 10px" }} />
          </RepoLink>
        </HeaderRow>
        <Rows>
          <RowEven>
            <Label>Repo Name:</Label> {repo?.name}
          </RowEven>
          <RowOdd>
            <Label>Default Branch:</Label> {repo?.default_branch}
          </RowOdd>
          <RowEven>
            <Label>Languages:</Label> {repo?.language}
          </RowEven>
          <RowOdd>
            <Label>Size:</Label> {formatBytes(repo?.size)}
          </RowOdd>
          <RowEven>
            <Label>Total Forks:</Label> {repo?.forks}
          </RowEven>
        </Rows>
      </Section>
      <JsonToTableWrapper>
        <JsonToTable json={tableData} />
      </JsonToTableWrapper>
    </Container>
  );
};

export function loader(obj: any) {
  const repoName = obj.params.repoName;
  return fetch(`${links.repos}/alonzo245/${repoName}`)
    .then((res) => res.json())
    .then((repo: any) => {
      let owner = {};
      const tableData: any = {};
      Object.keys(repo)?.forEach((key, i) => {
        if (!["topics", "owner"].includes(key)) {
          const str = key?.replace("_", " ");
          tableData[str?.charAt(0)?.toUpperCase() + str?.slice(1)] = repo[key];
        }

        if (["owner"].includes(key)) {
          owner = repo[key];
        }
      });
      return { repo, owner, tableData };
    });
}

const HeaderRow = styled.span`
  display: flex;
  width: 100%;

  ${DESKTOP_MQ} {
    display: block;
    width: 500px;
  }
`;

const Label = styled.span`
  font-weight: bold;
`;

const Rows = styled.div`
  width: 100%;
  ${DESKTOP_MQ} {
    width: 500px;
  }
`;

const RowEven = styled.div`
  background-color: #2d0644;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 20px;
  color: #b6b6b6;
  margin-bottom: 10px;
`;
const RowOdd = styled.div`
  background-color: #6f2799;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 20px;
  color: #b6b6b6;
  margin-bottom: 10px;
`;

const RepoLink = styled.a`
  color: #bebebe;
  background-color: #2d0644;
  border-radius: 10px;
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 20px;
  }
`;

const A = styled.a`
  width: 300px;
`;

const Img = styled.img`
  width: 150px;
  border-radius: 10px;
  margin-bottom: 20px;

  ${DESKTOP_MQ} {
    width: 300px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  /* padding: 20px; */

  ${DESKTOP_MQ} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    margin-bottom: 20px;
  }
`;

const JsonToTableWrapper = styled.div`
  overflow-x: auto;
  box-shadow: 0px 5px 23px 0px #313131;
`;

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  color: #000;
  margin: 20px auto;
  border-radius: 10px;
  padding: 20px;
  ${DESKTOP_MQ} {
    max-width: 1000px;
    padding: 0px;
  }
  table div {
    display: none;
  }

  * {
    font-size: 16px;
  }

  * table * {
    border: unset !important;
  }

  & table {
    & td:has(table) {
      padding: 0px;
      background-color: #5c4469 !important;
    }
    & th {
      text-align: left;
      background-color: #04aa6d;
    }

    & tr:nth-of-type(even) {
      color: #bebebe;
      background-color: #610094;
    }
    & tr:nth-of-type(odd) {
      background-color: #441361;
      color: #c1c1c1;
    }

    & td {
      padding: 20px;
    }
  }
`;
