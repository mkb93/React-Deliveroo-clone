import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500 p-10">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </TailwindProvider>
  );
}


