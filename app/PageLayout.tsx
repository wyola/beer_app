import { PageHeader } from "@/components/PageHeader";
import { ReactNode } from "react";
import styled from "styled-components";

type PageLayoutProps = {
  title?: ReactNode;
  children: ReactNode;
};

const PageContent = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  color: #979797;
`;

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <main>
      <PageHeader>{title}</PageHeader>
      <PageContent>{children}</PageContent>
    </main>
  );
};
