export type Plant = {
  id: string;
  name: string;
  species: string;
  imgSrc: string;
  lastWatering?: Date;
  wateringHistory: Date[];
  wateringInterval: number;
};

export type NewPlant = {
  name?: string;
  species?: string;
  imgSrc?: string;
};

export type WaterPlantData = {
  date: Date;
};
