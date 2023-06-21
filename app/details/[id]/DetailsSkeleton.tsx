import Skeleton from "react-loading-skeleton";
import { PageHeader } from "@/components/PageHeader";

import {
  PageWrapperStyled,
  DescriptionWrapperStyled,
} from "./page.styled";

export const DetailsSkeleton = () => {
  return (
    <>
      <PageHeader>
        <Skeleton height={"100%"} width={150} />
      </PageHeader>
      <PageWrapperStyled>
        <div>
          <Skeleton width={190} height={390} />
        </div>
        <DescriptionWrapperStyled>
          <h2>
            <Skeleton height={40} />
          </h2>
          <span>
            <Skeleton height={120} />
          </span>
          <div>
            <Skeleton height={85} />
          </div>
          <div>
            <Skeleton height={76} />
          </div>
        </DescriptionWrapperStyled>
      </PageWrapperStyled>
    </>
  );
};
