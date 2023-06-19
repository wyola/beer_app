"use client";

import { useEffect, useState } from "react";
import { BeerTile } from "./BeerTile";
import { WrapperStyled } from "./BeerList.styled";
import { Beer, Beers } from "./types";

export const BeerList = () => {
  const [beers, setBeers] = useState<Beers>([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((beers) => setBeers(beers));
  }, []);

  return (
    <WrapperStyled>
      {beers.map((beer: Beer) => (
        <BeerTile
          key={beer.id}
          imageSource={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      ))}
    </WrapperStyled>
  );
};
