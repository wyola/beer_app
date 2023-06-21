import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonWrapperStyled = styled.div`
  height: 215px;
  border-radius: 5px;
`;

export const BeerTileSkeleton = () => {
  return (
      <SkeletonWrapperStyled>
        <Skeleton height="100%"/>
      </SkeletonWrapperStyled>
  );
};
