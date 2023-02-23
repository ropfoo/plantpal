import { View } from '../Themed';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 21, flex: 1 }}>
      {children}
    </View>
  );
}
