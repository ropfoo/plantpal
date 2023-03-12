import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { checkPlant, getPlant } from '../helper/plant';
import { Plant, PlantCheck } from '../helper/types';

export function usePlant(plantId: string) {
  const queryClient = useQueryClient();

  const { data: plant } = useQuery([plantId], () => getPlant(plantId));

  const plantCheckMutation = useMutation(
    [plantId],
    (plantCheck: PlantCheck) => checkPlant(plantId ?? '', plantCheck),
    {
      onMutate: (data) => {
        const currentPlantData = queryClient.getQueryData<Plant>([plantId]);

        if (currentPlantData) {
          const updatedPlant: Plant = {
            ...currentPlantData,
            activity: [data, ...currentPlantData.activity],
          };

          // update single plant in cache
          queryClient.setQueryData([plantId], updatedPlant);

          // update entrire plant array in cache
          queryClient.setQueryData<Plant[]>(['plants'], (plants) =>
            plants?.map((plant) =>
              plant.id === updatedPlant.id ? updatedPlant : plant
            )
          );
        }
      },
    }
  );

  return { plant, plantCheckMutation };
}
