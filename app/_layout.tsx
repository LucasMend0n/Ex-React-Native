import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"Bar do GG"}} />
      <Stack.Screen name="Cadastro"/>
    </Stack>
  );
}
