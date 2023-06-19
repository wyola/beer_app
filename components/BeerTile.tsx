"use client";

import {
  WrapperStyled,
  Image,
  DetailsWrapperStyled,
  NameStyled,
  TaglineStyled,
} from "./BeerTile.styled";
import { SeparatorStyled } from "./Separator";

export type BeerTileProps = {
  imageSource?: string;
  name?: string;
  tagline?: string;
};

export const BeerTile = ({ imageSource, name, tagline }: BeerTileProps) => {
  return (
    <WrapperStyled>
      <Image alt={`Image of ${name} beer`} src={imageSource} />
      <DetailsWrapperStyled>
        <NameStyled>{name}</NameStyled>
        <SeparatorStyled/>
        <TaglineStyled>{tagline}</TaglineStyled>
      </DetailsWrapperStyled>
    </WrapperStyled>
  );
};
