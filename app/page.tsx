"use client";

import { BeerList } from "@/components/BeerList";
import { PageLayout } from "./PageLayout";

export default function Home() {
  return (
    <PageLayout title="Beers">
      <BeerList />
    </PageLayout>
  );
}
