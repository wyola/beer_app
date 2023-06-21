export type Beer = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  ingredients: {
    malt: Array<{
      name: string;
    }>;
    hops: Array<{
      name: string;
    }>;
    yeast: string;
  };
};
