"use client";
import { Trapezoid } from "@/components/Header";
import { BeerList } from "@/components/BeerList";

export default function Home() {
  return (
    <main>
      <Trapezoid>Beers</Trapezoid>
      <BeerList />
    </main>
  );
}
