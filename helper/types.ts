export type Plant = {
  id: string;
  name: string;
  species: string;
  imgSrc: string;
  lastWatering?: string;
  activity: PlantCheck[];
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

export type PlantCheck = {
  plantId: string;
  date: string;
  note?: string;
  wasWatered: boolean;
};
