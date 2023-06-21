"use client";

import { useState, useEffect } from "react";
import { PageLayout } from "@/app/PageLayout";
import { DetailsSkeleton } from "./DetailsSkeleton";
import { LinkButton } from "@/components/LinkButton";
import {
  BeerPageWrapperStyled,
  ImageStyled,
  DescriptionWrapperStyled,
  LinkWrapperStyled,
} from "./page.styled";
import { Beer } from "@/components/types";

type PageProps = {
  params: {
    id: string;
  };
};

export default function BeerPage({ params }: PageProps) {
  const [beer, setBeer] = useState<Beer>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
      .then((res) => res.json())
      .then((beer) => {
        setBeer(beer[0]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [params.id]);

  // prepare data for ingredients
  const malt = beer?.ingredients.malt.map((malt) => malt.name).join(", ");
  const hops = Array.from(
    new Set(beer?.ingredients.hops.map((hops) => hops.name))
  ).join(", ");
  const yeast = beer?.ingredients.yeast;

  if (!isLoading && !beer) {
    return (
      <PageLayout title="Beer not found :(">
        <LinkWrapperStyled>
          <LinkButton href="/">&#8592; go back to homepage</LinkButton>
        </LinkWrapperStyled>
      </PageLayout>
    );
  }

  return (
    <>
      {beer ? (
        <PageLayout title={beer.name}>
          <BeerPageWrapperStyled>
            <ImageStyled
              alt={`Image of ${beer.name} beer`}
              src={beer.image_url}
            />
            <DescriptionWrapperStyled>
              <h2>{beer.tagline}</h2>
              <span>{beer.description}</span>
              <div>
                <h3>Details:</h3>
                <span>abv: {beer.abv}%</span>
                <span>ibu: {beer.ibu}</span>
              </div>
              <div>
                <h3>Ingredients:</h3>
                <span>Malt: {malt}</span>
                <span>Hops: {hops}</span>
                <span>Yeast: {yeast}</span>
              </div>
            </DescriptionWrapperStyled>
          </BeerPageWrapperStyled>
          <LinkButton href="/">&#8592; go back to homepage</LinkButton>
        </PageLayout>
      ) : (
        <DetailsSkeleton />
      )}
    </>
  );
}
