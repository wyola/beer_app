import Skeleton from "react-loading-skeleton";
import { PageLayout } from "@/app/PageLayout";

import { PageWrapperStyled, DescriptionWrapperStyled } from "./page.styled";

export const DetailsSkeleton = () => {
  return (
    <PageLayout title={<Skeleton height={"100%"} width={150} />}>
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
    </PageLayout>
  );
};
