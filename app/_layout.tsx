import { Stack } from "expo-router";
import CadastroProduto from "./Componentes/Adptadores/CadastroProduto";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"Bar do GG"}} />
      <Stack.Screen name="Cadastro"></Stack.Screen>
    </Stack>
  );
}
