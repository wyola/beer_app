"use client";

import { useEffect, useState } from "react";
import { BeerTile } from "./BeerTile";
import { WrapperStyled } from "./BeerList.styled";
import { Beer } from "./types";

export const BeerList = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((beers) => setBeers(beers));
  }, []);

  return (
    <WrapperStyled>
      {beers.map((beer: Beer) => (
        <BeerTile key={beer.id} beer={beer} />
      ))}
    </WrapperStyled>
  );
};
