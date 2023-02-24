import * as React from 'react';

import { RootStackScreenProps } from '../../types';
import CameraComponent from '../../components/Camera/Camera';
import MainLayout from '../../components/Layout/MainLayout';

export default function AddPlantTwo({
  navigation,
}: RootStackScreenProps<'AddPlantTwo'>) {
  return (
    <MainLayout>
      <CameraComponent />
    </MainLayout>
  );
}
