import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPlant, deleteAllPlants, getPlants } from '../helper/plant';
import { Plant } from '../helper/types';

export function usePlants() {
  const queryClient = useQueryClient();

  const deleteAllPlantsMutation = useMutation(deleteAllPlants, {
    mutationKey: ['plants'],
    onMutate: () => {
      queryClient.setQueriesData<Plant[]>(['plants'], () => []);
    },
  });

  const createPlantMutation = useMutation(createPlant, {
    mutationKey: ['plants'],
    onMutate: (data) => {
      queryClient.setQueryData<Plant[]>(['plants'], (plants) => [
        ...(plants ?? []),
        data,
      ]);
    },
  });

  const plantsQuery = useQuery(['plants'], getPlants);

  return { plantsQuery, createPlantMutation, deleteAllPlantsMutation };
}
