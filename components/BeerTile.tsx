"use client";

import {
  LinkStyled,
  ImageStyled,
  DetailsWrapperStyled,
  NameStyled,
  TaglineStyled,
} from "./BeerTile.styled";
import { Separator } from "./Separator";
import { Beer } from "./types";

export type BeerTileProps = {
  beer: Beer;
};

export const BeerTile = ({ beer }: BeerTileProps) => {
  return (
    <LinkStyled href={`/details/${beer.id}`}>
      <ImageStyled alt={`Image of ${beer.name} beer`} src={beer.image_url} />
      <DetailsWrapperStyled>
        <NameStyled>{beer.name}</NameStyled>
        <Separator />
        <TaglineStyled>{beer.tagline}</TaglineStyled>
      </DetailsWrapperStyled>
    </LinkStyled>
  );
};
