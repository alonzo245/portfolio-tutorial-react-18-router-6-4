import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../../context/useGlobalState";
import { useThemeState } from "../../../context/useThemeState";
import { THEMES, ThemeType } from "../../../config/theme";
import Colors from "../../../config/theme/Colors";
import {
  DESKTOP_MQ,
  mobileThreshold,
} from "../../../config/theme/theme.constants";
import { ProjectCard } from "../../../components/ProjectCard";
import { useScreenSize } from "../../../hooks/useScreenSize";

const ITEMS_PER_PAGE = 6;

export default (): JSX.Element => {
  const { width } = useScreenSize();
  const { theme } = useThemeState();
  const [items, setItems] = useState<Array<any>>([]);
  const [hasMore, setHasMore] = useState(true);

  const {
    github: { repos },
  } = useGlobalState();

  useEffect(() => {
    if (width > mobileThreshold) {
      setHasMore(true);
      setItems([...repos.slice(0, ITEMS_PER_PAGE)]);
    }
    if (width < mobileThreshold) {
      setHasMore(true);
      setItems([]);
    }
  }, [width]);

  useEffect(() => {
    setItems(repos?.slice(0, ITEMS_PER_PAGE));
  }, [repos]);

  const onChage = (page: number) => {
    const startPos = (page - 1) * ITEMS_PER_PAGE;
    setItems(repos?.slice(startPos, startPos + ITEMS_PER_PAGE));
  };

  const fetchInfinitScrollData = () => {
    const moreItems = repos?.slice(
      items?.length,
      items?.length + ITEMS_PER_PAGE
    );

    if (hasMore && moreItems?.length > 0) {
      setItems([...items, ...moreItems]);
    } else {
      setHasMore(false);
    }
  };

  return (
    <Container className="sub-section-alternative" id="projects">
      <H2 theme={theme}>Repos</H2>
      {width > mobileThreshold ? (
        <>
          <Crads>
            {(items || []).map((props: any, i: number) => {
              return <ProjectCard key={i} {...props} />;
            })}
          </Crads>
          <StyledPagination
            theme={theme}
            onChange={onChage}
            defaultCurrent={1}
            total={repos?.length || 0}
            pageSize={ITEMS_PER_PAGE}
          />
        </>
      ) : (
        <>
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchInfinitScrollData}
            hasMore={hasMore}
            loader={<h4 key="loading">Loading...</h4>}
          >
            <Crads>
              {(items || []).map((props: any, i: number) => {
                return <ProjectCard key={i} {...props} />;
              })}
            </Crads>
          </InfiniteScroll>
        </>
      )}
    </Container>
  );
};

const StyledPagination = styled(Pagination)<{ theme: ThemeType }>`
  margin: 40px 0;
  & .ant-pagination-item-link {
    border-radius: 20px;
    background-color: ${(p) => THEMES[p.theme.themeName]?.paginationButton};
    color: ${Colors.white};
    border: none;
  }

  margin: 40px 0;
  & li {
    border: none;
    border-radius: 20px;
    background-color: ${(p) => THEMES[p.theme.themeName]?.pageButton};
  }

  & a {
    color: ${Colors.white};
    line-height: 2.3;
  }

  & .ant-pagination-item-active {
    border: 1px solid ${Colors.white};
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 40px;
`;

const Crads = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${DESKTOP_MQ} {
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
  }
`;

const H2 = styled.h2<{ theme: ThemeType }>`
  color: ${(p) => THEMES[p.theme.themeName]?.h2};
  font-size: 50px;
  font-weight: bolder;
  margin: 40px 0 40px 0;
  display: block;
  text-align: center;
  position: relative;

  &::after {
    content: "Repos";
    color: ${Colors.white};
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }
`;
