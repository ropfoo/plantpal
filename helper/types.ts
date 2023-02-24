export type Plant = {
  id: string;
  name: string;
  species: string;
  imgSrc: string;
};

export type NewPlant = {
  name?: string;
  species?: string;
  imgSrc?: string;
};
