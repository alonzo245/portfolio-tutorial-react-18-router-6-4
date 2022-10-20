import styled from "@emotion/styled";
import { Suspense } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { JsonToTable } from "react-json-to-table";
import { Await, defer, useLoaderData } from "react-router-dom";
import topology from "../../config/api/topology";
import { DESKTOP_MQ } from "../../config/theme/theme.constants";
import { formatBytes } from "../../utils";

const links = topology();

export default (): JSX.Element => {
  const loaderData: any = useLoaderData();

  return (
    <Container>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData}
          children={(data: any) => {
            return (
              <>
                <Section>
                  <HeaderRow>
                    <A href={data?.owner?.html_url}>
                      <Img src={data?.owner?.avatar_url} alt={""} />
                    </A>
                    <RepoLink href={data?.repo?.html_url} target="_blank">
                      <span> View Repository</span>
                      <BiLinkExternal style={{ margin: "0 10px" }} />
                    </RepoLink>
                  </HeaderRow>
                  <Rows>
                    <RowEven>
                      <Label>Repo Name:</Label> {data?.repo?.name}
                    </RowEven>
                    <RowOdd>
                      <Label>Default Branch:</Label>{" "}
                      {data?.repo?.default_branch}
                    </RowOdd>
                    <RowEven>
                      <Label>Languages:</Label> {data?.repo?.language}
                    </RowEven>
                    <RowOdd>
                      <Label>Size:</Label> {formatBytes(data?.repo?.size)}
                    </RowOdd>
                    <RowEven>
                      <Label>Total Forks:</Label> {data?.repo?.forks}
                    </RowEven>
                  </Rows>
                </Section>

                <JsonToTableWrapper>
                  <JsonToTable json={data?.tableData} />
                </JsonToTableWrapper>
              </>
            );
          }}
        />
      </Suspense>
    </Container>
  );
};

const getRepoData = (repoName: string) => {
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
};

export async function loader({ params }: any) {
  const repoName = params.repoName;
  return defer({
    data: getRepoData(repoName),
  });
}

const JsonToTableWrapper = styled.div`
  overflow-x: auto;
  box-shadow: 0px 5px 23px 0px #313131;
  ${DESKTOP_MQ} {
    overflow-x: unset;
    box-shadow: unset;
  }
`;

const HeaderRow = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${DESKTOP_MQ} {
    display: block;
    width: 500px;
  }
`;

const Label = styled.span`
  font-weight: bold;
  color: #848484;
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
  width: 150px;
  ${DESKTOP_MQ} {
    width: 300px;
  }
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

    & td:first-child {
      padding: 20px;
    }
    & td {
      padding: 20px;
    }
  }
`;
