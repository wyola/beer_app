"use client";
import { PageHeader } from "@/components/PageHeader";
import { BeerList } from "@/components/BeerList";

export default function Home() {
  
  return (
    <main>
      <PageHeader>Beers</PageHeader>
      <BeerList />
    </main>
  );
}
