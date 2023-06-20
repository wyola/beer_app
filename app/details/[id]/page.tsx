"use client"

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Beer } from "@/components/types";

type PageProps = {
  params: {
    id: string;
  };
};

export default function BeerPage({ params }: PageProps) {
  const [beer, setBeer] = useState<Beer>();

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
      .then((res) => res.json())
      .then((beer) => setBeer(beer[0]));
  }, [params.id]);

  console.log(beer)

  return (
    <PageHeader>{beer?.name}</PageHeader>
  );
}
