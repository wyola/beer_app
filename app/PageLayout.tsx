import { PageHeader } from "@/components/PageHeader";
import { ReactNode } from "react";

type PageLayoutProps = {
  title?: ReactNode;
  children: ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <main>
      <PageHeader>{title}</PageHeader>
      {children}
    </main>
  );
};
