import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";

const SkeletonWrapperStyled = styled.div`
  height: 215px;
  border-radius: 5px;
`;

export const BeerTileSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e1e1e1" highlightColor="#fff">
      <SkeletonWrapperStyled>
        <Skeleton height="100%"/>
      </SkeletonWrapperStyled>
    </SkeletonTheme>
  );
};
