"use client";

import { useEffect, useState } from "react";
import { BeerTile } from "./BeerTile";
import { BeerTileSkeleton } from "./BeerTileSkeleton";
import { WrapperStyled, PaginationWrapperStyled } from "./BeerList.styled";
import { Beer } from "./types";

export const BeerList = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?per_page=12&page=${page}`)
      .then((res) => res.json())
      .then((beers) => setBeers(beers));
  }, [page]);

  console.log(beers.length);

  function goForward() {
    setPage((page) => page + 1);
  }

  function goBack() {
    setPage((page) => page - 1);
  }

  return (
    <>
      <WrapperStyled>
        {beers.length
          ? beers.map((beer: Beer) => <BeerTile key={beer.id} beer={beer} />)
          : new Array(12)
              .fill(0)
              .map((_, index) => <BeerTileSkeleton key={index} />)}
      </WrapperStyled>
      <PaginationWrapperStyled>
        <button onClick={goBack} disabled={page < 2}>
          {"<"}
        </button>
        <div>{page}</div>
        <button onClick={goForward} disabled={beers.length < 12}>
          {">"}
        </button>
      </PaginationWrapperStyled>
    </>
  );
};
