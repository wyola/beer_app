"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Beer } from "@/components/types";
import {
  PageWrapperStyled,
  ImageStyled,
  DescriptionWrapperStyled,
} from "./page.styled";

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

  // prepare ingredients
  const malt = beer?.ingredients.malt.map((malt) => malt.name).join(", ");
  const hops = beer?.ingredients.hops.map((hops) => hops.name).join(", ");
  const yeast = beer?.ingredients.yeast;

  return (
    <main>
      <PageHeader>{beer?.name}</PageHeader>
      <PageWrapperStyled>
        <ImageStyled
          alt={`Image of ${beer?.name} beer`}
          src={beer?.image_url}
        />
        <DescriptionWrapperStyled>
          <h2>{beer?.tagline}</h2>
          <span>{beer?.description}</span>
          <div>
            <h3>Details:</h3>
            <span>abv: {beer?.abv}%</span>
            <span>ibu: {beer?.ibu}</span>
          </div>
          <div>
            <h3>Ingredients:</h3>
            <span>Malt: {malt}</span>
            <span>Hops: {hops}</span>
            <span>Yeast: {yeast}</span>
          </div>
        </DescriptionWrapperStyled>
      </PageWrapperStyled>
    </main>
  );
}
