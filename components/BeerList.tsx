import { useEffect, useState } from "react";
import { BeerTile } from "./BeerTile";
import { Pagination } from "./Pagination";
import { BeerTileSkeleton } from "./BeerTileSkeleton";
import { WrapperStyled, ErrorMessageWrapperStyled } from "./BeerList.styled";
import { Beer } from "./types";

export const BeerList = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.punkapi.com/v2/beers?per_page=${pageSize}&page=${page}`)
      .then((res) => res.json())
      .then((beers) => {
        setBeers(beers);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [pageSize, page]);

  function goForward() {
    setPage((page) => page + 1);
  }

  function goBack() {
    setPage((page) => page - 1);
  }

  if (!isLoading && !beers.length) {
    return (
      <ErrorMessageWrapperStyled>
        <span>Oops, something went wrong!</span>
      </ErrorMessageWrapperStyled>
    );
  }

  return (
    <>
      <WrapperStyled>
        {beers.length
          ? beers.map((beer: Beer) => <BeerTile key={beer.id} beer={beer} />)
          : new Array(pageSize)
              .fill(0)
              .map((_, index) => <BeerTileSkeleton key={index} />)}
      </WrapperStyled>
      <Pagination
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        page={page}
        goBack={goBack}
        goForward={goForward}
        currentElementCount={beers.length}
      />
    </>
  );
};
